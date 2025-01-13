import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-[1540px] mx-auto">
      <div className="w-full sticky top-0 z-50 bg-secondary  shadow-lg shadow-black/10">
        <Header />
      </div>

      <main className="min-h-screen">{children}</main>

      <div className="w-full bg-secondary mt-10 border-t border-black/10">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
