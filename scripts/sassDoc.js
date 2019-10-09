const path = require("path")
const fs = require("fs")
const sassdoc = require("sassdoc")
const sassFirePath = require("sass-fire")
const sassFirePackagePath = path.resolve(sassFirePath, "..", "package.json")
const sassFirePackage = require(sassFirePackagePath)

const configFile = path.resolve(__dirname, "..", ".sassdocrc.yaml")
const outputDir = path.resolve(__dirname, "..", "src", "data", "sassfire")

sassdoc
  .parse(sassFirePath, { verbose: true, config: configFile })
  .then(data => {
    // yeah, it's naughty but cannie sort these nodes via graphql.
    data.sort((a, b) => {
      const aName = a.context.name.toLowerCase()
      const bName = b.context.name.toLowerCase()
      if (aName > bName) {
        return 1
      }
      if (aName < bName) {
        return -1
      }
      return 0
    })

    fs.writeFileSync(
      path.resolve(outputDir, `v${sassFirePackage.version}.json`),
      JSON.stringify({ "sass-fire": data }),
      "utf8"
    )
  })
  .catch(err => console.error(err))
