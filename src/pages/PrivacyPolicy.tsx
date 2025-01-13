import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 lg:px-20 bg-background">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Interpretation and Definitions
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The words with capitalized initial letters have specific
                meanings under the following conditions.
              </p>
              <div className="pl-4 space-y-2">
                <p>
                  <strong>Company:</strong> ekvayu (JSS Science & Tech
                  Entrepreneurs Park, NOIDA)
                </p>
                <p>
                  <strong>Personal Data:</strong> Any information relating to an
                  identified or identifiable individual
                </p>
                <p>
                  <strong>Service:</strong> Refers to the Website
                  (https://ekvayu.com/)
                </p>
                <p>
                  <strong>Usage Data:</strong> Data collected automatically from
                  Service use
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Types of Data Collected
            </h2>
            <div className="text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold">Personal Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">
                Tracking Technologies and Cookies
              </h3>
              <p>We use Cookies and similar tracking technologies including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Session Cookies: Essential for Service functionality</li>
                <li>
                  Persistent Cookies: For user preferences and functionality
                </li>
                <li>Web Beacons: For analytics and system verification</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Use of Your Personal Data
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To manage your Account</li>
              <li>To contact you about updates and communications</li>
              <li>To provide news and offers about similar services</li>
              <li>For business transfers and analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Security of Your Personal Data
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While we implement commercially acceptable means to protect your
              Personal Data, no method of transmission over the Internet or
              electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personal information from anyone under 13 years
              old.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Changes to this Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy periodically. We will notify you
              of any changes by posting the new Privacy Policy on this page and
              updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about this Privacy Policy, contact us:
              <br />
              Email: pravin@ekvayu.com
              <br />
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

export default PrivacyPolicy;
