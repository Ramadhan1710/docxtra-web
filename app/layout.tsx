import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import "./globals.css";
import Footer from '../components/CustomFooter';
import Header from '../components/CustomHeader';
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOCXTRA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href={"css/header.css"} />
        <link rel="stylesheet" href={"css/landing.css"} />
        <link rel="stylesheet" href={"css/footer.css"} />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Notifications />
          <Header></Header>
          {children}
          <Footer></Footer>
        </MantineProvider>
        <script src={"js/header.js"} async></script>
      </body>
    </html>
  );
}
