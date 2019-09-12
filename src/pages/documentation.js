import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Text, StartEnd, Link, Box } from "mineral-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"
import Layout from "../components/layout"

const docsQuery = graphql`
  query SassDocQuery {
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

const codeWrapper = (code, parameter, name, type) => {
  const parameterz =
    parameter !== null
      ? parameter.reduce((acc, val) => [...acc, `$${val.name}`], []).join(", ")
      : ""

  return `
@${type} ${name}(${parameterz}) {
  ${code}
}`.trim()
}

const SassCodeHighlight = ({ code }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="scss">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const DocBlock = ({ sassDocNode }) => {
  return (
    <Box marginBottom="xl">
      <Text>{sassDocNode.context.type}</Text>
      <StartEnd alignItems="center" marginBottom="sm">
        <Link href={`#${sassDocNode.context.name}`}>
          <Text as="h3" id={sassDocNode.context.name} noMargins>
            {sassDocNode.context.name}
          </Text>
        </Link>
        <Link
          href={`https://github.com/jackw/sass-fire/blob/master/src/${sassDocNode.file.name}`}
        >
          View Source
        </Link>
      </StartEnd>
      <Text>{sassDocNode.description}</Text>
      {sassDocNode.example !== null &&
        sassDocNode.example.map(example => (
          <Box
            padding="md"
            css={{ backgroundColor: theme.plain.backgroundColor }}
          >
            <SassCodeHighlight code={example.code} />
          </Box>
        ))}
    </Box>
  )
}

const SecondPage = () => (
  <Layout title="Documentation">
    <StaticQuery
      query={docsQuery}
      render={data => {
        return (
          <div>
            {data.allSassdocJson.nodes.map(sassDocNode => (
              <DocBlock sassDocNode={sassDocNode} key={sassDocNode.id} />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

export default SecondPage
