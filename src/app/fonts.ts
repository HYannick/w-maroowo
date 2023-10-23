import { Josefin_Sans, Yeseva_One } from 'next/font/google'

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--josefin-sans'
})

export const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--yeseva-one'
})