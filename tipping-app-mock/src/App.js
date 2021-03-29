import React, { useState } from 'react';
import './App.scss';

// Layout
import { NavBar } from "../src/components/Layout/Navbar/NavBar";

function App() {
  // const [ route, setRoute ] = useState("Signin");
  // eslint-disable-next-line
  const [ signedIn, setSignedIn ] = useState(false);
  // const [ user, setUser ] = useState({
  //   id: '',
  //   name: '',
  //   email: '',
  //   entries: 0,
  //   joined: '',
  // });

  // const loadUser = (data) => {
  //   this.setState({
  //     user: {
  //       id: data.id,
  //       name: data.name,
  //       email: data.email,
  //       entries: data.entries,
  //       joined: data.joined,
  //     },
  //   });
  // };

  // const onRouteChange = (route) => {
  //   if (route === 'Signout') {
  //     this.setState({ isSignedIn: false });
  //   } else if (route === 'Dashboard') {
  //     this.setState({ isSignedIn: true });
  //   }
  //   this.setState({ route: route });
  // };

  return (
    <div className="App">
        <NavBar
          isSignedIn={signedIn}
          // name={this.state.user.name}
          // onRouteChange={this.onRouteChange}
        />
    </div>
  );
}

export default App;
