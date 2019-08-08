import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;











/*set up boilerplate/template

create-react-app
  delete starter code
  add app.css for basic styling

  1.make axios call 
  2.userCard.js
 

  import './App.css'
  import UserCard from './componentsUserCard'
  import axios from 'axios'
 
  export default class App extends React.component {
    constructor(){
      super()
      this.state ={
        userData: []
      }
    }

    //hooks [userData, setUserData] = userState([])

    componentDidMount() {
      axios.get('https:/api.github.com/users/jonesy212')
      //must passt data
        .then(response => {
            this.setState({
              userDta: response.data
            })
        })
        .catch(erroor => {console.log('there was an error)})
    }

    render() {
      //verify data is being pulled(remove comments) console.log(this.state.UserData)
      return (
        <div className= 'App'>
        <UserCard userData={this.state.userData} />
         </div>

      )
    }
  }

  export default App;



  2.CREATE userCard.js

create component folder
create .js file

    create a c

    import React from 'react
    import './App.css'
    importUs

    export default class UserCard from React.Component {
      constructor(props){
        super(props)
      }
      render () {
        console.log(this.props.userData)
        return (
          <div>
            <img alt= 'picture' src={this.props.userData.avatar_url/>
            <p>{this.props.userData.login}</p>
            <p>{this.props.userData.name}</p>
          // verify its working with text test test
          </div>
        ),
      }
    }

    export default UserCard



    3.create a new component

    
    
    Followers.js

    import React from 'react'
    import Followers from './Followers'

    export default class Followers extends React.Component {
      constructor(){
        super()
        this.state = {
          followerData: []
        }
      }
      componentDidMount(){
        axios.get('https://api.github.com/users/jonesy212/followers')
        this.setState({
            followersData:[]
        })
      })
      .catch(error => {console.log('hey, fix your error)})
    }
    render(){
      console.log(this.state.followerData)
      return(
        <div>
          <img alt= 'picture' src={this.props.userData.avatar_url/>
          <p>{this.props.userData.login}</p>
          <p>{this.props.userData.name}</p>
        <div>
          //connect the follower tag
          {this.state.followerData.map((item,index) =>{
              return <Follower key={index} login={item.login} id={item.id}/>
          })}
            
          </div>
        </div>
      )
    }

  due to the followers being an array of objects it's
  best to create another component to map through the follower information

  
  
  Follower.js
import React from 'react'
 

export default class Follower extends React.Component{
    constructor(props) {
      super(props)
      
     componentDidMount(){
        axios.get('https://api.github.com/users/jonesy212/followers')
        this.setState({
            followersData:[]
        })
      })
      .catch(error => {console.log('hey, fix your error)})
    }
    render(){
      console.log(this.state.followerData)
      return (
        <div>
          <p>{this.props.login}</p>  
          <p>{this.props.id}</p>  
        
        </div>

    )
  }
}

*/

