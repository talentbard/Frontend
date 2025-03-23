// import "./globals.css";

// export const metadata = {
//   title: "TalentBard",
//   icons: {
//     icon: "/favicon.ico", // Ensure the file is in the public folder
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

import "./globals.css";

export const metadata = {
  title: "TalentBard",
  description: "Find and hire top talent with ease through TalentBard.",
  icons: {
    icon: "/favicon.ico", // Ensure the file is in the public folder
  },
  openGraph: {
    title: "TalentBard - Hire Top Talent",
    description: "Find and hire top talent with ease through TalentBard.",
    url: "https://www.talentbard.com",
    siteName: "TalentBard",
    images: [
      {
        url: "https://yourwebsite.com/path-to-your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Talent Bard Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
