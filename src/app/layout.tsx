import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React from "react";
import Providers from "@/components/Providers";
import Loader from "@/components/common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script>
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="font-poppins dark:bg-boxdark-2 dark:text-bodydark ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
