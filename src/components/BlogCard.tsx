import React from "react"

type BlogCardProps = {
  blog: {
    title: string
    subtitle: string
    slug: string
    image: {
      fluid: {
        src: string
      }
    }
  }
}

export const BlogCard = ({
  blog: { image, title, slug, subtitle },
}: BlogCardProps) => {
  return (
    <a href={`/blogs/${slug}`}>
      <article className="blog-card">
        <div>
          <img
            src={image.fluid.src}
            alt="blog view"
            height="200px"
            width="100%"
          />
        </div>
        <div className="blog-text">
          <h2>{title} &rarr;</h2>

          <p>{subtitle}</p>
        </div>
      </article>
    </a>
  )
}
