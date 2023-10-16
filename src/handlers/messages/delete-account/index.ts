import {Context} from "grammy";
import {UsersRepository} from "@src/repositories/user-repository";

const deleteAccount = async (ctx: Context) => {
    const updateUser = await UsersRepository.deleteUser({telegram_id: ctx.from?.id})
    return ctx.reply(`❌ Account <b>${updateUser?.telegram_id}</b> has been deleted`, {
        parse_mode: 'HTML'
    })
}

export default deleteAccount