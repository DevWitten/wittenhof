import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjwzbwj")

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div id="contact" className="w-full">
      <div className="mx-auto lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="w-4/5 mx-auto contact_wrapper">
            <h2 className="text-6xl text-black my-2 mb-6">Kontakt</h2>
            <StaticImage
              src="../images/ESTMAK_capital_logo_must-1.png"
              alt="ESTMAK capital"
              width={250}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <h3 className="text-4xl text-black mt-4">Registreeru huvliseks</h3>

          <form onSubmit={handleSubmit} className="w-3/5 space-y-4 my-4">
            <div className="name">
              <label htmlFor="name" className="block">
                Nimi
              </label>
              <input id="name" name="name" className="border block w-full" />
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
                className="border block w-full"
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
                className="border block w-full"
              />
              <ValidationError
                prefix="phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-green py-2 px-4 my-4"
            >
              Saada
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
