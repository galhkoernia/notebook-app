// components/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans px-4 py-6">
      <main className="max-w-3xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
