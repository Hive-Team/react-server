var React = require('react');

module.exports = React.createClass({displayName: "exports",
  render:function(){
    var self = this;

    return(
      React.createElement("div", null, 
        React.createElement("div", null, "第二号JSX Hello World!"), 
        React.createElement("div", {className: "haha"}, self.props.lala)
      )
    )
  }
});
