import React from "react"
import { PrimaryNav, NavItem } from "mineral-ui/Navigation"
import { Link } from "gatsby"

const Header = () => (
  <PrimaryNav maxItemWidth="15em" align="start" key="start">
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
