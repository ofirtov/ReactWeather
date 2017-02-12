//Because the <script> tags were off the index.html
var React = require('react');
var ReactDOM = require('react-dom');

//Create a Router!!!
var {Route, Router, IndexRoute, hashHistory} = require('react-router');//ES6 syntax
/*Would be the same as:
var Route = require('react-router').Route; (and so on for the other vars)
*/
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
//path="/" means that in the root directory of the browser (/) we will get the Main component
