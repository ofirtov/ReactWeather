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
    <h3>Examples</h3>
  )
};
module.exports = Examples;
