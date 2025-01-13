import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ScrollToTop from "./components/Common/ScrollToTop";
import ContactUsPage from "./pages/ContactUsPage";
import JobsPage from "./pages/JobsPage";
import ProductsPage from "./pages/OfferingsPage";

import ErrorPage from "./pages/Error";
import ScrollToTopButton from "./components/Common/ScrollToTopButton";

import PhishingPreventionTool from "./pages/Product/PhishingPreventionTool";
import DecissionSupportSystem from "./pages/Product/DecissionSupportSystem";
import UnderwaterInstructionDetection from "./pages/Product/UnderwaterInstructionDetection";
import AiMlApplications from "./pages/Product/AiMlApplications";
import CyberSecuritySolutions from "./pages/Product/CyberSecuritySolutions";
import DefenseInnovations from "./pages/Product/DefenseInnovations";
import DigitalTransformations from "./pages/Product/DigitalTransformations";
import Faq from "./pages/Faq";
import LatestNews from "./pages/LatestNews";
import Customers from "./pages/Customers";
import TermsOfService from "./pages/TermsOfService";
// import CookieSetting from "./pages/CookieSetting";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUsPage />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUsPage />
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobsPage />
            </Layout>
          }
        />
        <Route
          path="/offerings"
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />

        <Route
          path="/phishing-prevention-tool"
          element={
            <Layout>
              <PhishingPreventionTool />
            </Layout>
          }
        />
        <Route
          path="/decission-support-system"
          element={
            <Layout>
              <DecissionSupportSystem />
            </Layout>
          }
        />
        <Route
          path="/underwaterinstructiondetection"
          element={
            <Layout>
              <UnderwaterInstructionDetection />
            </Layout>
          }
        />
        <Route
          path="/ai-ml-applications"
          element={
            <Layout>
              <AiMlApplications />
            </Layout>
          }
        />
        <Route
          path="/cyber-security-solutions"
          element={
            <Layout>
              <CyberSecuritySolutions />
            </Layout>
          }
        />

        <Route
          path="/digital-transformations"
          element={
            <Layout>
              <DigitalTransformations />
            </Layout>
          }
        />
        <Route
          path="/defense-innovations"
          element={
            <Layout>
              <DefenseInnovations />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/latest-news"
          element={
            <Layout>
              <LatestNews />
            </Layout>
          }
        />
        <Route
          path="/customers"
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />
        {/* <Route
          path="/cookie-settings"
          element={
            <Layout>
              <CookieSetting/>
            </Layout>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
