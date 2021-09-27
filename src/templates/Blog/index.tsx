import * as React from "react"
import { graphql } from "gatsby"
import {
  renderRichText,
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text"
import "../../styles/styles.scss"
import { Layout } from "../../components/Layout"

type TemplateProps = {
  data: {
    blog: {
      image: {
        fluid: {
          src: string
        }
      }
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>
      subtitle: string
    }
  }
}

const BlogTemplate = ({ data: { blog } }: TemplateProps) => {
  console.log(blog)
  const {
    content,
    subtitle,
    image: {
      fluid: { src },
    },
  } = blog

  return (
    <div>
      <Layout page="dev">
        <div className="container">
          <div style={{ marginTop: "2.5rem" }}>
            <img src={src} alt="" width="100%" />
                      <h4 className="page-content-title">{ subtitle} </h4>
            <div>
              <p className="page-text">{renderRichText(content)}</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default BlogTemplate

export const query = graphql`
  query ($slug: String!) {
    blog: contentfulPost(slug: { eq: $slug }) {
      image {
        fluid {
          src
        }
      }
      content {
        raw
      }
      subtitle
    }
  }
`
