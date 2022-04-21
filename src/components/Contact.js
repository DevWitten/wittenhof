import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import EstmakLogo from "../images/ESTMAK_capital_logo_must-1.png"
import SuccessContactForm from "./SuccessContactForm"

import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjwzbwj")

  if (state.succeeded) {
    return <SuccessContactForm />
  }
  return (
    <div id="contact" className="w-full">
      <div className="mx-auto lg:flex">
        <div className="w-full lg:w-1/2 flex">
          <div className="w-3/5 m-auto contact_wrapper">
            <div className="w-full">
              <h2 className="text-6xl text-black my-2 mb-6">
                Lisainfo ja broneerimine
              </h2>
              <ul className="space-y-4 border-l-2 border-black pl-3 mt-12 mb-8">
                <li>
                  <p className="text-4xl font-thin">+372 5559 7351</p>
                </li>
                <li>
                  <p className="text-2xl font-thin">info@wittenhof.ee</p>
                </li>
              </ul>
              <img src={EstmakLogo} alt="ESTMAK capital" width={250} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="my-auto">
            <form
              onSubmit={handleSubmit}
              className="w-3/5 space-y-4 my-4 mx-auto"
            >
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
                  Email
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
                  rows={5}
                  className="border block w-full rounded"
                />
                <ValidationError
                  prefix="textarea"
                  field="textarea"
                  errors={state.errors}
                />
              </div>
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
      </div>
    </div>
  )
}

export default Contact
