import {Context} from "grammy";
import {UsersRepository} from "@src/repositories/user-repository";

const click = async (ctx: Context) => {
    const updateUser = await UsersRepository.updateUser({telegram_id: ctx.from?.id}, {$inc: {count: 1}})
    return ctx.reply(`👤️ <b>Nickname:</b> ${updateUser?.nickname}\n📝 <b>ID:</b> ${updateUser?.telegram_id}\n✨ <b>Count:</b> ${updateUser?.count}`, {
        parse_mode: 'HTML'
    })
}

export default click