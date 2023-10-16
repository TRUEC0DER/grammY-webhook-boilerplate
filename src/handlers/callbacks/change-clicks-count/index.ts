import {CustomContext} from "@src/types/CustomContext";

const changeClicksCount = async (ctx: CustomContext) => {
    await ctx.answerCallbackQuery()
    await ctx.conversation.enter('changeClicksCount')
}

export default changeClicksCount