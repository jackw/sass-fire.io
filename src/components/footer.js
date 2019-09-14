import React from "react"
import Container from "./container"
import BuildTime from "./BuildTime"

const Footer = () => (
  <Container css={{ textAlign: "center" }}>
    <BuildTime />
  </Container>
)

export default Footer
