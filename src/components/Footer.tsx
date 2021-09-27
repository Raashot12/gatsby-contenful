import React from "react"
type Props = {
  page?: string
}
const Footer = ({page}: Props) => {
  return (
    <nav className={`footer-${page}`}>
      <div>All Right Resevered @ 2021.</div>
    </nav>
  )
}
export default Footer
