import React from "react"
import { Link } from "gatsby";
// import {
//   ContentfulRichTextGatsbyReference,
//   renderRichText,
//   RenderRichTextData,
// } from "gatsby-source-contentful/rich-text"


// type BlogBodyProps = {
//   content: RenderRichTextData<ContentfulRichTextGatsbyReference>
// }

 const Header = () => {
     return <nav className="header">
         <div className="container d-flex  align-items-center">
         <h2><Link to="/">Mini Blog</Link></h2>
         
             <div className="nav-items">
                 <span><Link to="/">Home</Link></span>
                 <span><Link to="/contact">Contact us</Link></span>
             </div>
         </div>
  </nav>
}
export default Header;