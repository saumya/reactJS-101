// version 0.1.0
ReactDOM.render(
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
ReactDOM.render( React.createElement(Component1), document.getElementById("myReactApp") );
*/
// Using the ComponentFactory
ReactDOM.render( Component1Factory(), document.getElementById("myReactApp") );

// Other components are moved to other file components.js
// Using Component2
//ReactDOM.render( React.createElement(Component2,{greet:"Hello"}), document.getElementById("myReactApp") );
//ReactDOM.render( Component2Factory(), document.getElementById("myReactApp") );

ReactDOM.render( React.createElement(Component3,{greet:"Hello 3"}), document.getElementById("myReactApp") );
// Using JSX , now uses Babel browser.js as the JSX JS is deprecated
/*
// old JSX, type="text/jsx"
<script type="text/jsx">
  React.render(
    <h1 id="my-heading">
      <span><em>Hell</em>o</span> world!
    </h1>,
    document.getElementById('myReactApp')
  );
</script>
// now Babel, type="text/babel"
<script type="text/babel">
  ReactDOM.render(
    <h1 id="my-heading">
      <span><em>Hell</em>o</span> world!
    </h1>,
    document.getElementById('myReactApp')
  );
</script>
*/
// Using JSX Components
