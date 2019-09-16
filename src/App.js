import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';
import SharedButton from './component/button';
import ListItem from './component/listitem';
import {fetchPosts} from './actions';
import List from './component/list';


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

    const toDoProps = {
      complete: false,
      deleteToDo: () => null,
      text: 'Initial ToDos',
      toggleCompletion: () => null
    }

    const newToDoProps = {
      submit: () => null,
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <List />
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

// import React from 'react';
// import {connect} from 'react-redux';
// import Header from './component/header';
// import Headline from './component/headline';
// import PostButton from './component/button';
// import {fetchPosts} from './actions'
// import ListItem from './component/listitem';

// const tempArr = [{
//   fName: 'John',
//   lName: 'Doe',
//   email: 'john@gmail.com',
//   age: 33,
//   onlineStatus: true
// }]



// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       showBtn: true
//     }
//   }

//   fetchPosts = () => {
//     this.props.fetchPosts();
//     this.toggleBtn()
//   }

//   toggleBtn = () => {
//     this.setState(({showBtn}) => ({
//       showBtn: !showBtn
//     }))
//   }


//   render() {

//     const {posts} = this.props;
//     const {showBtn} = this.state;
//     const buttonConfig = {
//       buttonText: 'Get Posts',
//       emitEvent: this.fetchPosts
//     }

//     return (
//       <div className='App' data-test='appComponent'>
//          <Header />
//         <section className='main'>

//           <Headline header='Posts' desc='Click button to render posts' tempArr={tempArr}/>
//           { showBtn &&
//             <PostButton {...buttonConfig}/>
//           }
//           { posts.length > 0 &&
//             posts.map( (post, index) => {
//               let {title, body} = post
//               const showPost = {
//                 title, desc: body
//               }
//               return (
//                 <ListItem key={index} {...showPost} />
//               )

//             })
//           }
//         </section>


//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }
// export default connect(mapStateToProps, {fetchPosts})(App)
