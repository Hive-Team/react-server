var path = require('path');

module.exports = {
  root:path.join(__dirname,'theme'),
  layout:false,
  viewExt:'ejs',
  cache:false,
  debug:false,
  locals:require('./helpers/locals'),
}
