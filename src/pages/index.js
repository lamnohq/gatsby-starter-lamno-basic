import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const HomeImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`

export default ({ data }) => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Welcome to Lamno's site</p>
      <HomeImage
        fluid={data.file.childImageSharp.fluid}
        alt="random unsplash image"
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query randomImage {
    file(absolutePath: { regex: "/random-unsplash/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
