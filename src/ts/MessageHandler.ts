import { Client } from './bot';
import { ICommand } from './Commands/ICommand';
import { q } from './Commands/q';
import Discord from 'discord.js';
import dotenv from 'dotenv';

export class MessageHandler {
    Client : Client;
    Prefix : string;

    Commands : ICommand[];

    constructor(client : Client) {
        dotenv.config();

        this.Client = client;
        this.Prefix = '!';
        this.Commands = [];

        this.AssignCommands();
    }

    AssignCommands() : void {
        this.Commands.push(new q(this));
    }

    async onMessage(msg : Discord.Message) : Promise<any> {
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

    GetArgsFromMessage(msg : Discord.Message) : string[] {
        let messages : string[] = [];

        let commands = msg.content.split(' ');
        for(let i = 1; i > commands.length; i++) {
            messages.push(commands[i]);
        }

        return messages;
    }

    GetCommand(msg : Discord.Message) : string {
        return msg.content.split(' ')[0].replace(this.Prefix, '');
    }
}