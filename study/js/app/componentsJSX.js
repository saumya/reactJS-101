// version 0.1.0
// Components with JSX
var JSXComp2 = React.createClass({
  render:function(){
    var ReactComponent =  <div>
                            <h3>JSX Component</h3>
                            <h4>JSXComp2</h4>
                          </div>;
    return ReactComponent;
  }
});
// Using JSX components
React.render(
  <JSXComp2 />,
  //React.createElement(JSXComp2),
  document.getElementById("myReactApp")
);
