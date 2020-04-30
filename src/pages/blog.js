import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const { nodes: posts } = data.allMdx

  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.frontmatter.slug}>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>{" "}
            ({post.frontmatter.author})
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
        }
      }
    }
  }
`
