import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

const Header = () => (
  <header
    className="z-40 w-2/"
    style={{
      background: `transparent`,
      position: `absolute`,
    }}
  >
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img src={logo} alt="logo" width={175} className="logo" />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
