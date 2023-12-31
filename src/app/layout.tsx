import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='h-16 bg-yellow-300 px-4'>
          <form action="/items" className='m-auto max-w-screen-xl'>
            <input type="text" name='search' />
            <button type='submit'>Buscar</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  )
}
