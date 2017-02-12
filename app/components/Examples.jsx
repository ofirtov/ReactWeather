var React = require('react');

/*Option #1
var Examples = React.createClass({
  render: function() {
    return (
      <h3>Examples</h3>
    );
  }
});
*/

//Option #2 - Arrow function
var Examples = (props) => {
  return (
    <div>
      <h3>Examples!</h3>
      <p>Welcome to examples page!</p>
    </div>

  )
};
module.exports = Examples;
