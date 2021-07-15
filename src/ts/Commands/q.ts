import Discord from 'discord.js';
import { MessageHandler } from '../MessageHandler';
import { ICommand } from './ICommand';

export class q implements ICommand {
    command : string = "q";
    messageHandler : MessageHandler;

    constructor(handler : MessageHandler) {
        this.messageHandler = handler;
    }

    async Execute(msg : Discord.Message, args : string[]) : Promise<any> {
        let server = msg.guild;
        let channel : Discord.TextChannel = <Discord.TextChannel>server!.channels.cache.get('800066325090271242');

        let messages = await channel.messages.fetch();
        messages.forEach(message => console.log(message));
    }
}