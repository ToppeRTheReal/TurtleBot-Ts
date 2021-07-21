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
exports.q = void 0;
const crypto_1 = require("crypto");
const discord_js_1 = require("discord.js");
const globals_1 = require("../globals");
class q {
    constructor(handler) {
        this.command = "q";
        this.description = 'Fetch random quote';
        this.messageHandler = handler;
    }
    Execute(msg, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let server = msg.guild;
            let channel = server.channels.cache.get(globals_1.QUOTEROOM);
            let messages = yield channel.messages.fetch();
            let i = crypto_1.randomInt(messages.size - 1);
            let messagesArr = messages.array();
            let embed = new discord_js_1.MessageEmbed();
            embed.setColor('#0645AD');
            embed.setTitle('Quote');
            embed.setDescription(messagesArr[i].content);
            msg.channel.send(embed);
        });
    }
}
exports.q = q;
//# sourceMappingURL=q.js.map