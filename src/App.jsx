import './App.css'
import brandlogo1 from "./assets/brands/brand_logo01.png"
import brandlogo2 from "./assets/brands/brand_logo02.png"
import brandlogo3 from "./assets/brands/brand_logo03.png"
import Btn from './components/buttons/Btn'

function App() {
  return (
    <>
      <header className='text-white bg-[url("https://themedox.com/demo/mykd/assets/img/slider/slider_bg.jpg")]'>
        <nav className='w-11/12 max-w-screen-2xl mx-auto flex gap-24 items-center justify-between py-10 uppercase font-bold text-sm'>
          <div>
            <img className='w-44' src="https://themedox.com/demo/mykd/assets/img/logo/logo.png" alt="" />
          </div>
          <ul className='flex gap-10'>
            <li>Home</li>
            <li>About us</li>
            <li>TOURNAMENT</li>
            <li>Pages</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
          <ul className='flex gap-10'>
            <li>Search</li>
            <li>Sign in</li>
            <li>Bars</li>
          </ul>
        </nav>

        <section className='w-11/12 max-w-screen-2xl mx-auto flex items-center justify-between'>
          <div>
            <h6 className='bg-gradient-to-r from-green-500/50 to-green-500/0 text-green-400 w-fit px-5 py-3 rounded-lg text-xl font-extrabold font-poppins'>LIVE GAMING</h6>
            <h1 className='hero-heading text-[7.5rem] font-bold mb-5 mt-2 leading-none font-berlin'>STEAMING</h1>
            <h5 className='text-2xl font-bold mb-10 font-poppins'>VIDEO GAMES ONLINE</h5>
              <Btn></Btn>

            <div className='mt-32 flex gap-16 items-center'>
              <img src={brandlogo1} alt="" />
              <img src={brandlogo2} alt="" />
              <img src={brandlogo3} alt="" />
            </div>
          </div>
          <div>
            <img className='w-5/6 ml-auto' src="https://themedox.com/demo/mykd/assets/img/slider/slider_img01.png" alt="" />
          </div>
        </section>
      </header>
    </>
  )
}

export default App
