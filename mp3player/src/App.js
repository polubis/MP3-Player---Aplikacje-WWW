import React, { Component } from 'react';
import './App.css';
import InTheNameOfGod from './assets/sounds/A_dur.mp3';
import JakAniolaGlos from './assets/sounds/a_moll.mp3';
import CzteryOsiemnastki from './assets/sounds/A7_dur.mp3';
import ZycieUlicy from './assets/sounds/a7_moll.mp3';

import First from './assets/images/1.jpg';
import Second from './assets/images/2.jpg';
import Third from './assets/images/3.jpg';
import Fourth from './assets/images/4.jpg';

class App extends Component {
  state = {
    isLoadingMusicData: true,
    loadedData: [],
    currentWatchedDetail: null
  }

  componentDidMount(){
    this.setState({loadedData: this.getMusicData()});
  }

  showDetails(currentWatchedDetail){
    this.setState({currentWatchedDetail: currentWatchedDetail});
  }

  getMusicData(){
    setTimeout(() => {
      const loadedData = [
        {id: 0, name: "In the name of good", band: "Dream theater", album: "Symphony", image: First, sound: InTheNameOfGod},
        {id: 1, name: "Jak Aniola Glos", band: "Dream theater", album: "Symphony", image: Second, sound: JakAniolaGlos},
        {id: 2, name: "4 osiemnastki", band: "Dream theater", album: "Symphony", image: Third, sound: CzteryOsiemnastki},
        {id: 3, name: "Zycie ulicy", band: "Dream theater", album: "Symphony", image: Fourth, sound: ZycieUlicy},
      ];
      this.setState({isLoadingMusicData: false, loadedData});
    }, 2000);
  }
  render() {
    const { isLoadingMusicData, loadedData, currentWatchedDetail } = this.state;
    return (
      <div className="App">
        {isLoadingMusicData ? <div className="spinner">trwa wczytywanie danych...</div> : 
          <div className="player">
            <div className="details">
              {currentWatchedDetail ? 
                <React.Fragment>
                  <img src={currentWatchedDetail.image} />
                  <div className="description">
                    <p><b>{currentWatchedDetail.name}</b></p>
                    <p><b>{currentWatchedDetail.album}</b> <span>album</span></p>
                    <p><b>{currentWatchedDetail.band}</b> <span>band</span></p>
                  </div>
                  <div className="controls"> 
                    <audio autoPlay controls src={currentWatchedDetail.sound}>
                    </audio>
                  </div>
                </React.Fragment> : 
                <p>Proszę wybierz utwór do grania</p>
              }
            </div>
            <ul className="track-list">
              {loadedData.map(item => {
                return (
                  <li key={item.id}>
                    <div className="image-container">
                      <img src={item.image} alt="opis" />
                      <span>{item.name}</span>
                    </div>
                    <p>
                      <span><b>{item.band}</b> band</span>
                      <span><b>{item.album}</b> album</span>
                    </p>
                    <p>
                      <button onClick={() => this.showDetails(item)}>SHOW DETAILS</button>
                    </p>
                  </li>
                );
              })}
            </ul>
            
          </div>
        }
      </div>
    );
  }
}

export default App;
