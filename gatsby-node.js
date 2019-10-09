/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  const Template = path.resolve("./src/templates/Documentation.js")
  const result = await graphql(`
    {
      allSassfireJson {
        edges {
          node {
            id
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const docVersions = result.data.allSassfireJson.edges
  const latest = docVersions.reduce(
    (acc, obj) => (obj.node.parent.name > acc ? obj.node.parent.name : acc),
    "v0.0.0"
  )
  docVersions.forEach(version => {
    if (version.node.parent.name === latest) {
      createPage({
        path: `/documentation`,
        component: Template,
        context: {
          id: version.node.id,
        },
      })
      createRedirect({
        fromPath: `/documentation/${version.node.parent.name}`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/documentation`,
      })
    } else {
      createPage({
        path: `/documentation/${version.node.parent.name}`,
        component: Template,
        context: {
          id: version.node.id,
          currentVersion: version.node.parent.name,
        },
      })
    }
  })
}
