import Discord from 'discord.js';
import { MessageHandler } from './MessageHandler';
import dotenv from 'dotenv';

export class Client {
    client : Discord.Client;
    MessageHandler : MessageHandler

    constructor() {
        dotenv.config();
        
        this.client = new Discord.Client();
        this.MessageHandler = new MessageHandler(this);

        this.AssignEvents();
    }

    AssignEvents() : void {
        console.log('Assigning events');
        this.client.on('ready', () => {
            console.log('Logged in...');
        });
        console.log('onReady assigned');

        this.client.on('message', (msg : Discord.Message) => this.MessageHandler.onMessage(msg));
        console.log('onMessage assigned');
    }

    Login() : void {
        this.client.login(process.env.TOKEN);
    }
}