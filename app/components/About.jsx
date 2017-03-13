var React = require('react');


//Option #1
/*
var About = React.createClass({
  render: function() {
    return (
      <h2>About Component</h2>
    );
  }
});
*/

//Option #2 - With Arrow function
var About = (props) => { //Arrow function instead of Anonimus function function(props){}
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.</p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
          <li>
            <a href="http://openWeatherMap.org">Open Weather Map</a> - I used Open Weather Map to search for data by city name
          </li>
        </ul>
      </p>
    </div>

  )
};
module.exports = About;
