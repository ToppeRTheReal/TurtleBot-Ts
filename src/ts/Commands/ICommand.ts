import Discord from 'discord.js';
import { MessageHandler } from '../MessageHandler';

export interface ICommand {
    messageHandler : MessageHandler;
    command : string;
    Execute(msg : Discord.Message, args : string[]) : Promise<any>;
}