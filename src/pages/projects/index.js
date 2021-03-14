import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as style from "../../styles/project.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={style.portfolio}>
        <h2>Projects Portfolio</h2>
        <h3>Projects and web applications I have developed</h3>
        <div className={style.projects}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <GatsbyImage
                image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
                alt={" "}
              />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
        <p>If you like this contact me at {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    projects: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
