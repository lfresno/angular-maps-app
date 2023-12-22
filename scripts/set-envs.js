const { writeFileSync, mkdirSync} = require('fs');

require('dotenv').config();

const targePath = './src/environments/environments.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: "${ process.env['MAPBOX_KEY']}",
    otra: "PROPIEDAD"
  };
`;

//si ya existe, se sobreescribe
mkdirSync('./src/environments', {recursive : true});

writeFileSync( targePath, envFileContent );
