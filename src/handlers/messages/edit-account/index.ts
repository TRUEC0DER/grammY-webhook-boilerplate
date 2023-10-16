import {Context} from "grammy";
import {UsersRepository} from "@src/repositories/user-repository";
import editKeyboard from "@src/keyboards/inline-keyboards/edit-keyboard";

const editAccount = async (ctx: Context) => {
    const getUser = await UsersRepository.getUser({telegram_id: ctx.from?.id})
    return ctx.reply(`⚙️ Choose the option:`, {reply_markup: editKeyboard})
}

export default editAccount