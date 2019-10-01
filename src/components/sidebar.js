import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Menu, Text, StartEnd, Box, TextInput } from "mineral-ui"
import { groupData } from "../utils"
import FlexItem from "mineral-ui/Flex/FlexItem"

export const Badge = styled(Text)(({ theme }) => ({
  backgroundColor: theme.backgroundColor_theme_selectedActive,
  borderRadius: theme.borderRadius_1,
  color: theme.backgroundColor_themePrimary,
  fontSize: theme.h6_fontSize,
  padding: `${theme.space_inline_xs} ${theme.space_inline_sm}`,
}))

const MenuItem = styled(Box)(({ theme }) => ({
  display: "block",
  padding: `${theme.MenuItem_paddingVertical} ${theme.MenuItem_paddingHorizontal}`,
  textDecoration: "none",
  "&:focus": {
    backgroundColor: theme.backgroundColor_focus,
    outline: 0,
  },
  "&:hover": {
    backgroundColor: theme.backgroundColor_hover,
  },
  "&:active": {
    backgroundColor: theme.backgroundColor_active,
  },
}))

const query = graphql`
  query {
    allSassdocJson(sort: {fields: context___name, order: ASC}) {
      nodes {
        group
        context {
          name
        }
        id
      }
    }
  }
`

const Sidebar = () => {
  const data = useStaticQuery(query)
  const allItems = data.allSassdocJson.nodes
  const [items, setItems] = useState(data.allSassdocJson.nodes)

  const filterResults = e => {
    const filtered = allItems.filter(item => {
      if (e.target.value.trim() == "") {
        return allItems
      }
      if (e.target.value === item.group[0]) {
        return item;
      }

      if (item.context.name.indexOf(e.target.value) !== -1) {
        return item;
      }

    })
    setItems(filtered)
  }

  return (
    <Menu>
      <div
        css={theme => ({
          margin: theme.space_inline_sm,
        })}
      >
        <TextInput placeholder="Search here..." onChange={filterResults} />
      </div>
      {items.map(menuItem => (
        <MenuItem
          padding="md"
          as="a"
          href={`#${menuItem.context.name.toLowerCase()}`}
          key={menuItem.id}
        >
          <StartEnd>
            <FlexItem>
              <Text noMargins fontWeight="bold">
                {menuItem.context.name}
              </Text>
            </FlexItem>
            <FlexItem>
              <Badge as="small" noMargins>
                {menuItem.group}
              </Badge>
            </FlexItem>
          </StartEnd>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default Sidebar
