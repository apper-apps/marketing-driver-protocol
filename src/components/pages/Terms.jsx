import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>

        <div className="bg-gradient-card rounded-2xl border border-primary-600/20 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using D Marketing Lab's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              2. Use License
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on D Marketing Lab's website for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>This is the grant of a license, not a transfer of title</li>
              <li>You may not modify or copy the materials</li>
              <li>You may not use the materials for any commercial purpose</li>
              <li>You may not attempt to decompile or reverse engineer any software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              3. Service Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our training and consulting services are provided subject to availability and may be modified or discontinued at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              5. Payment Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Payment is required before service delivery unless otherwise agreed. All fees are non-refundable except as explicitly stated in our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              D Marketing Lab shall not be liable for any damages arising from the use or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-300 mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our contact page or email us directly.
            </p>
          </section>

          <div className="pt-8 border-t border-primary-600/20">
            <p className="text-sm text-gray-400 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}