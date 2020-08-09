import exp from "constants";

export interface IClientCommand {
    points:number[];
    extra:'clear'|'undo';
}

export interface IServerCommand extends IClientCommand {
    lastUpdated:number;
}

export interface ICommandRequest {
    lastUpdated:number;
    commands:IClientCommand[];
}
