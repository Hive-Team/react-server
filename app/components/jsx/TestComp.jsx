var React = require('react');

module.exports = React.createClass({
  render:function(){
    var self = this;

    return(
      <div>
        <div>JSX Hello World!</div>
        <div className='haha'>{self.props.lala}</div>
      </div>
    )
  }
});
