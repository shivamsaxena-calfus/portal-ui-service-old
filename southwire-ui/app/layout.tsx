import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from "./themeProvider";
import { roboto } from "./fonts";
import AuthenticationProvider from "./AuthenticationProvider";
import AuthGaurd from "./AuthGaurd";
import { PublicEnvScript } from 'next-runtime-env';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Southwire",
  description: "Discover, Compare and Master your documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <PublicEnvScript/>
      </head>
      <body className={`${roboto.className} antialiased text-base-primary`}>
        <AuthenticationProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <AuthGaurd>
                  {children}
                </AuthGaurd>
              </ThemeProvider>
            </AppRouterCacheProvider>
        </AuthenticationProvider>
      </body>
    </html>
  );
}
