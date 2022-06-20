import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Privaatsuspoliitika" />
    <div id="privacy" className="w-full h-full">
      <div className="mx-auto w-4/5 py-16 text-black">
        <h1 className="text-center text-3xl mt-16 mb-8">Privaatsuspoliitika</h1>
        <h2 className="text-2xl text-black">1. Üldosa </h2>
        <p>
          Meie veebilehel on ka linke teistele veebilehtedele; seda
          informatiivsetel eesmärkidel. Me kontrollime välislinke väga
          hoolikalt. Me ei vastuta aga nende välislinkide sisu ja turvalisuse
          eest.
        </p>
        <p>
          Me kaitseme Teie isikuandmeid nende kogumisel ja töötlemisel ning
          ajal, kui Te külastate meie veebilehte. Seejuures täidame me kõiki
          seaduste sätteid. Detailne informatsioon selle kohta on toodud
          järgnevalt.
        </p>
        <p className="mt-4">1.1. Teie andmete vastutav töötleja</p>
        <h2 className="text-2xl text-black mt-8">Estmak Capital OÜ</h2>
        <ul className="text-black font-medium my-4">
          <li>10156 Harjumaa</li>
          <li>Tallinn</li>
          <li>Poordi tn 3-78</li>
          <li>
            E-post:{" "}
            <a href="mailto:info@estmakcapital.ee">info@estmakcapital.ee</a>
          </li>
        </ul>
        <p>
          Isikuandmete töötlemise eesmärgid ja õiguslikud alused päringud saatke
          palun elektronkirjaga või kirjaga eelnimetatud aadressile.
        </p>
        <p className="mt-4">1.2.Pädev järelevalveasutus</p>
        <h2 className="text-xl text-black mt-8 font-medium">
          Andmekaitse Inspektsioon
        </h2>
        <ul className="text-black font-medium my-4">
          <li>Väike-Ameerika 19,</li>
          <li>Tallinn 10129</li>
          <li>Poordi tn 3-78</li>
          <li>
            Telephone +372 627 4135 e-mail: info@aki.ee Web:
            <a href="https://www.aki.ee">aki.ee</a>
          </li>
        </ul>
        <h2 className="text-2xl text-black">2. Töödeldud andmed</h2>
        <p className="mt-4 underline">
          2.1.Missuguseid isikuandmeid töödeldakse ja kust need pärinevad?
        </p>
        <p>
          Me töötleme muuhulgas järgmisi isikuandmeid, mis me saame Teilt
          ärisuhte raames: Isikundmete hulka kuuluvad andmed Teie isiku kohta
          (nimi, aadress, kontaktandmed, sünniaeg ja –koht, kodakondsus, tööd
          puudutavad andmed jne), identifitseerimisandmed (nt isikutunnistuse
          andmed) ja autentimisandmed (nt allkirjanäidis). Me teavitame Teid
          vastavalt meie teavitamiskohustusele (isikuandmete kaitse üldmääruse
          (GDPR) artiklitele 13 ja 14). Meil ei ole igal üksikjuhul ka kõiki
          eelnimetatud andmeid.
        </p>
        <h2 className="text-2xl text-black my-4">
          3. Isikuandmete töötlemise eesmärgid ja õiguslikud alused
        </h2>
        <p className="underline">
          3.1 Lepingu täitmine vastavalt GDPR´i artikkel 6 lg 1 p b)
        </p>
        <p>
          Teie isikuandmeid töödeldakse Teiega sõlmitud või sõlmitava ärisuhte
          raames. Nendeks on elektrooniliselt koostatud, salvestatud ja
          arhiveeritud dokumendid (nagu nt kirjavahetus) kliendilepingu
          pakkumiseks ja sõlmimiseks või teisteks ettevalmistavateks töödeks või
          osalemiseks meie lepinguliste õiguste ja kohustuste haldamisel ja
          täitmisel, eriti broneeringute tegemise korral.
        </p>
        <p className="underline mt-4">
          3.2 Andmete töötlemine, milleks Te annate meile oma nõusoleku
          vastavalt GDPR´i artikkel 6 lg 1 p a){" "}
        </p>
        <p className="mt-4">
          Me juhime tähelepanu sellele, et teatatud andmeid tohib töödelda ka
          Teie nõusoleku alusel, nt kontaktandmeid uudiskirja ja teiste teenuste
          pakkumiste saatmiseks.
        </p>
        <p className="mt-4">
          Kui teie andmete töötlemiseks on vajalik Teie nõusolek, töötleme me
          Teie andmeid alles pärast Teilt sõnaselge nõusoleku saamist.
        </p>
        <p className="mt-4">
          Oma antud nõusoleku võite Te igal ajal tühistada. Nõusoleku
          tühistamine ei muuda nimetatud nõusoleku alusel kuni selle
          tühistamiseni lubatud töötlemise õiguspärasust.
        </p>
        <p className="underline mt-4">
          3.3 Kas tehakse automatiseeritud töötlusel põhinevaid üksikotsuseid,
          kaasa arvatud profiilianalüüsi vastavalt GDPR´i artikkel 22 lg 1 ja 4?
        </p>
        <p className="mt-4">Ei, seda ei toimu.</p>
        <h2 className="text-2xl text-black my-4">
          4. Isikuandmete edastamine ja hoidmine
        </h2>
        <p className="mt-4 underline">
          4.1 Kellele edastatakse Teie isikuandmeid?
        </p>
        <p className="mt-4">
          Teie andmete kaitse on meie jaoks tähtis. Seetõttu edastatakse andmeid
          põhimõtteliselt ainult siis, kui selleks on lepingust või seadustest
          tulenev vajadus või see on vajalik meie kaalukates õigustatud huvides
          (näiteks edastamine kontserni piires) või see toimub Teie nõusoleku
          alusel.
        </p>
        <p className="mt-4">
          Kolmandaid isikuid kohustatakse lepinguga Teie andmeid
          konfidentsiaalselt käsitlema ja töötlema neid üksnes teenuse osutamise
          raames, kolmandatele isikutele võib andmeid edastada ka siis, kui Te
          olete edastamisega nõusutnud.
        </p>
        <p className="underline mt-4">
          4.2 Kui kaua hoitakse Teie isikuandmeid?
        </p>
        <p>
          Teie isikuandmeid hoitakse iga kord nii kaua, kui see on vajalik
          konkreetsete eesmärkide täitmiseks. Lisaks sellele näeb seadus ette,
          kui kaua me peame andmeid säilitama. Need säilitamiskohustused võivad
          kehtida ka veel siis, kui Te enam ei ole meie klient. Ülevaate Eestis
          kehtivatest säilitamiskohustustest leiate Te nt siin
          <a
            href="https://www.riigiteataja.ee/akt/130122010011?leiaKehtiv"
            className="underline"
          >
            https://www.riigiteataja.ee/akt/130122010011?leiaKehtiv
          </a>
        </p>
        <p className="underline mt-4">
          4.3 Milliseid turvameetmeid rakendatakse andmete töötlemisel?
        </p>
        <p className="mt-4">
          Andmekaitse ja andmeturve on meie jaoks olulised. Me rakendame andmete
          töötluse turvamiseks tehnilisi ja organisatoorseid meetmeid. See
          puudutab eelkõige Teie isikuandmete kaitsmist tahtmatu või
          ebaseadusliku hävitamise, kaotamise, muutmise või ilma volitusteta
          avaldamise eest, näiteks edastatud, salvestatud või muul viisil
          töödeldud isikuandmetele ilma volitamata juurdepääsu kaudu.
        </p>
        <p className="mt-4">
          Kaitsemeetmed hõlmavad näiteks kaasaegse turvatarkvara ja
          krüpteerimisprotsesside kasutamist, füüsilisi juurdepääsukontrolle,
          autoriseerimiskontseptsioone, pseudonümiseerimist ja teisi abinõusid
          väliste ja sisemiste rünnakute ennetamiseks ja tõkestamiseks.
        </p>
        <h2 className="text-2xl text-black my-4">5. Online-meedia</h2>
        <p className="mt-4 underline">5.1 Küpsised</p>
        <p className="mt-4">
          Meie veebilehel kasutatakse mitmes kohas küpsiseid. Tänase tehnika
          taseme juures ei saa küpsised programme käivitada ega Teie arvutit
          viirustega nakatada. Küpsised on reeglina väikesed tekstifailid, mis
          tunnevad kasutajad ära, kui viimased kasutavad veebilehte uuesti.
          Seejuures ei salvestata aga isiklikke andmeid nagu nime või aadressi.
          Seega ei ole võimalik Teid vastava informatsiooni alusel
          identifitseerida.
        </p>
        <p className="mt-4 underline">5.2 Sotsiaalvõrgustikud</p>
        <p className="mt-4">
          Me teeme koostööd erinevate sotsiaalvõrgustikega. Kui Te kasutate neid
          sotsiaalvõrgustikke, ühendatakse Teie brauser automaatselt vastava
          võrgustikuga. See edastab samaaegselt Teie IPaadressi ja ka teised
          andmed nagu nt küpsised, kui Te olete seda platvormi juba varem
          külastanud. Võimalusel väldime me sellist andmete edastamist nii kaua,
          kuni Te ei ole mõnega nendest platvormidest reaalselt suhelnud.
          Vastavale sümbolile (nt Facebook´i logole) klõpsamisel annate Te
          teada, et olete valmis valitud platvormiga suhtlema, ja et Teie andmed
          – näiteks Teie IP-aadress – edastatakse sellele sotsiaalvõrgustikule.
          Meie veebilehel on võimalik suhelda plugin´ide vahendusel erinevate
          sotsiaalvõrgustikega. Nendeks on näiteks Facebook Ireland Ltd. ja
          Linked In Inc. USA. Me ei saa mõjutada andmete mahtu ja sisu, mis
          edastatakse nendele plugin´idele klõpsamisel nende sotsiaalvõrgustiku
          konkreetsetele operaatoritele. Kui Te soovite saada teavet nende
          sotsiaalvõrgustike operaatorite kogutavate andmete liigi, mahu ja
          eesmärkide kohta, soovitame me Teil lugeda konkreetse
          sotsiaalvõrgustiku andmekaitse sätteid.
        </p>
        <h2 className="text-2xl text-black my-4">6. Teie õigused</h2>
        <p className="mt-4">
          Teil on igal ajal õigus saada teavet Teie salvestatud isikuandmete
          kohta, õigus nende parandamisele, kustutamisele ja töötlemise
          piiramisele, õigus esitada isikuandmete töötlemisele vastuväide ning
          õigus andmete ülekantavusele vastavalt andmekaitseseaduse
          tingimustele. Nendel juhtudel pöörduge palun punktis 1.1 toodud oma
          andmete vastutava töötleja poole. Et Teie andmed ei satuks valedesse
          kätesse või et keegi ei saaks Teie andmeid vastu Teie tahtmist
          kustutada, peame me iga päringu korral Teid identifitseerima. Te võite
          vastuväite esitada pädevale järelevalveasutusele:
        </p>
        <ul className="font-medium">
          <li>Väike-Ameerika 19,</li>
          <li>Tallinn 10129</li>
          <li>Telephone +372 627 4135 e-mail: info@aki.ee</li>
          <li>
            Web:{" "}
            <a href="https://www.aki.ee" className="underline">
              https://www.aki.ee
            </a>
          </li>
        </ul>
        <p className="mt-8">Konkreetselt on Teil järgmised õigused:</p>
        <p className="mt-4 underline">6.1 Õigus tutvuda andmetega</p>
        <p className="mt-4">
          GDPR´i artikli 15 kohaselt peab iga vastutav töötleja andma
          andmesubjektile infot tema poolt töödeldavate isikuandmete kohta.
        </p>
        <p className="underline mt-4">6.2 Parandamine ja kustutamine</p>
        <p className="mt-4">
          Vastavalt GDPR´i artiklitele 16 ja 17 on Teil kui andmesubjektil õigus
          nõuda Teie isikuandmete parandamist ja kustutamist.{" "}
        </p>
        <p className="mt-4 underline">6.3 Töötlemise piiramine</p>
        <p className="mt-4">
          Vastavalt GDPR´i artiklile 18 on Teil õigus piirata Teie isikuandmete
          töötlemist.
        </p>
        <p className="mt-4 underline">6.4 Andemete ülekantavus</p>
        <p>
          Vastavalt GDPR´i artiklile 20 on Teil õigus andmete ülekantavusele.
          See on õigus saada määruses sätestatud tingimustel Teie poolt esitatud
          andmeid struktureeritud, üldkasutatavas vormingus ning masinloetaval
          kujul ja nõuda nende edastamist kolmandale isikule.{" "}
        </p>
        <p className="mt-4 underline">6.5 Õigus esitada vastuväiteid</p>
        <p className="mt-4">
          Vastavalt GDPR´i artikkel 21 lg 1 on igal andmekaitsesubjektil õigus
          esitada tema konkreetsest olukorrast lähtudes igal ajal vastuväide
          teda puudutavate isikuandmete töötlemise suhtes, mis on muuhulgas
          vajalik vastutava töötleja või kolmanda isiku õigustatud huvi korral.
          See kehtib sealhulgas sellele sättele tugineva profiilianalüüsi
          suhtes. Te võite igal ajal esitada tulevikku suunatud vastuväite
          otseturunduse eesmärgil toimuva andmete töötlemise vastu (nt spotlight
          või uudiskiri).{" "}
        </p>

        <h2 className="text-2xl text-black my-4">
          7. Automatiseeritud töötlusel põhinevate üksikotsuste tegemine
        </h2>
        <p className="mt-4">
          Me ei kasuta GDPR´i artiklile 22 vastavat automatiseeritud töötlust
          ärisuhte loomise ja teostamise otsuse tegemiseks.{" "}
        </p>
        <h2 className="text-2xl text-black my-4">
          8. Käesoleva eeskirja kohandamine
        </h2>
        <p className="mt-4">
          Käesolev eeskiri asendab kõiki varasemaid versioone. Me jätame endale
          õiguse kohandada antud eeskirja vajadusel vastavalt muutunud oludele.
          Käesoleva isikuandmete kaitse eeskirja kehtiv versioon on toodud meie
          kodulehel{" "}
          <a href="https://www.estmakcapital.ee" className="underline">
            www.estmakcapital.ee
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
