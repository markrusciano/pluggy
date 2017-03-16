import * as React from 'react';
import * as moment from 'moment';
import { Panel } from 'react-bootstrap';

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
        const bState = this.props.batteryState;

        const title = <h3>Battery Status</h3>;

        const percentage = <h2>{`${bState.level * 100}%`}</h2>;

        const source = (
            <h4>{bState.charging ?
                'Power Source: Adapter' : 'Power Source: Battery'}</h4>
        );

        var time;

        if (bState.charging) {
            time = (
                <div>
                    <span>Time until charged: </span>
                    <strong>
                        {BatteryStatusView.getHumanReadableDuration(
                            bState.timeToCharge)
                        }
                    </strong>
                </div>
            );
        } else {
            time = (
                <div>
                    <span>Time until empty: </span>
                    <strong>
                        {BatteryStatusView.getHumanReadableDuration(
                            bState.timeToDischarge)
                        }
                    </strong>
                </div>
            );
        }

        var style;

        if (bState.charging || bState.level > 0.7) {
            style = 'success';
        } else if (bState.level > 0.4) {
            style = 'warning';
        } else {
            style = 'danger';
        }

        return (
            <Panel header={title} bsStyle={style} className="battery-status-panel">
                <i className="battery">
                    <div className="battery-fill" style={{ height: `${bState.level * 100}%` }} />
                </i>
                {percentage}
                {source}
                {time}
            </Panel>
        );
    }
};