
import './globals.css';
import { Inter, Sora } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata = {
  title: 'DevSphereIndia',
  description: 'Learn and launch your Web3 project fast, right from your phone.',
  keywords: 'web3, blockchain, crypto, learning, mobile app, education',
  authors: [{ name: 'EasyA' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8B5CF6',

  icons: {
    // icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQFCD1ZNpARMBA/company-logo_200_200/B4EZe1.rXdHIAI-/0/1751104796589/devsphereindia_community_logo?e=1757548800&v=beta&t=9797OlJiarrDDus4Zn4-xO9iW6IVSYE6qQHAOo-CDMk', // Favicon के लिए
   icon: '/assets/devspherelogo.png',
    shortcut: '/shortcut-icon.png', 
    apple: '/apple-icon.png', 
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}