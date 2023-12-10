import './App.css'
import brandlogo1 from "./assets/brands/brand_logo01.png"
import brandlogo2 from "./assets/brands/brand_logo02.png"
import brandlogo3 from "./assets/brands/brand_logo03.png"
import { Btn } from './components/buttons/Btn'
import { FaArrowRightLong, FaBarsStaggered } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import nft_img01 from "./assets/nft_img01.jpg"
import nft_img02 from "./assets/nft_img02.jpg"
import nft_img03 from "./assets/nft_img03.jpg"
import nft_avatar from "./assets/nft_avatar.png"
import about_tab01 from "./assets/about_tab01.png"
import about_img01 from "./assets/about_img01.jpg"
import features_icon01 from "./assets/features_icon01.png"

function App() {
  return (
    <>
      <div className='bg-[#4bd46d]'>
        <header className='text-white bg-[url("https://themedox.com/demo/mykd/assets/img/slider/slider_bg.jpg")] bg-contain bg-top'>
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

          <section className='w-11/12 max-w-screen-2xl mx-auto flex items-center justify-between pt-10 pb-16'>
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
      </div>

      <section className='bg-[#0B0E13] text-white py-24'>
        <div className='w-9/12 mx-auto grid grid-cols-2 items-start gap-6'>
          <div className='bg-gradient-to-b from-[#252931] border p-5 rounded-lg border-gray-800 hover:border-green-300/20 duration-200 flex items-center gap-5'>
            <img className='w-40 rounded-lg' src={nft_img01} alt="" />
            <div className='flex-1 flex flex-col'>
              <h6 className='text-xl font-bold'>WOLF GAMING ART</h6>
              <div className='mt-2 flex items-center gap-3'>
                <img src={nft_avatar} alt="" />
                <p className='text-lg text-gray-400'>Alax Max</p>
                <div className='h-4 w-px bg-gray-400'></div>
                <small className='text-xs block text-gray-400'>CREATOR</small>
              </div>
              <div className='text-lg mt-4 border border-gray-800 p-3 rounded-lg flex justify-between items-center gap-2'>
                <span className='font-bold'>
                  1.002 <span className='text-yellow-500'>ETH</span>
                </span>
                <button className='bg-yellow-500 text-gray-900 px-3 py-2 rounded-lg font-semibold flex items-center gap-2'>Bid <FaArrowRightLong /></button>
              </div>
            </div>
          </div>
          <div className='bg-gradient-to-b from-[#252931] border p-5 rounded-lg border-gray-800 hover:border-green-300/20 duration-200 flex items-center gap-5'>
            <img className='w-40 rounded-lg' src={nft_img02} alt="" />
            <div className='flex-1 flex flex-col'>
              <h6 className='text-xl font-bold'>FOREST PRINCESS</h6>
              <div className='mt-2 flex items-center gap-3'>
                <img src={nft_avatar} alt="" />
                <p className='text-lg text-gray-400'>Alax Max</p>
                <div className='h-4 w-px bg-gray-400'></div>
                <small className='text-xs block text-gray-400'>CREATOR</small>
              </div>
              <div className='text-lg mt-4 border border-gray-800 p-3 rounded-lg flex justify-between items-center gap-2'>
                <span className='font-bold'>
                  1.002 <span className='text-yellow-500'>ETH</span>
                </span>
                <button className='bg-yellow-500 text-gray-900 px-3 py-2 rounded-lg font-semibold flex items-center gap-2'>Bid <FaArrowRightLong /></button>
              </div>
            </div>
          </div>
          <div className='bg-gradient-to-b from-[#252931] border p-5 rounded-lg border-gray-800 hover:border-green-300/20 duration-200 flex items-center gap-5'>
            <img className='w-40 rounded-lg' src={nft_img03} alt="" />
            <div className='flex-1 flex flex-col'>
              <h6 className='text-xl font-bold'>GIRL FIREFLY ART</h6>
              <div className='mt-2 flex items-center gap-3'>
                <img src={nft_avatar} alt="" />
                <p className='text-lg text-gray-400'>Alax Max</p>
                <div className='h-4 w-px bg-gray-400'></div>
                <small className='text-xs block text-gray-400'>CREATOR</small>
              </div>
              <div className='text-lg mt-4 border border-gray-800 p-3 rounded-lg flex justify-between items-center gap-2'>
                <span className='font-bold'>
                  1.002 <span className='text-yellow-500'>ETH</span>
                </span>
                <button className='bg-yellow-500 text-gray-900 px-3 py-2 rounded-lg font-semibold flex items-center gap-2'>Bid <FaArrowRightLong /></button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='bg-[#0B0E13] text-white py-24'>
        <div className='w-11/12 mx-auto'>
          <div className='text-center'>
            <p className='font-bold mb-3'>KNOW ABOUT US</p>
            <h3 className='text-5xl font-bold'>TOP RATED STEAMERS</h3>
            <div className='h-1.5 w-20 bg-green-500 rounded-b-xl mx-auto mt-8'></div>
            <div className='flex justify-center gap-6 mt-16'>
              <button className='bg-green-500 text-gray-900 px-10 py-3 font-semibold flex items-center gap-2'>Bid <FaArrowRightLong /></button>
              <button className='bg-yellow-500 text-gray-900 px-10 py-3 font-semibold flex items-center gap-2'>Bid <FaArrowRightLong /></button>
            </div>
          </div>

          <div className='mt-10 h-px w-5/6 mx-auto bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0'></div>
          <div className='my-5 flex gap-4 justify-center'>
            <div className='border rounded-full p-0.5 border-x-green-500 border-y-green-500/30'><img className='border border-x-green-500 border-y-green-500/30 rounded-full' src={about_tab01} alt="" /></div>
            <div className='border rounded-full p-0.5 border-x-green-500 border-y-green-500/30'><img className='border border-x-green-500 border-y-green-500/30 rounded-full' src={about_tab01} alt="" /></div>
            <div className='border rounded-full p-0.5 border-x-green-500 border-y-green-500/30'><img className='border border-x-green-500 border-y-green-500/30 rounded-full' src={about_tab01} alt="" /></div>
            <div className='border rounded-full p-0.5 border-x-green-500 border-y-green-500/30'><img className='border border-x-green-500 border-y-green-500/30 rounded-full' src={about_tab01} alt="" /></div>
            <div className='border rounded-full p-0.5 border-x-green-500 border-y-green-500/30'><img className='border border-x-green-500 border-y-green-500/30 rounded-full' src={about_tab01} alt="" /></div>
            <div className='border rounded-full p-0.5 border-x-green-500 border-y-green-500/30'><img className='border border-x-green-500 border-y-green-500/30 rounded-full' src={about_tab01} alt="" /></div>
          </div>
          <div className='mb-10 h-px w-5/6 mx-auto bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0'></div>

          <div className='flex gap-8 border-b border-green-500/40'>
            <img src={about_img01} alt="" />
            <div className='grid grid-cols-5 gap-8'>
              <div className='col-span-3'>
                <h5 className='text-3xl font-bold'>HUMAN GAME</h5>
                <h6 className='text-xl font-semibold text-yellow-400'>RATE 50%</h6>
                <p className='text-lg text-gray-400 mt-6'>
                  Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.
                </p>
              </div>
              <div className='col-span-2 space-y-3'>
                <div className='flex items-center gap-2 bg-gradient-to-r from-[#252931] px-3 py-1.5 rounded-lg text-gray-400'>
                  <img src={features_icon01} alt="" />
                  <p className='font-semibold'>Chichi Dragon Ball</p>
                </div>
                <div className='flex items-center gap-2 bg-gradient-to-r from-[#252931] px-3 py-1.5 rounded-lg text-gray-400'>
                  <img src={features_icon01} alt="" />
                  <p className='font-semibold'>Chichi Dragon Ball</p>
                </div>
                <div className='flex items-center gap-2 bg-gradient-to-r from-[#252931] px-3 py-1.5 rounded-lg text-gray-400'>
                  <img src={features_icon01} alt="" />
                  <p className='font-semibold'>Chichi Dragon Ball</p>
                </div>
              </div>
              <div className='col-span-full flex justify-between gap-2'>
                <button className='w-full py-3 bg-gradient-to-t from-[#252931] to-[#252931]/10 font-bold text-gray-400'>DRAGON BALL</button>
                <button className='w-full py-3 bg-gradient-to-t from-[#252931] to-[#252931]/10 font-bold text-gray-400'>NFT MARKET</button>
                <button className='w-full py-3 bg-gradient-to-t from-[#252931] to-[#252931]/10 font-bold text-gray-400'>SUPPORT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
