// version 0.1.0
React.render(
  React.DOM.h1({ id:"hID", className:"greetClass" },"Hello World. This is REACT !"),
  document.getElementById("myReactApp")
);
// Component
// var Component1 = React.createClass({});
var Component1 = React.createClass({
  render: function(){
    var reactComponent = React.DOM.span(null,"I am a Custom Span.");
    return reactComponent;
  }
});
// Component Factory
var Component1Factory = React.createFactory(Component1);
/*
// Using the component
React.render( React.createElement(Component1), document.getElementById("myReactApp") );
*/
// Using the ComponentFactory
React.render( Component1Factory(), document.getElementById("myReactApp") );
