import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>Title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage
            image={}
            alt={" "}
          /> */}
        </div>
        {/* <div className = {styles.html} dangerouslySetInnerHTML = {}/> */}
      </div>
    </Layout>
  )
}
