import React from "react"
import Flex, { FlexItem } from "mineral-ui/Flex"
import { css } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import Text from "mineral-ui/Text"
import Link from "mineral-ui/Link"
import Layout from "../components/layout"
import Container from "../components/container"

const NotFoundPage = () => (
  <Layout title="OH NOES... 404s">
    <Container
      as={FlexItem}
      grow={1}
      css={css`
        margin-top: 56px;
      `}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        css={theme => ({
          height: "calc(50vh - 56px)",
          marginTop: theme.space_stack_xxl,
          marginBottom: theme.space_stack_xxl,
        })}
      >
        <Text as="h1">OH NOES... NOT FOUNDS!!!!</Text>
        <Text>
          You just hit a route that doesn&#39;t exist... head back to{" "}
          <Link as={GatsbyLink} to="/">
            home
          </Link>
          .
        </Text>
      </Flex>
    </Container>
  </Layout>
)

export default NotFoundPage
