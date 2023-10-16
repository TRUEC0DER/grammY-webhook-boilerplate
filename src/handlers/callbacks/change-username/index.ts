import {CustomContext} from "@src/types/CustomContext";

const changeUsername = async (ctx: CustomContext) => {
    await ctx.answerCallbackQuery()
    await ctx.conversation.enter('changeUsername')
}

export default changeUsername