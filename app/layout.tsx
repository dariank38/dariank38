import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clover38.com'),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.summary,
  keywords: [
    'Darian King',
    'Software Engineer',
    'Full-Stack Developer',
    'AI Engineer',
    'LLM',
    'LangChain',
    'RAG',
    'Windows Programming',
    'C#',
    'Android Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Node.js',
    'AWS',
    'Blockchain',
    'Web3',
    'Computer Vision',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clover38.com',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.summary,
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.summary,
    creator: '@tweetj0101',
    images: ['/favicon.png'],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: SITE_CONFIG.name,
              jobTitle: SITE_CONFIG.title,
              description: SITE_CONFIG.summary,
              email: `mailto:${SITE_CONFIG.email}`,
              url: 'https://clover38.com',
              sameAs: [
                SITE_CONFIG.github,
                SITE_CONFIG.twitter,
              ],
              knowsAbout: [
                'Software Engineering',
                'AI Engineering',
                'LLM Orchestration',
                'Full-Stack Development',
                'Windows Programming',
                'Android Development',
                'Computer Vision',
                'Blockchain',
              ],
            }),
          }}
        />
        <ThemeProvider defaultTheme="dark" enableSystem attribute="class">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
