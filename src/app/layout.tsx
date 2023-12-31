import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavbarComponent from "@/components/Navbar/Navbar.component"
import Head from "next/head"
import Script from "next/script"
import { DefaultFooter } from "@/components/Footer/footer.component"
import { Providers } from "@/redux/provider"
import ProtectedRoute from "../../protected-routes"
import { PageTransitionLoader } from "@/utils/page-transitioloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="dark mode toggle">
        {`if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }`}
      </Script>
      <body className={inter.className}>
        <Providers>
          <NavbarComponent />
          <ProtectedRoute>
            <PageTransitionLoader />
            {/* <CustomAlert /> */}
            {children}
          </ProtectedRoute>
          <DefaultFooter />
        </Providers>
      </body>
    </html>
  )
}
