import { BatteryManager } from './interfaces/BatteryInterfaces';

export class BatteryState {
    readonly charging: boolean;
    readonly chargingTime: number;
    readonly dischargingTime: number;
    readonly level: number;
    readonly time: number;

    static fromManager(manager: BatteryManager, time: number): BatteryState {
        return new BatteryState(
            manager.charging,
            manager.chargingTime,
            manager.dischargingTime,
            manager.level,
            time);
    }

    constructor(
        charging: boolean,
        chargingTime: number,
        dischargingTime: number,
        level: number,
        time: number) {

        this.charging = charging;
        this.chargingTime = chargingTime;
        this.dischargingTime = dischargingTime;
        this.level = level;
        this.time = time;
    }
}