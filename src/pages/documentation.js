import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import DocBlock from "../components/DocBlock"
import Sidebar from "../components/sidebar"

const SideBarWrapper = styled.div`
  background-color: white;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow-y: auto;
  top: 56px;
  width: 20%;
`

const DocsWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor_theme_selected};
  margin-left: 20%;
  margin-top: 56px;
`

export const query = graphql`
  query {
    allSassdocJson {
      nodes {
        file {
          name
          path
        }
        group
        context {
          name
          code
          type
        }
        description
        example {
          code
          type
          description
        }
        access
        id
        parameter {
          name
          type
          description
        }
        see {
          context {
            name
            type
          }
        }
        usedBy {
          context {
            name
            type
          }
        }
      }
    }
  }
`

const Documentation = ({ data }) => (
  <Layout title="Documentation">
    <SideBarWrapper>
      <Sidebar />
    </SideBarWrapper>
    <DocsWrapper>
      {data.allSassdocJson.nodes.map((sassDocNode, i) => (
        <>
          <div
            css={theme => ({
              paddingBottom: i !== 0 && theme.space_inline_xl,
              paddingTop: theme.space_inline_xl,
            })}
            id={sassDocNode.context.name.toLowerCase()}
          />
          <DocBlock sassDocNode={sassDocNode} key={sassDocNode.id} />
        </>
      ))}
    </DocsWrapper>
  </Layout>
)

export default Documentation
