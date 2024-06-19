import NextUiProvider from "../providers/NextUiProvider";

import "../styles/globals.css";
import "../styles/inludes.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <NextUiProvider>{children}</NextUiProvider>
      </body>
    </html>
  );
}
