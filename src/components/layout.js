import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { createTheme, ThemeProvider } from "mineral-ui/themes"
import SEO from "./seo"
import Header from "./header"
import Sidebar from "./sidebar"

const myTheme = createTheme({
  overrides: {
    PrimaryNav_paddingHorizontal: "0.25em",
  },
})

const Gridded = styled.div`
  display: grid;
  grid-template-areas: ${props =>
    props.hasSidebar ? `"header" "sidebar" "content"` : `"header" "content"`};
  height: 100%;
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.hasSidebar && "25% 1fr"};
    grid-template-areas: ${props =>
      props.hasSidebar
        ? `"header header" "sidebar content"`
        : `"header" "content"`};
  }
`

export default ({ title, children, hasSidebar, renderSidebar }) => (
  <ThemeProvider theme={myTheme}>
    <>
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
      <Gridded hasSidebar={hasSidebar}>
        <div css={{ gridArea: "header" }}>
          <Header />
        </div>
        {hasSidebar && (
          <div
            css={{
              gridArea: "sidebar",
              maxWidth: "100vw",
              "@media(min-width: 768px)": {
                maxHeight: "calc(100vh - 56px)",
              },
            }}
          >
            {renderSidebar()}
          </div>
        )}
        <div
          css={{
            gridArea: "content",
            maxWidth: "100vw",
            "@media(min-width: 768px)": {
              maxWidth: `${props => props.hasSidebar && "calc(100vw - 20%)"}`,
              overflowX: "hidden",
              maxHeight: "calc(100vh - 56px)",
              overflowY: "auto",
            },
          }}
        >
          {children}
        </div>
      </Gridded>
    </>
  </ThemeProvider>
)
