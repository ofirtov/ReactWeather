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
var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function() {
    return (//In JSX files we must write className instead of class!!!
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})
module.exports = Nav;
