import * as React from 'react';
import * as moment from 'moment';

import { BatteryState } from '../BatteryState';

interface BatteryStatusViewProps {
    batteryState: BatteryState;
}

export class BatteryStatusView extends React.Component<BatteryStatusViewProps, undefined> {

    static getHumanReadableDuration(duration: moment.Duration): String {
        if (!Number.isFinite(duration.milliseconds())) {
            return 'N/A';
        }

        return `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;

        // if (duration.asHours() > 0) {
        //     fmt += `${duration.asHours()}:`;
        // }

        // if (duration.asMinutes() > 0) {
        //     fmt += `${duration.asMinutes()}:`;
        // }

        // if (duration.asSeconds() > 0) {
        //     fmt += `${duration.asMinutes()}:`;
        // }
    }

    render() {
        return (
            <div>
                <p>Charging? {this.props.batteryState.charging.toString()}</p>
                <p>
                    Time to Full? {BatteryStatusView.getHumanReadableDuration(
                        this.props.batteryState.timeToCharge)}
                </p>
                <p>
                    Time to Empty? {BatteryStatusView.getHumanReadableDuration(
                        this.props.batteryState.timeToDischarge)}
                </p>
                <p>Level? {`${this.props.batteryState.level * 100}%`}</p>
                <p>Last Update: {this.props.batteryState.time.format()}</p>
            </div>
        );
    }
};