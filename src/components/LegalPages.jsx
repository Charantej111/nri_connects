import React, { useState } from 'react';
import { Shield, FileText, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '../data/nriContent';

export default function LegalPages({ defaultTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="py-28 bg-[#FAF7F5] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'privacy'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-emerald-50'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'terms'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-emerald-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>

          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'disclaimer'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-emerald-50'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Legal Disclaimer</span>
          </button>
        </div>

        {/* Card Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md text-slate-700 space-y-6">
          
          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h1 className="text-2xl font-extrabold text-slate-900 font-display">Privacy Policy</h1>
                <p className="text-xs text-slate-400 mt-1">Effective Date: January 1, 2026</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                <p className="text-slate-500 italic">
                  This Privacy Policy outlines how Nova Resources of India Connects Private Limited ("NRI Connects") collects, uses, and secures your data.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">1. Data Collection & Comments</h3>
                <p>
                  When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">2. Cookies</h3>
                <p>
                  If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">3. User Profiles & Data Retention</h3>
                <p>
                  For users that register on our website, we store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">4. Third-Party Data Sharing</h3>
                <p>
                  We do not intentionally share user data with non-affiliated third parties. However, visitor comments may be checked through an automated spam detection service. We may receive data about users from third-party marketing sources to improve our service offerings.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">5. Security & Inquiries</h3>
                <p>
                  We employ industry-standard encryption measures to secure your personal records. For inquiries, contact our Data Protection Officer at <a href={`mailto:${CONTACT_INFO.email}`} className="text-emerald-600 font-bold">{CONTACT_INFO.email}</a>.
                </p>
              </div>
            </div>
          )}

          {/* Terms & Conditions */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h1 className="text-2xl font-extrabold text-slate-900 font-display">Terms & Conditions</h1>
                <p className="text-xs text-slate-400 mt-1">Effective Date: January 1, 2026</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                <p className="text-slate-500 italic">
                  By accessing and using this website, you agree to be bound legally by the following terms of Nova Resources of India Connects Private Limited.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">1. Intellectual Property & Usage Restrictions</h3>
                <p>
                  All materials, designs, layouts, and content on this website are the intellectual property of NRI Connects. You are strictly prohibited from reproducing, modifying, copying, or distributing any material from this site without obtaining express prior written permission from the company.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">2. Service Initiation Fee & Cost Assessment</h3>
                <p>
                  The basic charge to initiate any service task is ₹999. After reviewing the requested work and conducting a feasibility assessment, our team will provide a comprehensive cost outline. The initial ₹999 charge will be deducted from your final billing statement.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">3. Cancellations and Surcharges</h3>
                <p>
                  Online transactions form a binding contract. Any cancellation request submitted after transaction processing, regardless of the reason, is subject to an automatic 20% cancellation surcharge.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">4. Indemnification & Liability</h3>
                <p>
                  Users agree to indemnify, defend, and hold harmless NRI Connects, its affiliates, and employees from any losses, liabilities, damages, or costs resulting from your violation of these terms or misuse of the website.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">5. Governing Law</h3>
                <p>
                  Any legal claims, disputes, or proceedings arising under these terms or related to the usage of NRI Connects services shall be governed exclusively by the laws of the State of Telangana, India, and subject to courts in Hyderabad.
                </p>
              </div>
            </div>
          )}

          {/* Legal Disclaimer */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h1 className="text-2xl font-extrabold text-slate-900 font-display">Legal Disclaimer</h1>
                <p className="text-xs text-slate-400 mt-1">Effective Date: January 1, 2026</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                <h3 className="text-base font-bold text-slate-900 font-display">1. "As Is" Provision</h3>
                <p>
                  This website and all its materials, content, and services are provided on an "as is" and "as available" basis. NRI Connects makes no warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">2. Limitation of Liability</h3>
                <p>
                  Under no circumstances shall Nova Resources of India Connects Private Limited, its affiliates, or its partners be liable for any compensatory, direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this site, even if advised of the possibility of such damages.
                </p>

                <h3 className="text-base font-bold text-slate-900 font-display">3. Aggregate Liability Limit</h3>
                <p>
                  In the event of any legal dispute or claim, the aggregate liability of NRI Connects to the user for all damages, losses, and causes of action shall not exceed the amount paid by the user, if any, in the twelve (12) months preceding the dispute.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
