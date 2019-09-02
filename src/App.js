import React, {Component} from 'react';
import Header from './component/header';
import Headline from './component/headline';

import './app.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click button to render posts"/>
        </section>
      </div>
    );

  }

}

export default App;
