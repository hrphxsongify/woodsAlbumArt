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
    const window = document.URL;
    const url = window[window.length - 1];
    $.ajax({
      type: 'get',
      url: `ec2-34-211-225-3.us-west-2.compute.amazonaws.com/api/album/${url}`,
      success: data => {
        this.setState({ url: data[0].img });
      },
      dataType: 'json'
    });
  }

  render() {
    return (
      <div>
        <section className="playing">
          <div className="playing__art">
            <img src={this.state.url} alt="Album Art" />
          </div>

          <div className="playing__song">
            <a className="playing__song__name">Some Type of Love</a>

            <a className="playing__song__artist">Charlie Puth</a>
          </div>

          <div className="playing__add">
            <i className="ion-checkmark"></i>
          </div>
        </section>
        <section className="current-track">
          <div className="current-track__actions">
            <a className="ion-ios-skipbackward"></a>

            <a className="ion-ios-play play"></a>

            <a className="ion-ios-skipforward"></a>
          </div>

          <div className="current-track__progress">
            <div className="current-track__progress__start">0:01</div>

            <div className="current-track__progress__bar">
              <div id="song-progress"></div>
            </div>

            <div className="current-track__progress__finish">3:07</div>
          </div>
          <div className="current-track__options">
            <a href="#" className="lyrics">
              Lyrics
            </a>

            <span className="controls">
              <a href="#" className="control">
                <i className="ion-navicon"></i>
              </a>

              <a href="#" className="control">
                <i className="ion-shuffle"></i>
              </a>

              <a href="#" className="control">
                <i className="fa fa-refresh"></i>
              </a>

              <a href="#" className="control devices">
                <i className="ion-iphone"></i>
                <span>Devices Available</span>
              </a>

              <a href="#" className="control volume">
                <i className="ion-volume-high"></i>

                <div id="song-volume"></div>
              </a>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
