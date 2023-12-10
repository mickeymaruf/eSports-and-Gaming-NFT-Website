import './App.css'
import brandlogo1 from "./assets/brands/brand_logo01.png"
import brandlogo2 from "./assets/brands/brand_logo02.png"
import brandlogo3 from "./assets/brands/brand_logo03.png"
import { Btn } from './components/buttons/Btn'
import { FaBarsStaggered } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <>
      <header className='text-white bg-[url("https://themedox.com/demo/mykd/assets/img/slider/slider_bg.jpg")]'>
        <nav className='w-11/12 max-w-screen-2xl mx-auto flex gap-16 items-center justify-between py-8 uppercase font-bold text-sm'>
          <div className='flex-none'>
            <img className='w-44' src="https://themedox.com/demo/mykd/assets/img/logo/logo.png" alt="" />
          </div>
          <ul className='flex items-center gap-14'>
            <li className='relative text-[#4bd46d] group cursor-pointer'>
              Home
              <span className='duration-300 h-px w-12 bg-[#4bd46d] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45'></span>
            </li>
            <li className='relative text-white hover:text-[#4bd46d] group cursor-pointer'>
              About
              <span className='opacity-0 group-hover:opacity-100 duration-300 h-px w-12 bg-[#4bd46d] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:-rotate-45'></span>
            </li>
            <li className='relative text-white hover:text-[#4bd46d] group cursor-pointer'>
              TOURNAMENT
              <span className='opacity-0 group-hover:opacity-100 duration-300 h-px w-12 bg-[#4bd46d] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:-rotate-45'></span>
            </li>
            <li className='relative text-white hover:text-[#4bd46d] group cursor-pointer'>
              Pages
              <span className='opacity-0 group-hover:opacity-100 duration-300 h-px w-12 bg-[#4bd46d] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:-rotate-45'></span>
            </li>
            <li className='relative text-white hover:text-[#4bd46d] group cursor-pointer'>
              News
              <span className='opacity-0 group-hover:opacity-100 duration-300 h-px w-12 bg-[#4bd46d] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:-rotate-45'></span>
            </li>
            <li className='relative text-white hover:text-[#4bd46d] group cursor-pointer'>
              Contact
              <span className='opacity-0 group-hover:opacity-100 duration-300 h-px w-12 bg-[#4bd46d] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:-rotate-45'></span>
            </li>
          </ul>
          <ul className='flex items-center gap-14'>
            <li>
              <FiSearch size={20} />
            </li>
            <li>
              <Btn>Sign in</Btn>
            </li>
            <li>
              <FaBarsStaggered size={20} />
            </li>
          </ul>
        </nav>

        <section className='w-11/12 max-w-screen-2xl mx-auto flex items-center justify-between'>
          <div>
            <h6 className='bg-gradient-to-r from-green-500/50 to-green-500/0 text-green-400 w-fit px-5 py-3 rounded-lg text-xl font-extrabold font-poppins tracking-[0.2rem]'>LIVE GAMING</h6>
            <h1 className='hero-heading text-[7.5rem] font-bold mb-5 mt-2 leading-none font-berlin'>STEAMING</h1>
            <h5 className='text-2xl font-bold mb-10 font-poppins tracking-[0.4rem]'>VIDEO GAMES ONLINE</h5>
            <Btn>Contact us</Btn>

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
