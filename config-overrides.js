//TODO - configure without ejecting webpack and without rewired npm

const { alias, configPaths } = require('react-app-rewire-alias');
const aliasMap = configPaths('./tsconfig.tooling.json');
module.exports = alias(aliasMap);
