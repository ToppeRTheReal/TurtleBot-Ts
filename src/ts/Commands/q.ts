import { randomInt } from 'crypto';
import { Message, TextChannel, MessageEmbed } from 'discord.js';
import { MessageHandler } from '../MessageHandler';
import { ICommand } from './ICommand';
import { QUOTEROOM } from '../globals';

export class q implements ICommand {
    command : string = "q";
    description : string = 'Fetch random quote';
    messageHandler : MessageHandler;

    constructor(handler : MessageHandler) {
        this.messageHandler = handler;
    }

    async Execute(msg : Message, args : string[]) : Promise<any> {
        let server = msg.guild;
        let channel : TextChannel = <TextChannel>server!.channels.cache.get(QUOTEROOM);

        let messages = await channel.messages.fetch();

        let i = randomInt(messages.size - 1);
        let messagesArr : Array<Message> = messages.array();
        
        let embed = new MessageEmbed();
        embed.setColor('#0645AD');
        embed.setTitle('Quote');
        embed.setDescription(messagesArr[i].content);

        msg.channel.send(embed);
    }
}