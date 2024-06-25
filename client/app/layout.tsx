import NextUiProvider from "../providers/NextUiProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import "../styles/inludes.css";
import "../styles/animations.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true}>
          <NextUiProvider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </NextUiProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
