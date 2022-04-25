import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div id="about" className="w-full h-full mb-16">
      <div className="mx-auto lg:flex my-8">
        <div className="w-full lg:w-1/2 left z-20 my-auto">
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
          />
        </div>
        <div className="w-full lg:w-1/2 right z-20 my-auto">
          <div className="w-4/5 mx-auto text_wrapper">
            <h2 className="text-4xl text-black my-2 mb-6">Naabruskond</h2>
            <p>
              Wittenhofi elamu- ja ärikvartal asub strateegiliselt heas asukohas
              – siit pääseb mugavalt liikuma linna eri suundadesse nii jalgsi,
              ratta, tõuksi, auto kui ka ühistranspordiga. Kõrgematelt
              korrustelt avanevad vaated nii merele kui ka Tallinna vanalinnale.
              Üle tee asuv terviseradadega Merimetsa park sobib hästi nii
              sportimiseks kui ka perega kvaliteetaja veetmiseks. Kõigest
              kilomeetrise jalutuskäigu kaugusele jääb Stroomi rand ja Rocca al
              Mare mereäärsed kergliiklusteed. Oma igapäevaostud saad mugavalt
              sooritada Merimetsa Selveris või jalutuskäigu kaugusele jäävast
              Kristiine ostukeskusest.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-16">
        <div
          id="architecture"
          className="w-4/5 mx-auto text_wrapper text-center "
        >
          <h2 className="text-4xl text-black mb-6">Arhitektuur</h2>
          <p>
            Ärihoone ilus ning kergena mõjuv hoone sünteesib oskuslikult nii
            huve kui vajadusi, mida ühele kaasaegsele ja paindliku
            kasutusvõimalusega ärihoonele esitada. Lisaks meeldejääva,
            tööstusliku ja samas ajatu arhitektuurse vormi otsingule on
            projekteerimise käigus hoolikalt modelleeritud ja optimeeritud hoone
            kuju, orientatsioon ja fassaadide lahendust selliselt, et tagada
            tuultele ja päikese suhtes parim toimimine, kasutusmugavus ning
            energiatõhusus. Hoonesse on kavandatud nutikas võimalikult
            optimaalne trepikodade süsteem (Scissor Stairs), mis vastab
            kõrghoonete tuleohutuse ja evakuatsiooni nõuetele, tagades koos
            ülerõhutamburitega kaks eraldi suitsuvaba evakuatsiooni trepikoda,
            mis avanevad igal korrusel hajutatult eraldi
            tuletõkkesektsioonidesse. Samas on välditud pikki ja sirgeid
            koridore ning ühiste ruumide ja hajumisalade aladimensioneerimist,
            mis vähendaks pindade kasutusmugavust, soliidsust ja väärikust.
            Endla tänava äärse hoone madalama, kahe korruselise mahu vahelisele
            katusele on mõeldud luua ühisala ning katuseterrass, mis on
            kavandatud haljastada vähenõudlike ja hooldusvabade taimedega.
            Ärihoone nn “voldikfassaad” on projekteeritud selliselt, et hoonest
            möödudes tekivad omanäolised, pidevalt muutuvad peegeldused ning
            valguse ja varjude variatsioonid. Erinevate nurkade alt vaadates
            mõjub fassaad erinevalt nii päeva valges kui pimedas. Tummad seinad
            ja klaasfasaadi ribad vahelduvad selliselt, et tagada kontorihoone
            ida, lõuna ja lääne fasaadide kaitse suvise ülekuumenemise eest,
            tagades samas piisava kaudse päevavalguse ning ilusad vaated
            linnale. Lisaks sisekliima ja energiatõhususe tagamisele pakuvad
            ärihoone volditud seinade tummad osad väga soodsa privaatsuse
            elamispindadele. Ärihoone mahtu on ettenähtud sisehoovi avaneva
            terrassiga restoran nii majalistele kui ka teistele klientidele.
            Wittenhofi elamu- ja ärikvartali arhitektideks on{" "}
            <a href="https://www.dagopen.ee/" rel="noreferrer" target="_blank">
              arhitektuuribüroo DAGOpen
            </a>
            arhitektid Jaan Kuusemets ja Keiu Tulev.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
