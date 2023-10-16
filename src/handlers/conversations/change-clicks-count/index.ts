import {CustomConversation} from "@src/types/CustomConversation";
import {CustomContext} from "@src/types/CustomContext";
import {UsersRepository} from "@src/repositories/user-repository";
import mainKeyboard from "@src/keyboards/default-keyboards/main-keyboard";

const changeClicksCount = async (conversation: CustomConversation, ctx: CustomContext) => {
    await ctx.reply("✨ Write a new clicks count")
    const count = await conversation.form.number()
    const updateUser = await UsersRepository.updateUser({telegram_id: ctx.from?.id}, {count: count})
    return await ctx.reply(`✨ Your nickname changed to <b>${updateUser?.count}</b>`, {parse_mode: 'HTML', reply_markup: mainKeyboard})
}

export default changeClicksCount