// taken from https://github.com/oliverhruby/marvin

export interface NavigatorWithBatteryManager extends Navigator {
    getBattery(): Promise<BatteryManager>;
}

export interface BatteryManager {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    onchargingchange: () => void;
    onchargingtimechange: () => void;
    ondischargingtimechange: () => void;
    onlevelchange: () => void;
}