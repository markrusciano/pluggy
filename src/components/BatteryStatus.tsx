import * as React from 'react';

interface BatteryStatusProps {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
}

export class BatteryStatus extends React.Component<BatteryStatusProps, undefined> {
    render() {
        return (
            <div>
                <p>Charging? {this.props.charging.toString()}</p>
                <p>Time to Full? {this.props.chargingTime.toString()}</p>
                <p>Time to Empty? {this.props.dischargingTime.toString()}</p>
                <p>Level? {this.props.level.toString()}</p>
            </div>
        );
    }
}