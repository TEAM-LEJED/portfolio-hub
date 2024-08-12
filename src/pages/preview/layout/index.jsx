// PreviewLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import ContactPreview from "../contactPreview/contactPreview";
import Navbar from "../navbar/navbar";

const PreviewLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="mt-60">
        <ContactPreview />
      </div>
    </div>
  );
};

export default PreviewLayout;
