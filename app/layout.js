import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata = {
  title: "Agrivolt - Transforming Waste into Clean Energy & Fertilizers",
  description: "Agrivolt transforms organic waste into biogas and high-quality fertilizers through innovative anaerobic digestion technology. Building Tunisia's sustainable future.",
  keywords: ["biogas", "renewable energy", "waste management", "Tunisia", "sustainable agriculture"],
  authors: [{ name: "Agrivolt Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#228B22",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="">{children}</body>
    </html>
  );
}
