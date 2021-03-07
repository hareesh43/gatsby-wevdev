import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import style from "../styles/home.module.css"

export default function Home() {

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
        <img src="banner.png" alt="site banner" style={{ maxWidth: "80%" }} />
      </section>
    
    </Layout>
  )
}

