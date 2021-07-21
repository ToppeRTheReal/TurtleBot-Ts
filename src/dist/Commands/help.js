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
exports.help = void 0;
const discord_js_1 = require("discord.js");
class help {
    constructor(handler) {
        this.command = "help";
        this.description = 'command for listing help';
        this.messageHandler = handler;
    }
    Execute(msg, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new discord_js_1.MessageEmbed();
            embed.setColor('#0645AD');
            embed.setTitle('Commands');
            this.messageHandler.Commands.forEach(elem => {
                if (elem.command != this.command) {
                    embed.addField(this.messageHandler.Prefix + elem.command, elem.description);
                }
            });
            msg.reply(embed);
        });
    }
}
exports.help = help;
//# sourceMappingURL=help.js.map