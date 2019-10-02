import React from "react"
import Container from "./container"
import BuildTime from "./BuildTime"

const Footer = () => (
  <Container
    css={theme => ({
      textAlign: "center",
      paddingTop: theme.space_inline_md,
      paddingBottom: theme.space_inline_md,
    })}
  >
    <BuildTime />
  </Container>
)

export default Footer
