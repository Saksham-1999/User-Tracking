import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 px-3 lg:px-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Interpretation and Definitions</h2>
            <p className="leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. 
              These definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <div className="mt-4 space-y-4">
              <p><strong>Company:</strong> ekvayu, JSS Science & Tech Entrepreneurs Park (STEP) C-20/I, Sector 62, NOIDA - 201301, UP.</p>
              <p><strong>Country:</strong> Uttar Pradesh, India</p>
              <p><strong>Service:</strong> refers to the Website accessible from https://ekvayu.com/</p>
              <p><strong>Device:</strong> any device that can access the Service such as a computer, cellphone or digital tablet.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Acknowledgment</h2>
            <p className="leading-relaxed">
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Links to Other Websites</h2>
            <p className="leading-relaxed">
              Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company assumes no responsibility for third-party content, privacy policies, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              The entire liability of the Company shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Governing Law</h2>
            <p className="leading-relaxed">
              The laws of Uttar Pradesh, India, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms and Conditions, contact us:<br />
              Email: pravin@ekvayu.com<br />
              Phone: +919873134795
            </p>
          </section>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Last updated: November 11, 2024</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
