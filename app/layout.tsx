import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jitesh | Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                  const originalTitle = document.title; 

                  const theme = window.localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.classList.add(theme === 'dark' ? 'dark' : '');
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }

                  function handleVisibilityChange() {
                    if (document.visibilityState === 'hidden') {
                      document.title = '🥺 Come back soon!';
                    } else {
                      document.title = "😃 You're back!";
                      setTimeout(() => {
                        document.title = originalTitle; 
                      }, 1000); 
                    }
                  }

                  document.addEventListener('visibilitychange', handleVisibilityChange);
               })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className}
        bg-gradient-to-r from-[#dbd7fb] to-[#fbe2e3]
        overflow-x-hidden scrollbar-w-2 scrollbar scrollbar-thumb-primary 
        hover:scrollbar-thumb-[#9f9f9f] font-custom bg-[#fbe2e3]
        dark:from-[#151930] dark:to-[#151930] dark:bg-[#151930]
        `}
      >
        <ThemeContextProvider>
          {children}
          <Toaster position="top-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
