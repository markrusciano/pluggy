import * as React from 'react';
import { BatteryState } from '../BatteryState';

interface BatteryStatusViewProps {
    batteryState: BatteryState;
}

export class BatteryStatusView extends React.Component<BatteryStatusViewProps, undefined> {

    render() {
        var dateString = new Date(this.props.batteryState.time).toLocaleString();

        return (
            <div>
                <p>Charging? {this.props.batteryState.charging.toString()}</p>
                <p>Time to Full? {this.props.batteryState.chargingTime.toString()}</p>
                <p>Time to Empty? {this.props.batteryState.dischargingTime.toString()}</p>
                <p>Level? {this.props.batteryState.level.toString()}</p>
                <p>Last Update: {dateString}</p>
            </div>
        );
    }
};