import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as style from "../../styles/project.module.css"




export default function Projects({data}) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={style.portfolio}>
        <h2>Projects Portfolio</h2>
        <h3>Projects and web applications I have developed</h3>
        <div className = {style.projects}>
          {projects.map((project) =>(
            <Link to={`/projects/${project.frontmatter.slug}`} key ={project.id}>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`
