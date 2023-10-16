import {Context} from "grammy";
import {UsersRepository} from "@src/repositories/user-repository";

const checkAccount = async (ctx: Context) => {
    const getUser = await UsersRepository.getUser({telegram_id: ctx.from?.id})
    return ctx.reply(`👤️ <b>Nickname:</b> ${getUser?.nickname}\n📝 <b>ID:</b> ${getUser?.telegram_id}\n✨ <b>Count:</b> ${getUser?.count}`, {
        parse_mode: 'HTML'
    })
}

export default checkAccount