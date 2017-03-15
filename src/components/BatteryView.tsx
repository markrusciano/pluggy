import * as React from 'react';

import { BatteryStatus } from './BatteryStatus';
import { BatteryManager, NavigatorWithBatteryManager } from '../interfaces/BatteryManager';

interface BatteryViewState {
    batteryManager: BatteryManager | null;
}

export class BatteryView extends React.Component<undefined, BatteryViewState> {

    public state: BatteryViewState = { batteryManager: null };

    constructor(props: undefined) {
        super(props);

        (navigator as NavigatorWithBatteryManager).getBattery()
            .then(
            (manager: BatteryManager) => {
                this.setState({ batteryManager: manager });

                manager.onchargingchange = () => { this.forceUpdate(); };
                manager.onchargingtimechange = () => { this.forceUpdate(); };
                manager.ondischargingtimechange = () => { this.forceUpdate(); };
                manager.onlevelchange = () => { this.forceUpdate(); };
            },
            (reason: {}) => {
                console.warn(`Error getting BatteryManager:\n${reason}`);
            });

    }

    render() {
        if (this.state.batteryManager !== null) {
            return (
                <BatteryStatus
                    charging={this.state.batteryManager.charging}
                    chargingTime={this.state.batteryManager.chargingTime}
                    dischargingTime={this.state.batteryManager.dischargingTime}
                    level={this.state.batteryManager.level}
                />
            );
        } else {
            return <p>No battery status yet</p>;
        }
    }
}