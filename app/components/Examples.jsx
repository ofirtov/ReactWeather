var React = require('react');
var {Link} = require('react-router');

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
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Israel'>Israel, ISR</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>

  )
};
module.exports = Examples;
