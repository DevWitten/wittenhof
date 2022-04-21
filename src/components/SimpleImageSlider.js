import * as React from "react"
import SimpleImageSlider from "react-simple-image-slider"
import Pilt1 from "../images/Frame25.png"
import Pilt2 from "../images/Frame26.png"
import Pilt3 from "../images/Frame27.png"
import Pilt4 from "../images/Frame28.png"

const images = [{ url: Pilt1 }, { url: Pilt2 }, { url: Pilt3 }, { url: Pilt4 }]

const ImageSlider = () => {
  return (
    <>
      <SimpleImageSlider
        width="100%"
        height={900}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={6}
        bgColor="#90B3B7"
        slideDuration={1.5}
      />
    </>
  )
}

export default ImageSlider
