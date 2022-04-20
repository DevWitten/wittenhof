import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="mx-auto lg:flex">
        <div className="w-full lg:w-1/2 left z-20">
          <div className="w-4/5 mx-auto text_wrapper">
            <h2 className="text-6xl text-black my-2 mb-6">Arendusest</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              labore provident quo! Nihil at, temporibus ratione impedit magnam
              unde architecto quo iste, saepe dicta ea neque esse earum
              provident tenetur dolore. Consequatur dolore libero distinctio
              inventore nisi necessitatibus veniam, accusantium commodi,
              delectus beatae aliquam ipsa praesentium quidem quod sint
              excepturi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              labore provident quo! Nihil at, temporibus ratione impedit magnam
              unde architecto quo iste, saepe dicta ea neque esse earum
              provident tenetur dolore. Consequatur dolore libero distinctio
              inventore nisi necessitatibus veniam, accusantium commodi,
              delectus beatae aliquam ipsa praesentium quidem quod sint
              excepturi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              labore provident quo! Nihil at, temporibus ratione impedit magnam
              unde architecto quo iste, saepe dicta ea neque esse earum
              provident tenetur dolore. Consequatur dolore libero distinctio
              inventore nisi necessitatibus veniam, accusantium commodi,
              delectus beatae aliquam ipsa praesentium quidem quod sint
              excepturi!
            </p>
          </div>
        </div>
        <div className="img_wrapper w-full lg:w-1/2 relative right z-10">
          <StaticImage
            src="../images/Pilt2.png"
            quality={100}
            className="absolute top-0 left-0 h-full w-full object-cover "
          />
        </div>
      </div>
    </div>
  )
}

export default About
