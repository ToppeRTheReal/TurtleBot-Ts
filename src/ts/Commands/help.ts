import { Message, MessageEmbed } from 'discord.js';
import { MessageHandler } from '../MessageHandler';
import { ICommand } from './ICommand';

export class help implements ICommand {
    command : string = "help";
    description : string = 'command for listing help';
    messageHandler : MessageHandler;

    constructor(handler : MessageHandler) {
        this.messageHandler = handler;
    }

    async Execute(msg : Message, args : string[]) : Promise<any> {
        let embed : MessageEmbed = new MessageEmbed();
        embed.setColor('#0645AD');
        embed.setTitle('Commands');
        this.messageHandler.Commands.forEach(elem => {
            if(elem.command != this.command) {
                embed.addField(this.messageHandler.Prefix + elem.command,  elem.description);
            }
        });

        msg.reply(embed);
    }
}