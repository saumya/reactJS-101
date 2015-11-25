// version 0.1.0
var Component2 = React.createClass({
  render:function(){
    var ReactComponent = React.DOM.span(null,"React Span says "+this.props.greet);
    return ReactComponent;
  }
});
