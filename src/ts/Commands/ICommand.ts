import { Message } from 'discord.js';
import { MessageHandler } from '../MessageHandler';

export interface ICommand {
    messageHandler : MessageHandler;
    command : string;
    description : string;
    Execute(msg : Message, args : string[]) : Promise<any>;
}