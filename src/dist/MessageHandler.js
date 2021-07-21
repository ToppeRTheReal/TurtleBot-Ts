"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHandler = void 0;
const q_1 = require("./Commands/q");
const help_1 = require("./Commands/help");
class MessageHandler {
    constructor(client) {
        this.Client = client;
        this.Prefix = '!';
        this.Commands = [];
        this.AssignCommands();
    }
    AssignCommands() {
        this.Commands.push(new q_1.q(this));
        this.Commands.push(new help_1.help(this));
    }
    onMessage(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!msg.content.startsWith(this.Prefix))
                return;
            if (msg.author.bot)
                return;
            console.log(msg.author.username + ' issued command ' + this.GetCommand(msg));
            this.Commands.forEach(command => {
                if (command.command == this.GetCommand(msg)) {
                    command.Execute(msg, this.GetArgsFromMessage(msg));
                }
            });
            return 0;
        });
    }
    GetArgsFromMessage(msg) {
        let messages = [];
        let commands = msg.content.split(' ');
        for (let i = 1; i > commands.length; i++) {
            messages.push(commands[i]);
        }
        return messages;
    }
    GetCommand(msg) {
        return msg.content.split(' ')[0].replace(this.Prefix, '');
    }
}
exports.MessageHandler = MessageHandler;
//# sourceMappingURL=MessageHandler.js.map