import { BatteryManager } from './interfaces/BatteryInterfaces';
import * as moment from 'moment';

export class BatteryState {
    readonly charging: boolean;
    readonly timeToCharge: moment.Duration;
    readonly timeToDischarge: moment.Duration;
    readonly level: number;
    readonly time: moment.Moment;

    static fromManager(manager: BatteryManager, time: moment.Moment): BatteryState {
        return new BatteryState(
            manager.charging,
            moment.duration(manager.chargingTime, 'seconds'),
            moment.duration(manager.dischargingTime, 'seconds'),
            manager.level,
            time);
    }

    constructor(
        charging: boolean,
        chargingTime: moment.Duration,
        dischargingTime: moment.Duration,
        level: number,
        time: moment.Moment) {

        this.charging = charging;
        this.timeToCharge = chargingTime;
        this.timeToDischarge = dischargingTime;
        this.level = level;
        this.time = time;
    }
}