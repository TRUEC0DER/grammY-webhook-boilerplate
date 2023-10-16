import {CustomConversation} from "@src/types/CustomConversation";
import {CustomContext} from "@src/types/CustomContext";
import {UsersRepository} from "@src/repositories/user-repository";
import mainKeyboard from "@src/keyboards/default-keyboards/main-keyboard";

const changeUsername = async (conversation: CustomConversation, ctx: CustomContext) => {
    await ctx.reply("👤️ Write a new nickname")
    const nickname = await conversation.form.text()
    const updateUser = await UsersRepository.updateUser({telegram_id: ctx.from?.id}, {nickname: nickname})
    return await ctx.reply(`👤️ Your nickname changed to <b>${updateUser?.nickname}</b>`, {parse_mode: 'HTML', reply_markup: mainKeyboard })
}

export default changeUsername