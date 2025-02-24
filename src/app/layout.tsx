import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import UserLayout from "@/layouts/UserLayout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Max Dance - Studio tańca",
  description: "Max Dance - Studia tańca - description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Damion&family=Englebert&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Just+Me+Again+Down+Here&family=Kavivanar&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <UserLayout>{children}</UserLayout>
      </body>
    </html>
  );
}
