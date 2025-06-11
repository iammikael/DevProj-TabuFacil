import { Cherry_Bomb_One } from "next/font/google";

const cherryBomb = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Tabufácil | Aprendendo a Tabuada',
  description: 'UFGD | Dev. Proj.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" rel="stylesheet" />
      </head>
      <body className={cherryBomb.className} >{children}</body>
    </html>
  )
}
