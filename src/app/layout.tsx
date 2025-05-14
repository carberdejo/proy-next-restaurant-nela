import "@/ui/globals.css";
import {montserrat} from  '@/ui/fonts'
import HeaderOne from "@/components/header/HeaderOne";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <HeaderOne/>
        {children}
      </body>
    </html>
  );
}
