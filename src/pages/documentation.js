import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import DocBlock from "../components/DocBlock"

export const query = graphql`
  query {
    allSassdocJson(sort: { fields: context___name, order: ASC }) {
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
  <Layout title="Documentation" hasSidebar>
    <div css={theme => ({
      backgroundColor: theme.backgroundColor_active
    })}>
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
      <Footer />
    </div>
  </Layout>
)

export default Documentation
