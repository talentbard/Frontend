import "./globals.css";

export const metadata = {
  title: "TalentBard",
  icons: {
    icon: "/favicon.ico", // Ensure the file is in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}