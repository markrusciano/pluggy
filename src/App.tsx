import * as React from 'react';
import { BatteryStatusView } from './components/BatteryStatusView';
import { BatteryDataProvider } from './BatteryDataProvider';
import './App.css';

interface AppProps { };

interface AppState {
  isBatteryData: Boolean;
}

class App extends React.Component<AppProps, AppState> {
  public state: AppState;

  private dataProvider: BatteryDataProvider;

  constructor(props: AppProps, state: AppState) {
    super(props, state);

    this.state = {
      isBatteryData: false
    };

    this.dataProvider = new BatteryDataProvider();

    this.dataProvider.initialize().then(() => {
      this.setState({ isBatteryData: true });
    });

    this.dataProvider.onChange.attach(() => { this.forceUpdate(); });
  }

  render() {
    if (this.state.isBatteryData) {
      return (
        <div className="App">
          <BatteryStatusView batteryState={this.dataProvider.getState()} />
        </div>
      );
    } else {
      return <h1>Fetching battery data...</h1>;
    }
  }
}

export default App;
