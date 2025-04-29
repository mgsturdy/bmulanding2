"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black text-white">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy for 1473212 B.C. LTD DBA Buzz Me Up</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-light-gray">
            <p>Last Updated: November 13th 2024</p>
            
            <p>Buzz Me Up Inc. ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your personal information when you use our services.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect the following types of information to provide and improve our services:</p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">a. Personal Information</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Contact Details: Name, email address, and phone number.</li>
              <li>User-Generated Data: Access control data, including digital numbers, intercom usage, and notifications associated with your account.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">b. Usage Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Device Information: IP address, browser type, device identifiers, and settings.</li>
              <li>Activity Logs: Records of intercom access, user logins, and usage patterns.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">c. Location Information</h3>
            <p>We may collect location data related to your interactions with our service, such as building and room numbers, for service functionality.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services, including intercom access and user dashboards.</li>
              <li>Facilitate communication with your chosen contacts for intercom access.</li>
              <li>Ensure account security and authenticate access to the platform.</li>
              <li>Respond to customer service requests, feedback, and support needs.</li>
              <li>Analyze usage patterns to improve functionality and user experience.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Sharing of Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information under the following circumstances:</p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">With Service Providers:</h3>
            <p>For tasks such as customer support, data storage, and analytics. All third-party providers are contractually obligated to protect your data.</p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">For Legal Purposes:</h3>
            <p>To comply with legal requirements, enforce our policies, and protect the rights, property, or safety of our users and company.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
            <p>We employ industry-standard security measures to protect your information from unauthorized access, alteration, or destruction. However, no online service can be completely secure, and we cannot guarantee the absolute security of your information.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Retention</h2>
            <p>We retain your data as long as necessary to provide you with our services or as required for legal or business purposes. Upon request, we will delete your personal information in accordance with applicable laws.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt-out of certain data collection practices.</li>
              <li>Withdraw consent where we rely on it to process your data.</li>
            </ul>
            <p>If you would like to exercise any of these rights, please contact us at contact@buzzmeup.com.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Third-Party Links</h2>
            <p>Our platform may contain links to third-party sites or services. We are not responsible for the privacy practices of these third parties and encourage you to read their privacy policies.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Children's Privacy</h2>
            <p>Our services are intended for adults only. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it promptly.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Changes to this Privacy Policy</h2>
            <p>We may update this policy periodically. When we make changes, we will update the "Last Updated" date and notify you as required by law. We encourage you to review this policy periodically to stay informed.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p className="mt-2">1473212 B.C. LTD DBA Buzz Me Up</p>
            <p>Email: contact@buzzmeup.com</p>
            <p>Address: 5th Floor, 905 W Pender St, Vancouver, BC, V6C1L6</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}