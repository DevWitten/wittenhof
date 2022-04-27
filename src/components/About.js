import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div id="about" className="w-full h-full mb-16">
      <div className="mx-auto lg:flex my-8">
        <div className="w-full lg:w-1/2 left z-20 my-auto">
          <div className="w-4/5 mx-auto text_wrapper">
            <h2 className="text-6xl text-black my-2 mb-6">Naabruskond</h2>
            <p>
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
        <div className="img_wrapper w-full lg:w-1/2 relative right z-10">
          <StaticImage
            alt="Wittenhof korterid"
            src="../images/Pilt2.png"
            quality={100}
            className="object-cover mt-12 mx-8 shadow-lg"
          />
        </div>
      </div>
      <div className="mx-auto lg:flex my-8">
        <div className="img_wrapper w-full lg:w-1/2 relative left z-10 hidden lg:block text-center">
          <StaticImage
            alt="Wittenhof korterid"
            src="../images/Pilt3.png"
            quality={100}
            className="object-contain mt-12 mx-auto shadow-lg hidden lg:block w-4/5"
          />{" "}
          <StaticImage
            alt="Wittenhof korterid"
            src="../images/Pilt4.png"
            quality={100}
            className="object-contain mt-12 mx-auto shadow-lg hidden lg:block w-4/5"
          />
        </div>
        <div className="w-full lg:w-1/2 right z-20 my-auto">
          <div className="w-4/5 mx-auto text_wrapper">
            <h2 className="text-4xl text-black my-2 mb-6">Arhitektuur</h2>
            <p>
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
            <p>
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
              >
                arhitektuuribüroo DAGOpen
              </a>
              arhitektid Jaan Kuusemets ja Keiu Tulev.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
