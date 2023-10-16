import {CustomContext} from "@src/types/CustomContext";
import mainKeyboard from "@src/keyboards/default-keyboards/main-keyboard";

const conversationCancel = async (ctx: CustomContext) => {
    await ctx.answerCallbackQuery()
    await ctx.conversation.exit()
    await ctx.reply(`❌ You canceled the action`, {
        reply_markup: mainKeyboard
    })
}

export default conversationCancel