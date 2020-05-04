import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.header`
  display: flex;
  margin: 0 auto;
`

const NavLink = styled(Link)`
  margin: 0 15px;
  &.active {
    font-weight: bold;
  }
`

export default () => (
  <Header>
    <nav>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/blog" activeClassName="active">
        Blog
      </NavLink>
      <NavLink to="/gallery" activeClassName="active">
        Gallery
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </nav>
  </Header>
)
