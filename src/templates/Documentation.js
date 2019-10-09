import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"
import DocBlock from "../components/DocBlock"

const Documentation = ({ data }) => (
  <Layout
    title="Documentation"
    hasSidebar
    hasDocSelector
    renderSidebar={() => <Sidebar data={data.sassfireJson.sass_fire} />}
    currentVersion={data.sassfireJson.parent.name}
  >
    <div
      css={theme => ({
        backgroundColor: theme.backgroundColor_active,
      })}
    >
      {data.sassfireJson.sass_fire.map((sassDocNode, i) => (
        <React.Fragment key={`${sassDocNode.context.name.toLowerCase()}-${i}`}>
          <div
            css={theme => ({
              paddingBottom: i !== 0 && theme.space_inline_xl,
              paddingTop: theme.space_inline_xl,
            })}
            id={sassDocNode.context.name.toLowerCase()}
            key={`${sassDocNode.context.name.toLowerCase()}-${i}-anchor`}
          />
          <DocBlock sassDocNode={sassDocNode} />
        </React.Fragment>
      ))}
      <Footer />
    </div>
  </Layout>
)

export default Documentation

export const query = graphql`
  query($id: String!) {
    sassfireJson(id: { eq: $id }) {
      sass_fire {
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
      parent {
        ... on File {
          name
        }
      }
    }
  }
`
