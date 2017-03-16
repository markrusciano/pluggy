import { AsyncEvent } from 'ts-events';
import * as moment from 'moment';

import {
    BatteryManager,
    NavigatorWithBatteryManager
} from './interfaces/BatteryInterfaces';

import { BatteryState } from './BatteryState';

export class BatteryDataProvider {
    public onChange: AsyncEvent<BatteryState>;

    private batteryManager: BatteryManager;

    constructor() {
        this.onChange = new AsyncEvent<BatteryState>({ condensed: true });
    }

    public initialize(): Promise<{}> {
        var promise = (navigator as NavigatorWithBatteryManager).getBattery();

        promise.then(
            (manager: BatteryManager) => {
                this.batteryManager = manager;

                manager.onchargingchange = () => { this.postStateChange(); };
                manager.onchargingtimechange = () => { this.postStateChange(); };
                manager.ondischargingtimechange = () => { this.postStateChange(); };
                manager.onlevelchange = () => { this.postStateChange(); };
            },
            (reason: {}) => {
                console.warn(`Error getting BatteryManager:\n${reason}`);
            });

        return promise;
    }

    public getState(): BatteryState {
        return BatteryState.fromManager(this.batteryManager, moment());
    }

    private postStateChange(): void {
        this.onChange.post(this.getState());
    }
}