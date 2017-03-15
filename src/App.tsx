import * as React from 'react';
import { BatteryView } from './components/BatteryView';
import './App.css';

interface AppProps { };

interface AppState {
  isBatteryData: Boolean;
}

class App extends React.Component<AppProps, AppState> {
  public state: AppState;

  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      isBatteryData: false
    };
  }

  render() {
    return (
      <div className="App">
        <BatteryView />
      </div>
    );
  }
}

export default App;
