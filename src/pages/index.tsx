import React from "react"
import { graphql } from "gatsby"
// import { FluidObject } from "gatsby-image"
import { Layout } from "../components/Layout"
import { BlogCard } from "../components/BlogCard"
import "../styles/styles.scss"

type HomeProps = {
  data: {
    blogs: {
      edges: {
        node: {
          title: string
          slug: string
          subtitle: string
         image: {
          fluid: {
            src: string
          }
        }
        }
      }[]
    }
  }
}

const IndexPage = ({ data: { blogs } }: HomeProps) => {
  return (
    <Layout>
     <div className="container">
      <div className="d-flex align-items-center justify-content-between flex-wrap flex-center">
        {blogs.edges.map(({ node }) => (
          <BlogCard key={node.slug} blog={node} />
        ))}
      </div >
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
  blogs:allContentfulPost {
    edges {
      node {
        slug
        title
        subtitle
        image {
          fluid {
            src
          }
        }
      
      }
    }
  }
}
`