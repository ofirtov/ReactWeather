var React = require('react');
var Nav = require('Nav');

//Option #1
/*
var Main = React.createClass({
  render: function() {
    return (
        <div>
          <Nav/>
          <h2>Main Component</h2>
          {this.props.children}
        </div>
    );
  }
});
*/

//Option #2 - Arrow function
var Main = (props) => {
  return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
  ) //Need to delete "this." before the props because it is passed as an argument in the function
};
module.exports = Main;
