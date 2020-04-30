import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 10px;
  max-width: 100%;
`

const GalleryImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default ({ data }) => {
  const { nodes: photos } = data.allInstaNode

  return (
    <Layout>
      <h1>Gallery</h1>
      <Gallery>
        {photos.map(photo => (
          <GalleryImage
            fluid={photo.localFile.childImageSharp.fluid}
            alt={photo.caption}
          />
        ))}
      </Gallery>
    </Layout>
  )
}

export const pageQuery = graphql`
  query instaImages {
    allInstaNode {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        caption
      }
    }
  }
`
