import './styles/main.scss'
import type {Metadata} from 'next'
import Header from '@/app/common/Header';
import {josefinSans, yesevaOne} from '@/app/fonts';
import Footer from '@/app/common/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default async function asRootLayout({children}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <body className={`${josefinSans.variable} ${yesevaOne.variable}`}>
      <Header />
      {children}
      <Footer />
    </body>
    {/*<PrismicPreview repositoryName={repositoryName}/>*/}
    </html>
  )
}
