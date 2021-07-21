"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const discord_js_1 = require("discord.js");
const MessageHandler_1 = require("./MessageHandler");
const globals_1 = require("./globals");
class Client {
    constructor() {
        this.client = new discord_js_1.Client();
        this.MessageHandler = new MessageHandler_1.MessageHandler(this);
        this.AssignEvents();
    }
    AssignEvents() {
        console.log('Assigning events');
        this.client.on('ready', () => {
            console.log('Logged in...');
        });
        console.log('onReady assigned');
        this.client.on('message', (msg) => this.MessageHandler.onMessage(msg));
        console.log('onMessage assigned');
    }
    Login() {
        this.client.login(globals_1.TOKEN);
    }
}
exports.Client = Client;
//# sourceMappingURL=bot.js.map