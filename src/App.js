import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';
import SharedButton from './component/button';
import ListItem from './component/listitem';
import {fetchPosts} from './actions';


const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: "joebloggs@gmail.com",
  age: 24,
  onlineStatus: true
}]

const initialState = {
  hideBtn: false
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const {hideBtn} = this.state

    this.setState({
      hideBtn: !hideBtn
    })
  }

  exampleMethod_returnsValue(number) {
    return number + 1;
  }

  render() {
    const {posts} = this.props;
    const {hideBtn} = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click button to render posts" tempArr={tempArr}/>
          {!hideBtn &&
            <SharedButton {...configButton} />
          }
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const {title, body} = post
                const configListItem = {
                  title,
                  desc: body
                }

                return (
                <ListItem key={index} {...configListItem}/>
                )

              })}
            </div>
          }
        </section>
      </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, {fetchPosts})(App);
