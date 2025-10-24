import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a consultation or investment advice</li>
              <li>Contact us via WhatsApp, email, or phone</li>
              <li>Visit our office in person</li>
              <li>Engage our investment advisory services</li>
            </ul>
            <p>This information may include your name, email address, phone number, financial information, investment goals, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide investment advisory services tailored to your needs</li>
              <li>Communicate with you about your investments and our services</li>
              <li>Send you updates, market insights, and educational content</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>With financial institutions and platforms necessary to execute your investment transactions</li>
              <li>To comply with legal obligations, court orders, or regulatory requirements</li>
              <li>To protect our rights, property, or safety, or that of our clients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Financial records are maintained in accordance with applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with relevant data protection authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Cookies and Tracking</h2>
            <p>Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
            <div className="bg-muted/30 p-4 rounded-lg mt-4">
              <p className="font-semibold">Varma Investments</p>
              <p>Shop Number 5, Radhakrishna Vikhe Patil Complex</p>
              <p>Chitali Road Rahata, Dist- Ahilyanagar, Pin- 423107</p>
              <p>Email: varmainvestment2008@gmail.com</p>
              <p>Phone: +91 9403034505</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
