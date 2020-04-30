import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/header"

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 0.75rem;
  padding-top: 20px;
`

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          .content {
            display: grid;
            grid-template-rows: auto 1fr auto;
            height: 100vh;
            padding: 20px 20px;
          }

          html {
            height: 100%;
          }

          body {
            width: 100%;
            min-height: 100vh;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <div className="content">
        <Header />
        <main>{children}</main>
        <Footer>
          <div>
            Crafted with &hearts; in Sydney using{" "}
            <a href="https://www.gatsbyjs.org/">Gatsby</a>
          </div>
          <Link to="/legal">legal</Link>
        </Footer>
      </div>
    </>
  )
}
