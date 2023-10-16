import {Bot, session} from "grammy";
import "dotenv/config"
import {messageLogging, userCreation} from "./middlewares";
import {checkAccount, click, deleteAccount, start} from "./handlers";
import editAccount from "@src/handlers/messages/edit-account";
import {default as changeUsernameConversation} from "@src/handlers/conversations/change-username";
import {default as changeClicksCountConversation} from "@src/handlers/conversations/change-clicks-count";
import {CustomContext} from '@src/types/CustomContext';
import {conversations, createConversation} from "@grammyjs/conversations";
import changeUsername from "@src/handlers/callbacks/change-username";
import changeClicksCount from "@src/handlers/callbacks/change-clicks-count";
import conversationCancel from "@src/handlers/callbacks/conversation-cancel";

const token = String(process.env.BOT_TOKEN);

export const bot = new Bot<CustomContext>(token);

// Session
bot.use(session({
    initial() {
        return {};
    },
}));

// Plugins
bot.use(conversations());

// Middlewares
bot.on("message", userCreation)
bot.on("message", messageLogging);

// Conversations
bot.use(createConversation(changeUsernameConversation))
bot.use(createConversation(changeClicksCountConversation))

// Callbacks
bot.callbackQuery('change-username', changeUsername)
bot.callbackQuery('change-clicks-count', changeClicksCount)
bot.callbackQuery('conversation-cancel', conversationCancel)

// Commands
bot.command("start", start)

// Messages
bot.hears("✨ Click", click)
bot.hears("📃 Check account", checkAccount)
bot.hears("❌ Delete account", deleteAccount)
bot.hears("⚙️ Edit account", editAccount)

// Message if command not exists
bot.use(async (ctx) => {
    await ctx.reply('❗️ This command does not exist')
})