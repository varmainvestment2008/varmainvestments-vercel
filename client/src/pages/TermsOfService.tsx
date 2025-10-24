import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing our website or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Provided</h2>
            <p>Varma Investments provides investment advisory services including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stock market investment guidance</li>
              <li>Mutual fund recommendations and portfolio management</li>
              <li>Bond investment advisory</li>
              <li>Financial planning and consultation</li>
            </ul>
            <p>All services are subject to applicable laws and regulations governing investment advisory services in India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information about your financial situation and investment goals</li>
              <li>Inform us promptly of any changes in your financial circumstances</li>
              <li>Make your own independent investment decisions based on your risk tolerance</li>
              <li>Understand that past performance is not indicative of future results</li>
              <li>Review all investment documents and disclosures carefully before investing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Investment Risks</h2>
            <p>You acknowledge and understand that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All investments involve risk, including the potential loss of principal</li>
              <li>Market conditions can be volatile and unpredictable</li>
              <li>Past performance does not guarantee future results</li>
              <li>We do not guarantee any specific returns or profits</li>
              <li>You are solely responsible for your investment decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Fees and Charges</h2>
            <p>Our fee structure will be disclosed to you before you engage our services. Fees may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Advisory fees for consultation and portfolio management</li>
              <li>Transaction charges as applicable</li>
              <li>Third-party fees charged by financial institutions</li>
            </ul>
            <p>All fees and charges will be clearly communicated and agreed upon in writing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Confidentiality</h2>
            <p>We maintain strict confidentiality of all client information in accordance with our Privacy Policy and applicable laws. We will not disclose your personal or financial information without your consent, except as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not liable for investment losses resulting from market conditions</li>
              <li>Our liability is limited to the fees paid for our services</li>
              <li>We are not responsible for errors or delays by third-party financial institutions</li>
              <li>We do not guarantee specific investment outcomes or returns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Termination</h2>
            <p>Either party may terminate the advisory relationship at any time with written notice. Upon termination:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You remain responsible for fees accrued up to the termination date</li>
              <li>We will provide a final account statement</li>
              <li>Ongoing investments remain your responsibility</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Regulatory Compliance</h2>
            <p>We conduct our business in compliance with all applicable laws and regulations governing investment advisory services in India. We reserve the right to refuse service to any individual or decline any investment that does not meet our compliance standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmednagar, Maharashtra.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Material changes will be communicated to active clients. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
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
