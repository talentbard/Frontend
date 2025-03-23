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
  title: "Talet Bard - Find Diverse Vetted Developers for your Startup - Upto 5 Hour Trial ",
  description: "Talent Bard is a network of diverse vetted developers for your startup. You can filter developers by rate, skills, location, and experience. Try them for free and enjoy complete budget control.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Talet Bard - Find Diverse Vetted Developers for your Startup - Upto 5 Hour Trial ",
    description: "Talent Bard is a network of diverse vetted developers for your startup. You can filter developers by rate, skills, location, and experience. Try them for free and enjoy complete budget control.",
    url: "https://www.talentbard.com",
    siteName: "TalentBard",
    images: [
      {
        url: "https://www.talentbard.com/favicon.ico",
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
