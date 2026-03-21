import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Finance App",
  description: "A personal finance management tool. Track your expenses, set budgets, and achieve your financial goals with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar /> 
        
        {children}

      </body>
    </html>
  );
}
