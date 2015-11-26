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

// Other components are moved to other file components.js
// Using Component2
//React.render( React.createElement(Component2,{greet:"Hello"}), document.getElementById("myReactApp") );
//React.render( Component2Factory(), document.getElementById("myReactApp") );

React.render( React.createElement(Component3,{greet:"Hello 3"}), document.getElementById("myReactApp") );
// Using JSX , now uses Babel browser.js as the JSX JS is deprecated
/*
// old JSX
<script type="text/jsx">
  React.render(
    <h1 id="my-heading">
      <span><em>Hell</em>o</span> world!
    </h1>,
    document.getElementById('myReactApp')
  );
</script>
// now Babel
<script type="text/babel">
  React.render(
    <h1 id="my-heading">
      <span><em>Hell</em>o</span> world!
    </h1>,
    document.getElementById('myReactApp')
  );
</script>
*/
