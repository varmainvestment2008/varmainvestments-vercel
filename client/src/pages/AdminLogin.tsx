import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Password is stored as SHA-256 hash for security
  // Current password: varma2025
  // To change: run `node generate-password-hash.js yourNewPassword` in terminal
  const ADMIN_PASSWORD_HASH = "951df61d6ba3e4b6b845d741e29e8ec1318b79c5d9597eb011114beea454b11d";

  const hashPassword = async (password: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const passwordHash = await hashPassword(password);
    
    setTimeout(() => {
      if (passwordHash === ADMIN_PASSWORD_HASH) {
        localStorage.setItem("adminAuth", "true");
        onLogin();
        toast({
          title: "Login Successful",
          description: "Welcome to the admin panel!",
        });
      } else {
        toast({
          title: "Invalid Password",
          description: "Please check your password and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4" data-testid="button-back-home">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Website
          </Button>
        </Link>

        <Card className="p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Admin Panel</h1>
            <p className="text-sm text-muted-foreground text-center">
              Enter your password to access the content management system
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                data-testid="input-admin-password"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
              data-testid="button-admin-login"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Current Password:</strong> varma2025
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                To change: Run <code className="bg-background px-1 py-0.5 rounded">node generate-password-hash.js yourNewPassword</code> in the Shell, then update the hash in <code className="bg-background px-1 py-0.5 rounded">AdminLogin.tsx</code>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
