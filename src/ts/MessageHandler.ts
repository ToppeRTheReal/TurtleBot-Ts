import { Client } from './bot';
import { ICommand } from './Commands/ICommand';
import { q } from './Commands/q';
import { Message } from 'discord.js';
import { help } from './Commands/help';

export class MessageHandler {
    Client : Client;
    Prefix : string;

    Commands : ICommand[];

    constructor(client : Client) {
        this.Client = client;
        this.Prefix = '!';
        this.Commands = [];

        this.AssignCommands();
    }

    AssignCommands() : void {
        this.Commands.push(new q(this));
        this.Commands.push(new help(this));
    }

    async onMessage(msg : Message) : Promise<any> {
        if(!msg.content.startsWith(this.Prefix)) return;
        if(msg.author.bot) return;

        console.log(msg.author.username + ' issued command ' + this.GetCommand(msg));

        this.Commands.forEach(command => {
            if(command.command == this.GetCommand(msg)){
                command.Execute(msg, this.GetArgsFromMessage(msg));
            }

        });
        
        return 0;
    }

    GetArgsFromMessage(msg : Message) : string[] {
        let messages : string[] = [];

        let commands = msg.content.split(' ');
        for(let i = 1; i > commands.length; i++) {
            messages.push(commands[i]);
        }

        return messages;
    }

    GetCommand(msg : Message) : string {
        return msg.content.split(' ')[0].replace(this.Prefix, '');
    }
}