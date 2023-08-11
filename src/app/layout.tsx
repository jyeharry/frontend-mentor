import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'

export const metadata = {
  title: {
    default: 'Frontend Mentor',
    template: '%s | Frontend Mentor',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
