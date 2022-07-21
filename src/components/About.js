import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SimpleImageSlider from "react-simple-image-slider"

import Pilt1 from "../images/Frame25.png"
import Pilt2 from "../images/Frame26.png"
import Pilt4 from "../images/Frame28.png"

import squares from "../images/squares.svg"

const images = [{ url: Pilt4 }, { url: Pilt1 }, { url: Pilt2 }]

const About = () => {
  return (
    <div id="about" className="w-full h-full z-20">
      <div className="mx-auto lg:flex pt-8 pb-4">
        <div className="w-full lg:w-1/2 left z-20 my-auto">
          <div className="w-4/5 mx-auto text_wrapper">
            <h2 className="text-4xl md:text-6xl text-black my-2 mb-6">
              Naabruskond
            </h2>
            <p className="text-justify">
              Wittenhofi elamu- ja ärikvartal asub strateegiliselt heas asukohas
              – siit pääseb mugavalt liikuma linna eri suundadesse nii jalgsi,
              ratta, tõuksi, auto kui ka ühistranspordiga. Kõrgematelt
              korrustelt avanevad vaated nii merele kui ka Tallinna vanalinnale.
              Üle tee asuv terviseradadega Merimetsa park sobib hästi nii
              sportimiseks kui ka perega kvaliteetaja veetmiseks. Kõigest
              kilomeetrise jalutuskäigu kaugusele jäävad Stroomi rand ja Rocca
              al Mare mereäärsed kergliiklusteed. Oma igapäevaostud saad
              mugavalt sooritada Merimetsa Selveris või lähedal asuvast
              Kristiine keskusest.
            </p>
          </div>
        </div>
        <div className="img_wrapper w-full lg:w-1/2 relative right z-10 m-auto">
          <StaticImage
            alt="Wittenhof korterid"
            src="../images/Pilt2.png"
            quality={100}
            className="object-cover mt-12 mx-8 shadow-lg"
          />
        </div>
      </div>
      <div className="mx-auto lg:flex py-8">
        <div
          className="squares-container absolute hidden lg:block"
          style={{
            backgroundImage: `url(${squares})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "contain,",
            width: "100vw",
            backgroundPosition: "25% center",
            height: "100vh",
            opacity: "0.25",
          }}
        ></div>
        <div className="img_wrapper w-full lg:w-1/2 relative left z-10 hidden lg:block text-center m-auto overflow-hidden">
          <SimpleImageSlider
            width={600}
            height={400}
            images={images}
            showBullets={false}
            showNavs={false}
            style={{ margin: `auto` }}
            autoPlayDelay={6}
            autoPlay={true}
            slideDuration={1}
          />
        </div>
        <div className="w-full lg:w-1/2 right z-20 my-auto relative bg-white">
          <div className="w-4/5 mx-auto text_wrapper">
            <h2 className="text-4xl md:text-6xl text-black mt-6 mb-6">
              Arhitektuur
            </h2>
            <p className="text-justify">
              Ärihoone ilus ning õhulisena mõjuv hoone sünteesib oskuslikult
              kaasaegse, paindliku töökeskkonna vajadusi. Meeldejääv, tööstuslik
              ja samas ajatu arhitektuurne vorm on sümbioosis funktsionaalsuse
              ja ökonoomsusega. Hoone kuju, orientatsioon ja fassaadide lahendus
              tagab maksimaalne kasutusmugavuse, tuultele ja päikese suhtes
              parima positsiooni ning energiatõhususe. Hoonesse on kavandatud
              nutikas trepikodade süsteem (Scissor Stairs), mis vastab
              kõrghoonete tuleohutuse ja evakuatsiooni nõuetele. Ühisalad on
              lahendatud praktilisusest ja kasutusmugavusest lähtuvalt, kuid
              mõjuvad sealjuures ka soliidselt ja väärikalt.
            </p>
            <p className="text-justify">
              Hoone kaht püstakut ühendava osa katusele on planeeritud
              ühiskasutatav katuseterrass, mis haljastatakse vähenõudlike ja
              hooldusvabade taimedega. Ärihoone nn “voldikfassaad” on
              projekteeritud selliselt, et hoonest möödudes tekivad omanäolised,
              pidevalt muutuvad peegeldused. Tummade seinte ja klaasfassaadi
              ribade vahelduv paigutus tagab kontorihoone ida, lõuna ja lääne
              fassaadide kaitse suvise ülekuumenemise eest, samas jõuab
              ruumidesse piisav kaudne päevavalgus ning avanevad ilusad
              linnavaated. Lisaks sisekliima ja energiatõhususe tagamisele
              pakuvad ärihoone volditud seinade tummad osad ideaalse privaatsuse
              elamispindade tarbeks. Ärihoone ruumidesse on kavandatud sisehoovi
              avaneva terrassiga restoran nii majalistele kui ka teistele
              klientidele. Wittenhofi elamu- ja ärikvartali arhitektideks on{" "}
              <a
                href="https://www.dagopen.ee/"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                arhitektuuribüroo DAGOpen
              </a>{" "}
              arhitektid Jaan Kuusemets ja Keiu Tulev.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
