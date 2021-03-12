import { graphql, Link } from "gatsby"

import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className={style.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>Become web ninja</p>
          <Link to="/projects" className={style.btn}>
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt={" "}
        />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
