var PersonDetails = React.createClass({
  getInitialState: function () {
    return {expanded: true};
  },

  handleClick: function (e) {
    this.setState({expanded: !this.state.expanded});
    FlashActions.resetErrors();
  },

  render: function() {
    var text = "▶ Details";
    var content = "";
    var className = "";
    if (this.state.expanded) {
        content = <EditPersonForm person={this.props.person}/>;
        text = "▼ Details";
        className = "active-subcategory"
    }

    return (
      <div className="">
        <h5 className={className} onClick={this.handleClick}> {text} </h5>
        {content}
      </div>
    );
  }
});
