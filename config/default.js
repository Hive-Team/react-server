var path = require('path');

module.exports = {
  port:process.env.PORT || 3000,
  staticCacheConf:path.join(__dirname,'../app/views/public'),
  renderConf:path.join(__dirname,'../app/views/config'),
  routerConf:'./app/routes'
}
