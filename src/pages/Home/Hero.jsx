import Navbar from "../../component/Navbar"
import RootLayout from "../../Layouts/RootLayout"



const Hero = () => {
  return (

    <div id="hero-pic" className="bg-">
      <div id="hero-overlay" className="w-[100%] h-[100%] bg-[#00000075]">
        <div className="text-white flex flex-col items-center ">
          <h1 className="mt-[15rem] mb-[5px] text-4xl">Manage Your Ads Seamlessly</h1>
          <p className="text-xl">Track, analyze, and optimize your advertising campaigns in one place.</p>

        </div>
      </div>
    </div>

  )
}

export default Hero