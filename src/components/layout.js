import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { ThemeProvider } from "mineral-ui/themes"
import Flex, { FlexItem } from "mineral-ui/Flex"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import Container from "./container"

export default ({ title, children }) => (
  <ThemeProvider>
    <React.Fragment>
      <SEO title={title} />
      <Global
        styles={css`
          html,
          body,
          #gatsby-focus-wrapper {
            height: 100%;
          }
          body,
          pre {
            margin: 0;
          }
        `}
      />
      <Flex
        direction="column"
        css={css`
          height: 100%;
        `}
      >
        <FlexItem>
          <Header />
        </FlexItem>
        <Container as={FlexItem} grow={1}>
          {children}
        </Container>
        <FlexItem>
          <Footer />
        </FlexItem>
      </Flex>
    </React.Fragment>
  </ThemeProvider>
)
