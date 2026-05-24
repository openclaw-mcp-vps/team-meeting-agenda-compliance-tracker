import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meeting Agenda Compliance Tracker',
  description: 'Track if meetings follow agenda and time limits. Real-time monitoring and post-meeting analytics for team leads and project managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1022df5b-bca1-4b36-a48a-cd1e0b919e04"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
