import Image from "next/image"
import logo from 'public/space-tourism-website/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <Image
        src={logo}
        alt='logo'
      />
      <div>line</div>
      <ul>
        <li>00 Home</li>
        <li>01 Destination</li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>
    </nav>
  )
}

export default Navbar
