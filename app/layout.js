import "./globals.css";
export const metadata = {
  title: "The Cricket Nerd - Home",
};

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/Images/Logo/The Cricket Nerd.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        {<Navbar />}
        {children}
        {<Footer/>}
      </body>
    </html>
  );
}
