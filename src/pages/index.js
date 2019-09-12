import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { css } from "@emotion/core"
import Text from "mineral-ui/Text"
import Flex, { FlexItem } from "mineral-ui/Flex"
import Link from "mineral-ui/Link"
import Box from "mineral-ui/Box"
import Layout from "../components/layout"

const Code = ({ children }) => (
  <Box
    padding="sm"
    marginBottom="lg"
    css={theme => ({
      backgroundColor: theme.backgroundColor_theme_selected,
    })}
  >
    <Text
      noMargins
      as="pre"
      css={theme => ({
        color: theme.color_theme,
        fontFamily: theme.fontFamily_monospace,
      })}
    >
      {children}
    </Text>
  </Box>
)

export default () => (
  <Layout title="🔥">
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      css={css`
        height: calc(50vh - 56px);
      `}
    >
      <Box as="div" marginBottom="sm">
        <Flex
          alignItems="center"
          justifyContent="center"
          css={theme => ({
            backgroundColor: theme.backgroundColor_theme_selected,
            borderRadius: "100em",
            boxShadow: `0 0 0 50px ${theme.backgroundColor_theme_selectedHover}`,
            width: "12em",
            height: "12em",
          })}
        >
          <FlexItem
            as="span"
            role="img"
            aria-label="fire"
            css={{
              fontSize: "7.5em",
            }}
          >
            🔥
          </FlexItem>
        </Flex>
      </Box>
    </Flex>
    <Text as="h1">A functional library for Sass developers</Text>
    <Text as="h2">Installation</Text>
    <Text>To install with node:</Text>
    <Code>npm install @jackw/sass-fire</Code>
    <Text>To install with yarn:</Text>
    <Code>yarn add @jackw/sass-fire</Code>
    <Text as="h2">Documentation</Text>
    <Text>
      Please review the API documentation. Also available is the{" "}
      <Link as={GatsbyLink} to="/cook-book">
        Cookbook
      </Link>{" "}
      of examples built with sass-fire that you may find useful.
    </Text>
  </Layout>
)
