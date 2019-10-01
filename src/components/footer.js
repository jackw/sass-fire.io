import React from "react"
import Container from "./container"
import BuildTime from "./BuildTime"

const Footer = () => (
  <Container css={{ textAlign: "center", marginTop: '0.25em', marginBottom: '0.25em'}}>
    <BuildTime />
  </Container>
)

export default Footer
