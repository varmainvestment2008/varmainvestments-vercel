import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Save, ArrowLeft, LogOut } from "lucide-react";
import { Link } from "wouter";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Content } from "@shared/schema";
import { contentSchema } from "@shared/schema";
import AdminLogin from "./AdminLogin";

export default function Admin() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("hero");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // All hooks must be called before any conditional returns
  const { data: content, isLoading } = useQuery<Content>({
    queryKey: ["/api/content"],
    enabled: isAuthenticated, // Only fetch when authenticated
  });

  const form = useForm<Content>({
    resolver: zodResolver(contentSchema),
    values: content,
  });

  const updateMutation = useMutation({
    mutationFn: async (data: Content) => {
      return await apiRequest("PUT", "/api/content", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/content"] });
      toast({
        title: "Changes Saved!",
        description: "Your website content has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  const onSubmit = (data: Content) => {
    updateMutation.mutate(data);
  };

  // Conditional return AFTER all hooks
  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  if (isLoading || !content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" data-testid="button-back-home">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Website
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-2xl font-bold">Content Manager</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost"
                onClick={handleLogout}
                data-testid="button-logout"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
              <Button 
                onClick={form.handleSubmit(onSubmit)}
                disabled={updateMutation.isPending}
                data-testid="button-save-changes"
              >
                <Save className="h-4 w-4 mr-2" />
                {updateMutation.isPending ? "Saving..." : "Save All Changes"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="hero" data-testid="tab-hero">Hero Section</TabsTrigger>
              <TabsTrigger value="services" data-testid="tab-services">Services</TabsTrigger>
              <TabsTrigger value="stats" data-testid="tab-stats">Statistics</TabsTrigger>
              <TabsTrigger value="testimonials" data-testid="tab-testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="contact" data-testid="tab-contact">Contact Info</TabsTrigger>
              <TabsTrigger value="footer" data-testid="tab-footer">Footer</TabsTrigger>
            </TabsList>

            <TabsContent value="hero">
              <Card className="p-8">
                <h2 className="text-xl font-semibold mb-6">Hero Section</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="hero.title">Company Name</Label>
                    <Input
                      id="hero.title"
                      {...form.register("hero.title")}
                      data-testid="input-hero-title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero.subtitle">Subtitle</Label>
                    <Input
                      id="hero.subtitle"
                      {...form.register("hero.subtitle")}
                      data-testid="input-hero-subtitle"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero.description">Description</Label>
                    <Textarea
                      id="hero.description"
                      {...form.register("hero.description")}
                      rows={3}
                      data-testid="input-hero-description"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label>Trust Indicators</Label>
                    {(form.watch("hero.trustIndicators") || []).map((_, index) => (
                      <div key={index} className="flex gap-4">
                        <Input
                          {...form.register(`hero.trustIndicators.${index}.text`)}
                          placeholder="Indicator text"
                          data-testid={`input-trust-indicator-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <div className="space-y-6">
                {(form.watch("services") || []).map((_, index) => (
                  <Card key={index} className="p-8">
                    <h3 className="text-lg font-semibold mb-4">Service {index + 1}</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Service Title</Label>
                        <Input
                          {...form.register(`services.${index}.title`)}
                          data-testid={`input-service-title-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          {...form.register(`services.${index}.description`)}
                          rows={3}
                          data-testid={`input-service-description-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Features (comma-separated)</Label>
                        <Input
                          value={(form.watch(`services.${index}.features`) || []).join(", ")}
                          onChange={(e) => {
                            const features = e.target.value.split(",").map(f => f.trim());
                            form.setValue(`services.${index}.features`, features);
                          }}
                          data-testid={`input-service-features-${index}`}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(form.watch("stats") || []).map((_, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Statistic {index + 1}</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Number/Value</Label>
                        <Input
                          {...form.register(`stats.${index}.number`)}
                          data-testid={`input-stat-number-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Label</Label>
                        <Input
                          {...form.register(`stats.${index}.label`)}
                          data-testid={`input-stat-label-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Input
                          {...form.register(`stats.${index}.description`)}
                          data-testid={`input-stat-description-${index}`}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonials">
              <div className="space-y-6">
                {(form.watch("testimonials") || []).map((_, index) => (
                  <Card key={index} className="p-8">
                    <h3 className="text-lg font-semibold mb-4">Testimonial {index + 1}</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Client Name</Label>
                          <Input
                            {...form.register(`testimonials.${index}.name`)}
                            data-testid={`input-testimonial-name-${index}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Investment Type</Label>
                          <Input
                            {...form.register(`testimonials.${index}.investment`)}
                            data-testid={`input-testimonial-investment-${index}`}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Initials</Label>
                        <Input
                          {...form.register(`testimonials.${index}.initials`)}
                          placeholder="e.g., RK"
                          maxLength={3}
                          data-testid={`input-testimonial-initials-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Quote/Review</Label>
                        <Textarea
                          {...form.register(`testimonials.${index}.quote`)}
                          rows={3}
                          data-testid={`input-testimonial-quote-${index}`}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <Card className="p-8">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Address</h3>
                    <div className="space-y-3">
                      <Input {...form.register("contact.address.line1")} placeholder="Line 1" data-testid="input-address-line1" />
                      <Input {...form.register("contact.address.line2")} placeholder="Line 2" data-testid="input-address-line2" />
                      <Input {...form.register("contact.address.line3")} placeholder="Line 3" data-testid="input-address-line3" />
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-3">Phone Numbers</h3>
                    <div className="space-y-3">
                      <Input {...form.register("contact.phone.primary")} placeholder="Primary" data-testid="input-phone-primary" />
                      <Input {...form.register("contact.phone.secondary")} placeholder="Secondary" data-testid="input-phone-secondary" />
                      <Input {...form.register("contact.phone.hours")} placeholder="Hours" data-testid="input-phone-hours" />
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-3">Email Addresses</h3>
                    <div className="space-y-3">
                      <Input {...form.register("contact.email.primary")} placeholder="Primary" data-testid="input-email-primary" />
                      <Input {...form.register("contact.email.secondary")} placeholder="Secondary" data-testid="input-email-secondary" />
                      <Input {...form.register("contact.email.note")} placeholder="Note" data-testid="input-email-note" />
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-3">Business Hours</h3>
                    <div className="space-y-3">
                      {(form.watch("contact.businessHours") || []).map((_, index) => (
                        <Input
                          key={index}
                          {...form.register(`contact.businessHours.${index}`)}
                          data-testid={`input-business-hours-${index}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="footer">
              <Card className="p-8">
                <h2 className="text-xl font-semibold mb-6">Footer Content</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input {...form.register("footer.companyName")} data-testid="input-footer-company" />
                  </div>
                  <div className="space-y-2">
                    <Label>Tagline</Label>
                    <Textarea {...form.register("footer.tagline")} rows={2} data-testid="input-footer-tagline" />
                  </div>
                  <div className="space-y-2">
                    <Label>Registration Info</Label>
                    <Input {...form.register("footer.registration")} data-testid="input-footer-registration" />
                  </div>
                  <div className="space-y-2">
                    <Label>Copyright Text</Label>
                    <Input {...form.register("footer.copyright")} data-testid="input-footer-copyright" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </div>
  );
}
