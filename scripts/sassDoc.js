const path = require('path');
const fs = require('fs');
const sassdoc = require('sassdoc');
const sassFirePath = require('sass-fire');
const sassFirePackagePath = path.resolve(sassFirePath, '..', 'package.json');
const sassFirePackage = require(sassFirePackagePath);

const configFile = path.resolve(__dirname, '..', '.sassdocrc.yaml');
const outputDir = path.resolve(__dirname, '..', 'src', 'data');

sassdoc
    .parse(sassFirePath, { verbose: true, config: configFile })
    .then(data => {
        fs.writeFileSync(path.resolve(outputDir, `sass-fire-${sassFirePackage.version}.json`), JSON.stringify(data), 'utf8');
    })
    .catch(err => console.error(err));

