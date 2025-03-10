import "./globals.css";

export const metadata = {
  title: "TalentBard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
