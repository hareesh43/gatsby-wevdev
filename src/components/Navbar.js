import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Web Worrier</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Project Portfolio</Link>
    </nav>
  )
}
