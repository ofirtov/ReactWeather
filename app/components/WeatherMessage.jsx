var React = require('react');
/*
var WeatherMessage = React.createClass({
  render: function() {
      var {temp, location} = this.props;
    return (
      <h3>It's is {temp} in {Israel}.</h3>

    );
  }
});
*/


//var WeatherMessage = (props) => {
//  var {temp, location} = props;
//Using ES6 instead of the (props)&var we can write ({temp, location}) directly!!!
var WeatherMessage = ({temp, location}) => {
return (
  <h3 className="text-center">It is {temp} in {location}.</h3>
)
};
module.exports = WeatherMessage;
