import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding-left: ${props => props.theme.space_inline_md};
  padding-right: ${props => props.theme.space_inline_md};
`

export default Container
