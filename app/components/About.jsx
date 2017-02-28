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
      <h3>About</h3>
      <p>Welcome to the About page.</p>
    </div>

  )
};
module.exports = About;
