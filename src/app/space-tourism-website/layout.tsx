import Navbar from '@/space-tourism-website/components/Navbar'

const SpaceTourismWebsiteRootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default SpaceTourismWebsiteRootLayout

export const metadata = {
  title: 'Frontend Mentor | Space tourism website',
}
