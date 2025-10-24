import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
            <p className="font-semibold text-foreground mb-2">Important Notice</p>
            <p>Please read this disclaimer carefully before using our services or relying on any information provided by Varma Investments.</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. General Information Only</h2>
            <p>The information provided on this website and through our communications is for general informational and educational purposes only. It should not be considered as personalized investment advice unless explicitly provided through a formal advisory engagement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Not a Guarantee of Returns</h2>
            <p><strong>Investment in shares, mutual funds, bonds, and other securities is subject to market risks.</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Past performance is not indicative of future results</li>
              <li>We do not guarantee any specific returns or profits</li>
              <li>Investment values can fluctuate and may result in loss of principal</li>
              <li>Different investment products carry different levels of risk</li>
              <li>Returns are subject to market conditions and cannot be predicted with certainty</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Independent Decision Making</h2>
            <p>All investment decisions are yours alone. While we provide professional advice and recommendations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for evaluating the suitability of any investment for your circumstances</li>
              <li>You should conduct your own research and due diligence</li>
              <li>You should consult with tax and legal advisors regarding your specific situation</li>
              <li>Final investment decisions rest solely with you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Market Risks</h2>
            <p>Investment in financial markets involves various risks including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Market Risk:</strong> Fluctuations in market prices and values</li>
              <li><strong>Liquidity Risk:</strong> Difficulty in selling investments at desired prices</li>
              <li><strong>Credit Risk:</strong> Issuer default or downgrade in credit ratings</li>
              <li><strong>Interest Rate Risk:</strong> Impact of interest rate changes on investment values</li>
              <li><strong>Currency Risk:</strong> Fluctuations in foreign exchange rates</li>
              <li><strong>Political and Economic Risk:</strong> Changes in government policies, regulations, or economic conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Accuracy of Information</h2>
            <p>While we strive to provide accurate and up-to-date information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Market data and prices may be delayed or subject to errors</li>
              <li>Information can change rapidly without notice</li>
              <li>We do not warrant the completeness or accuracy of all information</li>
              <li>You should verify all information independently</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. No Liability for Losses</h2>
            <p>Varma Investments and its representatives shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any investment losses or damages arising from market fluctuations</li>
              <li>Decisions made based on general information provided on this website</li>
              <li>Errors or omissions in information provided by third parties</li>
              <li>Technical issues, system failures, or delays in communication</li>
              <li>Actions taken by third-party financial institutions or platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Third-Party Information</h2>
            <p>This website may contain links to third-party websites or reference third-party products and services. We do not endorse or guarantee the accuracy of information from external sources. Use of third-party platforms and services is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Regulatory Status</h2>
            <p>Varma Investments operates as a registered investment advisor. However:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration does not imply approval or endorsement by regulatory authorities</li>
              <li>It does not guarantee expertise or guarantee returns</li>
              <li>Clients should verify our credentials independently</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Risk Disclosure Requirement</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Mandatory Risk Disclosure</p>
              <p><strong>Investments in securities market are subject to market risks. Read all the related documents carefully before investing.</strong></p>
              <p className="mt-3">Before investing, please:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Assess your risk appetite and financial goals</li>
                <li>Understand the products you are investing in</li>
                <li>Read all offer documents and disclosures</li>
                <li>Seek professional advice if unsure</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Testimonials and Case Studies</h2>
            <p>Any testimonials, case studies, or examples of past performance shown on this website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Represent individual experiences and may not be typical</li>
              <li>Do not guarantee similar results for other investors</li>
              <li>Are subject to market conditions at the time</li>
              <li>Should not be the sole basis for investment decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Professional Advice</h2>
            <p>This website and its content do not constitute legal, tax, or accounting advice. You should consult with qualified professionals regarding your specific circumstances before making any financial decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Updates and Changes</h2>
            <p>We reserve the right to update this disclaimer at any time without prior notice. It is your responsibility to review this disclaimer periodically for changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Contact Us</h2>
            <p>If you have questions about this disclaimer or need clarification on any investment-related matters:</p>
            <div className="bg-muted/30 p-4 rounded-lg mt-4">
              <p className="font-semibold">Varma Investments</p>
              <p>Shop Number 5, Radhakrishna Vikhe Patil Complex</p>
              <p>Chitali Road Rahata, Dist- Ahilyanagar, Pin- 423107</p>
              <p>Email: varmainvestment2008@gmail.com</p>
              <p>Phone: +91 9403034505</p>
            </div>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg mt-8">
            <p className="font-semibold text-foreground mb-2">Acknowledgment</p>
            <p>By using our website or services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
