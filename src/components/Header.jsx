import Nav from "./Nav"
import './CompStyles/Header.css'

const Header = () => {
  return (
    <header className="w-full relative px-6 py-8 md:px-24 md:pb-24">
        <Nav/>
        <h1 className="border-2 w-full max-w-xs text-white inset-1/2 relative -translate-x-1/2 -translate-y-1/2 text-5xl font-light p-4
            sm:text-6xl sm:max-w-sm
            md:inset-0 md:-translate-x-0 md:translate-y-2/4 md:max-w-lg">IMMERSIVE EXPERIENCES THAT <br className="md:hidden"/> DELIVER</h1>
    </header>
  )
}

export default Header