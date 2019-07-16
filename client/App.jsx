import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3001/api/album/0',
      success: data => {
        this.setState({ url: data[0].img });
      },
      dataType: 'json'
    });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>hi</h1>
        <img src={this.state.url} />
      </div>
    );
  }
}

export default App;
