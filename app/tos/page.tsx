"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black text-white">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service for 1473212 B.C. LTD DBA Buzz Me Up</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-light-gray">
            <p>Last Updated: November 14th 2024</p>
            
            <p>Welcome to Buzz Me Up! These Terms of Service ("Terms") govern your use of the Buzz Me Up iOS app and related services (collectively, the "Service"). By downloading, accessing, or using the Service, you agree to these Terms. If you do not agree, please do not use the Service.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By creating an account, downloading, or otherwise using the Service, you agree to these Terms and our Privacy Policy. You must be at least 18 years old to use the Service.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Service</h2>
            <p>Buzz Me Up provides a digital access control solution for managing building intercom systems through your smartphone. Our Service allows users to manage intercom access for deliveries, visitors, and guests in supported buildings.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the Service only for lawful purposes.</li>
              <li>Not misuse the Service in any way that could impair the operation or security of the app or other users' data.</li>
              <li>Only grant intercom access to authorized persons and inform them of applicable building policies regarding access.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitations on Liability for Access and Security</h2>
            <p>Buzz Me Up is not responsible for any unauthorized access, security breaches, or incidents that occur as a result of using our Service, including but not limited to any actions involving unauthorized entry, personal injury, property damage, or theft. You assume full responsibility for any risks associated with granting intercom access through our Service. The Service is designed solely as a convenience for access control and is not a replacement for on-site security measures or protocols. Buzz Me Up Inc. disclaims all liability for any harm, damage, or liability resulting from access granted through the app, whether accidental or intentional.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. No Liability for Door Access Malfunctions</h2>
            <p>While we strive to maintain consistent functionality, Buzz Me Up does not guarantee error-free operation, connectivity, or uninterrupted access to building intercom systems. We assume no responsibility for any malfunction or failure of the app or your building's intercom system that may result in a failure to grant or deny access at the door. Use of the app for door access purposes is at your own risk.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied. To the fullest extent permitted by law, Buzz Me Up disclaims any warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Buzz Me Up Inc., its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your use of or inability to use the Service.</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
              <li>Any other matters relating to the Service.</li>
            </ul>
            <p>In jurisdictions that do not allow the exclusion or limitation of certain liabilities, our liability will be limited to the fullest extent permitted by applicable law.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. User Accounts and Security</h2>
            <p>You are responsible for maintaining the confidentiality of your account and any login information. You are responsible for all activities that occur under your account, and you agree to notify us immediately of any unauthorized use.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Modification and Termination</h2>
            <p>We reserve the right to modify, suspend, or discontinue the Service, or any part of it, at any time, with or without notice. We may also update these Terms from time to time, and continued use of the Service constitutes acceptance of such changes.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by the laws of British Columbia, Canada. Any disputes arising out of or relating to these Terms or the Service will be resolved through binding arbitration in British Columbia, except for claims in small claims court.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Contact Us</h2>
            <p>If you have any questions regarding these Terms, please contact us at:</p>
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