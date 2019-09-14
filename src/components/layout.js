import React from "react"
import { Global, css } from "@emotion/core"
import { createTheme, ThemeProvider } from "mineral-ui/themes"
import Flex, { FlexItem } from "mineral-ui/Flex"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

const myTheme = createTheme({
  overrides: {
    PrimaryNav_paddingHorizontal: '0.25em',
  },
})

export default ({ title, children }) => (
  <ThemeProvider theme={myTheme}>
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
        {children}
        <FlexItem>
          <Footer />
        </FlexItem>
      </Flex>
    </React.Fragment>
  </ThemeProvider>
)
