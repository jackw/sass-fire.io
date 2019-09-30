import React from "react"
import { Text, StartEnd, Link, Box, Table, Flex, FlexItem } from "mineral-ui"
import theme from "prism-react-renderer/themes/vsDark"
import SassCodeHighlight from "./SassCodeHighlight"
import { Badge } from "./sidebar"

const See = ({ data }) => {
  return (
    <dl>
      <Text as="dt" css={theme => ({ marginBottom: theme.space_inline_md })}>
        See:
      </Text>
      {data.map((see, i) => (
        <dd key={`${see.context.name}-${i}`}>
          <Link href={`#${see.context.name}`}>{`@${see.context.name}`}</Link>
        </dd>
      ))}
    </dl>
  )
}

const DocBlock = ({ sassDocNode }) => {
  return (
    <Box
      css={theme => ({
        backgroundColor: "white",
        boxShadow: theme.boxShadow_2,
      })}
      marginLeft="xl"
      marginRight="xl"
    >
      <Box padding="lg">
        <StartEnd alignItems="center" marginBottom="sm">
          <Link href={`#${sassDocNode.context.name}`}>
            <Text as="h2" noMargins>
              {sassDocNode.context.name}
            </Text>
          </Link>
          <Flex alignItems="center">
            <FlexItem>
              <Badge noMargins>{sassDocNode.group}</Badge>
            </FlexItem>
            <FlexItem>
              <Link
                css={theme => ({ fontSize: theme.h6_fontSize })}
                href={`https://github.com/jackw/sass-fire/blob/master/src/${sassDocNode.file.name}`}
                rel="noopener"
                target="_blank"
              >
                View Source
              </Link>
            </FlexItem>
          </Flex>
        </StartEnd>
        <Text css={theme => ({ marginBottom: theme.space_inline_xl })}>
          {sassDocNode.description}
        </Text>
        {sassDocNode.parameter !== null && (
          <>
            <Text
              as="h4"
              css={theme => ({ marginBottom: theme.space_inline_md })}
            >
              Parameters
            </Text>
            <Table
              css={theme => ({
                marginBottom: theme.space_inline_md,
              })}
              density="spacious"
              data={sassDocNode.parameter}
              rowKey="name"
              title="Parameters"
              hideTitle
            />
          </>
        )}
        {sassDocNode.see !== null && <See data={sassDocNode.see} />}
      </Box>
      {sassDocNode.example !== null &&
        sassDocNode.example.map((example, i) => (
          <Box
            key={i}
            padding="lg"
            css={{ backgroundColor: theme.plain.backgroundColor }}
          >
            <SassCodeHighlight code={example.code} />
          </Box>
        ))}
    </Box>
  )
}

export default DocBlock
