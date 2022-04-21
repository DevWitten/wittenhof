import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import msg from "../images/msg.png"

const Hero = () => {
  return (
    <div
      id="hero"
      className="aspect-ratio-2/3 lg:aspect-ratio-16/9 relative max-h-screen"
    >
      <StaticImage
        src="../images/Hero_darken.png"
        alt="Wittenhof arendus"
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
      <div className="title_wrapper absolute z-20 flex text-white">
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl ml-4 pl-2 py-4">
          Kortermajad kesklinna <br />
          vahetus läheduses
        </h1>
      </div>
      <Link
        to="#contact"
        className="cta_container z-50 absolute flex bottom-0 right-0 bg-green"
      >
        <div className="cta_btn bg-brown p-4">
          <img src={msg} alt="Registreeru huviliseks" width={40} />
        </div>
        <div className="cta_text bg-green flex w-full">
          <p className="px-4 m-auto text-2xl">Registreeru huvliseks</p>
        </div>
      </Link>
    </div>
  )
}

export default Hero
