import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "./../styles/bootstrap.css"
type LayoutProps = {
  children: React.ReactNode
  page?: string
}

export const Layout = ({ children, page }: LayoutProps) => {
  return (
    < div className="layout-container">
       <Header />
      <main className="layout">{children}</main>
      <Footer page={page}></Footer>
      </div>
  )
}
