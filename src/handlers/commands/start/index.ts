import {Context} from "grammy";
import mainKeyboard from "@src/keyboards/default-keyboards/main-keyboard";

const start = async (ctx: Context) => {
    await ctx.reply("Welcome!", {
        reply_markup: mainKeyboard
    })
}

export default start