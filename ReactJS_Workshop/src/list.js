var Header = React.createClass({
  render: function(){
    return (
        <div className = "header-wrapper">
          <h1>Search some of your favorite JS tools</h1>
        </div>
      );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
    this.props.items.map(function(item) {
        var text = item;
          return <li key={text}>{text}</li>
        })
       }
      </ul>
    )  
  }
});

var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "ReactJS",
         "AngularJS",
         "MeteorJS",
         "Ember.js",
         "Backbone.js",
         "Polymer",
         "TodoMVC",
         "JavaScript"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
      <Header header = {this.state.hoveredItem}></Header>
        <input className = "input-list" type="text" placeholder="Search..." onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});

ReactDOM.render(<FilteredList/>, document.getElementById('root'));