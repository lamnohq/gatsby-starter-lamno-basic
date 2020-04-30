import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h1>{data.mdx.frontmatter.title}</h1>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
    <p>
      <i>Author {data.mdx.frontmatter.author}</i>
    </p>
  </Layout>
)
