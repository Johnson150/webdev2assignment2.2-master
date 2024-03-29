// Import the Inter font from the Google Fonts collection via the 'next/font/google' package.
import { Inter } from "next/font/google";

// Import global styles from the 'globals.css' file.
import "./globals.css";

// Initialize the Inter font with subset "latin".
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the web page.
export const metadata = {
  title: "Create Next App", // Title of the page
  description: "Generated by create next app", // Description of the page
};

// Define the RootLayout component that wraps around the application's content.
export default function RootLayout({ children }) {
  return (
    // Root HTML tag with the language set to English
    <html lang="en">
      {/* Body tag with the 'inter' font class applied */}
      <body className={inter.className}>
        {/* Render the children components inside the body */}
        {children}
      </body>
    </html>
  );
}
