"use client";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
          {modal} {/* This will show the login modal when needed */}
        </SessionProvider>
      </body>
    </html>
  );
}
