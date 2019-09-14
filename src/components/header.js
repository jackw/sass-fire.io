import React from "react"
import { PrimaryNav, NavItem } from "mineral-ui/Navigation"
import { Link } from "gatsby"

const Header = () => (
  <PrimaryNav css={(theme) => ({ position: "fixed", top: 0, left: 0, right: 0, zIndex: theme.zIndex_400 })} maxItemWidth="15em" align="start" key="start">
    <NavItem as={Link} to="/">{`🔥 Sass-fire v0.0.0`}</NavItem>
    <NavItem as={Link} to="/documentation">
      Docs
    </NavItem>
    {/* <NavItem as={Link} to="/cook-book">
      Cookbook
    </NavItem> */}
    <NavItem href="https://github.com/jackw/sass-fire">GitHub</NavItem>
  </PrimaryNav>
)

export default Header
