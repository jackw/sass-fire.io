import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Text } from "mineral-ui"

const BuildTime = () => {
  const data = useStaticQuery(query)

  return (
    <Text>
      Last built with{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>{" "}
      and{" "}
      <span role="img" aria-label="fire">
        🔥
      </span>{" "}
      on: {data.site.buildTime}
    </Text>
  )
}

export default BuildTime

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
  }
`
