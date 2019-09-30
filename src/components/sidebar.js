import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Menu, Text, StartEnd, Box, TextInput } from "mineral-ui"
import { groupData } from "../utils"
import FlexItem from "mineral-ui/Flex/FlexItem"

const query = graphql`
  query {
    allSassdocJson {
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

const Sidebar = () => {
  const data = useStaticQuery(query)
  const menuData = groupData(data.allSassdocJson.nodes)

  return (
    <Menu>
      <div
        css={theme => ({
          margin: theme.space_inline_sm,
        })}
      >
        <TextInput
          placeholder="Search here..."
          onChange={e => console.log(e.target.value)}
        />
      </div>
      {menuData.map(menuGroup =>
        menuGroup.menuItems.map(menuItem => (
          <MenuItem
            padding="md"
            as="a"
            href={menuItem.href}
            key={menuItem.href}
          >
            <StartEnd>
              <FlexItem>
                <Text noMargins fontWeight="bold">
                  {menuItem.name}
                </Text>
              </FlexItem>
              <FlexItem>
                <Badge as="small" noMargins>
                  {menuGroup.groupTitle}
                </Badge>
              </FlexItem>
            </StartEnd>
          </MenuItem>
        ))
      )}
    </Menu>
  )
}

export default Sidebar
