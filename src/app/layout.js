import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar"

import Footer from "@/components/footer/Footer";
import ClientSideProvideTest from "@/components/clientSideProviderTest";
// import CompanyPage from "@/components/mobileAppBanner/page";


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Next App Title", 
//   description: "Next.js starter app description",
// };
export const metadata = {
  title: {
default : "Next.js 14 Home",
template:"%s | Next.js 14 "
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProvideTest > */}

        <div className="container" >
        <Navbar /> 
        {/* <h2>This is the layout page for all the page</h2> */}
        {children}
        {/* <CompanyPage /> */}
        <Footer />
        </div>
        {/* </ClientSideProvideTest> */}
        </body>
        
    </html>
  );
}
