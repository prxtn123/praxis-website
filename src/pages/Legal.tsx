import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
            Privacy, GDPR & Terms
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: February 3, 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Welcome to the Node website, brought to you by Praxis GB (PRAXISGB LIMITED). We are committed to protecting your privacy and handling personal information responsibly in full compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-12">
              This notice applies only to our website (node.praxisgb.com or any associated domains). It does not cover data processed through the Node product/platform, which is governed by separate customer agreements and a Data Processing Addendum (DPA) when applicable.
            </p>

            <h2 className="text-3xl font-semibold text-black tracking-tight mt-16 mb-6">Privacy Policy</h2>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">What personal data we collect</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect only the information necessary for the website to function and to respond to your interactions:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Contact and enquiry data:</strong> name, email address, company name, phone number, and message content (when you submit a form, request a demo, or contact us).</li>
              <li><strong>Technical data:</strong> IP address, browser type and version, device information, operating system, pages visited, time and date of access, referral source (collected automatically via server logs and analytics tools).</li>
              <li><strong>Cookies and similar technologies:</strong> essential cookies for site operation; optional analytics and preference cookies (only with your consent where required).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              We do not collect special category data (e.g., health, ethnicity) via the website.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">How we use your data</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>To respond to your enquiries, demo requests, or other communications.</li>
              <li>To improve the website experience and content (using aggregated or anonymised usage data).</li>
              <li>To maintain site security and detect/prevent abuse.</li>
              <li>To send marketing updates or newsletters (only if you explicitly opt in).</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Legal basis for processing</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Legitimate interests</strong> - responding to enquiries, basic analytics, site security (balanced against your rights and freedoms).</li>
              <li><strong>Consent</strong> - for non-essential cookies and direct marketing emails (you can withdraw consent at any time).</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Who we share your data with</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We never sell personal data. Limited sharing occurs only with:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Trusted service providers (hosting, analytics, email delivery) bound by strict data protection obligations.</li>
              <li>Legal authorities when required by law.</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Data retention</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Enquiry/contact data:</strong> retained for up to 2 years (or longer if active business discussions continue).</li>
              <li><strong>Server logs & analytics:</strong> typically 14-26 months (configurable per tool).</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Your rights under UK GDPR</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Access, correct, or delete your personal data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability (where technically feasible)</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO) - <a href="https://ico.org.uk" className="text-blue-600 hover:text-blue-700">ico.org.uk</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              To exercise any of these rights, email <a href="mailto:privacy@praxisgb.com" className="text-blue-600 hover:text-blue-700">privacy@praxisgb.com</a>. We will respond within one month.
            </p>

            <h2 className="text-3xl font-semibold text-black tracking-tight mt-16 mb-6">GDPR Compliance Statement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Praxis GB acts as the data controller for personal data collected via this website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We process data lawfully, transparently, and for specified purposes only. We use appropriate technical and organisational measures to protect data and conduct privacy risk assessments where relevant. In the unlikely event of a personal data breach, we will notify the ICO and affected individuals as required by law (within 72 hours where applicable).
            </p>

            <h2 className="text-3xl font-semibold text-black tracking-tight mt-16 mb-6">Terms of Use</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              By accessing or using this website, you agree to these terms. If you do not agree, please do not use the site.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Permitted use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may view, browse, and download content for personal, non-commercial reference only. You must not:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Copy, reproduce, distribute or commercially exploit any content without written permission</li>
              <li>Modify or create derivative works from the site content</li>
              <li>Use the site for any unlawful purpose or in a way that could damage, disable, or impair it</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Intellectual property</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              All content on this website (text, images, design, logos) is owned by Praxis GB or licensed to us. No rights are granted beyond personal, non-commercial viewing.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Disclaimers and limitation of liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website is provided "as is" for informational purposes only. We do not guarantee accuracy, completeness, or uninterrupted access.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              To the maximum extent permitted by law, Praxis GB excludes all liability for any loss or damage arising from use of the site (including indirect or consequential loss). Our total liability is limited to £100.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Third-party links</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Any links to external websites are provided for convenience only. We are not responsible for their content or privacy practices.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Changes to these terms</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may update these terms from time to time. Continued use of the website after changes constitutes acceptance.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Governing law</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              These terms are governed by the laws of England and Wales. Any disputes are subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Contact</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              For privacy queries: <a href="mailto:privacy@praxisgb.com" className="text-blue-600 hover:text-blue-700">privacy@praxisgb.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-12">
              General enquiries: <a href="mailto:hello@praxisgb.com" className="text-blue-600 hover:text-blue-700">hello@praxisgb.com</a>
            </p>

            <p className="text-sm text-gray-500 mt-16">
              © 2026 PRAXISGB LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
