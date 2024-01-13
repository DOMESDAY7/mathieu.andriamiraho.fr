import "@/styles/globals.css";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mathieu Andriamiraho",
  description: "Mathieu Andriamiraho's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${ubuntu.variable}`}>{children}</body>
    </html>
  );
}
