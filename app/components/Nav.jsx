var React = require('react');
var {Link, IndexLink} = require('react-router');//IndexLink is in order not to keep the Weather bold

//Option #1
/*
var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Navigation Bar</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>


      </div>
    );
    // Can be written also:
    //    <a href="#/about">Go to About</a>

  }
});

*/

//Option #2 - Arrow function
var Nav = () => {
  return (
    <div>
      <h2>Navigation Bar</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
};
module.exports = Nav;
