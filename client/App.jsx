import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  getImg(img) {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3001/',
      data: img,
      success: data => {
        this.setState({ url: data });
      },
      dataType: 'json'
    });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>hi world</h1>
      </div>
    );
  }
}

export default App;
