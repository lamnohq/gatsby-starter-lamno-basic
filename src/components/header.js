import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  margin-right: 20px;
`

export default () => (
  <Header>
    <NavLink to="/">Lamno</NavLink>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </Header>
)
