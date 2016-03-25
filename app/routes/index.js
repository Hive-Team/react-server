var React = require('react');
var ReactDOMServer = require('react-dom/server');
var compCore = require('../components/componentCore');

exports.get = function *(){
  yield this.render('template',{
    index: [{
      render: ReactDOMServer.renderToString(
        React.createFactory(compCore.TestComp)({lala:'cao ni lala!'})
      )
    }]
  });
}
