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
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">//small default is 12 (all screen)
            {props.children}
          </div>
        </div>
      </div>
  ) //Need to delete "this." before the props because it is passed as an argument in the function
};
module.exports = Main;
