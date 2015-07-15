var React = require('react');
var Home = require('./Home');
var Header = require('./Header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <Header />
        <div className="container inner-container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = App;