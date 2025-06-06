import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
  
       <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
           <Navbar/>
            <main className=" min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">{children}</main>
            
<Footer/>
           
          </ThemeProvider>
        </body>
      </html>
   
  );
}
