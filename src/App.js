import React from 'react';
import LandingPage from './components/landingPage/LandingPage'
 import store from './utils/createStore'
import { Provider } from 'react-redux'

class App extends React.Component {

  render() {
    return(
      <Provider store={store}>
        <LandingPage/>
      </Provider>
    )
  }
}
export default App;
