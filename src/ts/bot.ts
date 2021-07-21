import { Client as DiscordClient, Message } from 'discord.js';
import { MessageHandler } from './MessageHandler';
import { TOKEN } from './globals'

export class Client {
    client : DiscordClient;
    MessageHandler : MessageHandler

    constructor() {
        
        this.client = new DiscordClient();
        this.MessageHandler = new MessageHandler(this);

        this.AssignEvents();
    }

    AssignEvents() : void {
        console.log('Assigning events');
        this.client.on('ready', () => {
            console.log('Logged in...');
        });
        console.log('onReady assigned');

        this.client.on('message', (msg : Message) => this.MessageHandler.onMessage(msg));
        console.log('onMessage assigned');
    }

    Login() : void {
        this.client.login(TOKEN);
    }
}