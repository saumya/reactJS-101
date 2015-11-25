// version 0.1.0
var Component2 = React.createClass({
  render:function(){
    var ReactComponent = React.DOM.span(null,"React Span says "+this.props.greet);
    return ReactComponent;
  }
});
//var Component2Factory = React.createFactory(Component2,{greet:"Hello World"});

var Component3 = React.createClass({
  propTypes:{
    greet: React.PropTypes.string.isRequired
  },
  render:function(){
    var ReactComponent = React.DOM.span(null,"React Span says "+this.props.greet);
    return ReactComponent;
  }
});
