import React, { useState } from "react"
import Button from "mineral-ui/Button"
import Dropdown from "mineral-ui/Dropdown"
import { PrimaryNav, NavItem } from "mineral-ui/Navigation"
import { Link, navigate, useStaticQuery, graphql } from "gatsby"

const Header = ({ currentVersion, hasDocSelector }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(sort: { fields: name, order: DESC }) {
        nodes {
          name
        }
      }
    }
  `)

  return (
    <PrimaryNav maxItemWidth="15em" align="start" key="start">
      <NavItem as={Link} to="/">{`🔥 Sass-fire ${
        currentVersion ? currentVersion : ""
      }`}</NavItem>
      <NavItem as={Link} to="/documentation">
        Docs
      </NavItem>
      <NavItem href="https://github.com/jackw/sass-fire">GitHub</NavItem>
      <div css={{ marginLeft: "auto !important" }}>
        {hasDocSelector && (
          <Dropdown
            placement="bottom-end"
            css={theme => ({ marginRight: theme.space_inline })}
            data={data.allFile.nodes.map(node => ({
              text: node.name,
              onClick: event => {
                navigate(`/documentation/${node.name}`)
              },
            }))}
          >
            <Button>Choose a version</Button>
          </Dropdown>
        )}
      </div>
    </PrimaryNav>
  )
}

export default Header
