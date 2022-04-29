import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import arrowDown from "../images/arrow-down.png"
import msg from "../images/msg.png"

const Hero = () => {
  return (
    <div
      id="hero"
      className="aspect-ratio-2/3 lg:aspect-ratio-16/9 relative max-h-screen"
    >
      <StaticImage
        src="../images/Hero_two_dark.png"
        alt="Wittenhof arendus"
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        quality={100}
      />
      <div className="title_wrapper absolute z-20 flex text-white">
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl ml-4 pl-2 py-4">
          Elamu- ja ärikvartal <br /> kesklinna vahetus <br /> läheduses
        </h1>
      </div>
      <Link
        to="#contact"
        className="cta_link z-50 absolute hidden md:flex bottom-0 right-0 bg-green"
      >
        <div className="cta_text w-full flex">
          <div className="text-center m-auto">
            <p className="text-xl uppercase">Registreeru</p>
            <span className="text-md uppercase">huviliseks</span>
            <img
              src={arrowDown}
              alt="Registreeru huviliseks"
              width={40}
              className="m-auto"
            />
          </div>
        </div>
      </Link>

      <Link
        to="#contact"
        className="cta_container z-50 absolute flex bottom-0 right-0 bg-green md:hidden"
      >
        <div className="cta_btn_mobile bg-brown p-4">
          <img src={msg} alt="Registreeru huviliseks" width={40} />
        </div>
        <div className="font-light bg-green flex w-full">
          <p className="px-4 m-auto text-2xl">Registreeru huvliseks</p>
        </div>
      </Link>
    </div>
  )
}

export default Hero
