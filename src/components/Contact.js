import React from "react"
import EstmakLogo from "../images/Logo CMYK_5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjwzbwj")
  return (
    <div id="contact" className="w-full">
      <div className="w-full md:w-4/5 mx-auto mb-8">
        <h2 className="w-full px-4 md:px-0 md:w-4/5 mx-auto text-4xl lg:text-6xl mt-16 mb-6">
          Võta ühendust
        </h2>
        <p className="w-full px-4 md:px-0 md:w-4/5 mx-auto">
          Kui Wittenhofi elamu- ja ärikvartalis võiks asuda Sinu tulevane kodu
          või töökoht, siis jäta meile oma kontaktid ning võtame Sinuga ühendust
          veel enne avaliku müügi algust.
        </p>
      </div>
      <div className="mx-auto w-full lg:w-4/5 lg:flex relative">
        <div className="w-full lg:w-1/2 relative">
          <div className="my-auto">
            <form
              onSubmit={handleSubmit}
              className="w-4/5 lg:w-3/5 space-y-4 my-4 mx-auto"
            >
              <div className="interests">
                <label htmlFor="huvitatud">Olen huvitatud:</label>
                <select name="huvitatud">
                  <option value="Korterist">Korterist</option>
                  <option value="Äripinnast">Äripinnast</option>
                </select>
              </div>
              <div className="name">
                <label htmlFor="name" className="block">
                  Nimi
                </label>
                <input
                  id="name"
                  name="name"
                  className="border block w-full rounded"
                  required
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="email">
                <label htmlFor="email" className="block">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="border block w-full rounded"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="phone">
                <label htmlFor="phone" className="block">
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="border block w-full rounded"
                  required
                />
                <ValidationError
                  prefix="phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div className="textarea">
                <label htmlFor="textarea" className="block">
                  Lisainfo
                </label>
                <textarea
                  id="textarea"
                  type="tel"
                  name="textarea"
                  rows={4}
                  className="border block w-full rounded"
                />
                <ValidationError
                  prefix="textarea"
                  field="textarea"
                  errors={state.errors}
                />
              </div>
              {state.succeeded ? (
                <div className="bg-green rounded">
                  <p className="p-4 font-thin text-2xl">
                    Sinu päring on saadetud!
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className="w-full text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="submit-btn py-2 px-4 my-4"
                >
                  Saada
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <div className="w-4/5 lg:w-3/5 mx-auto mt-8 contact_wrapper">
            <div className="w-full">
              <ul className="space-y-4 border-l-2 border-black pl-3 mt-12 mb-8">
                <li>
                  <p className="text-2xl md:text-4xl font-thin">
                    info@wittenhof.ee
                  </p>
                </li>
                <li>
                  <p className="text-2xl font-thin">+372 5529 138</p>
                </li>
              </ul>

              <p className="pt-4 mt-16 uppercase text-green">Arendaja</p>
              <a
                href="https://estmakcapital.ee/en/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={EstmakLogo}
                  alt="ESTMAK capital"
                  width={250}
                  className="my-4"
                />
              </a>
              <div className="flex mb-4">
                <a
                  href="https://facebook.com/estmakcapital"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon mr-3"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="#90B3B7"
                    size="2xl"
                  />
                </a>
                <a
                  href="https://ee.linkedin.com/company/estmak-capital"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#90B3B7"
                    size="2xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
