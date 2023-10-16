import {Context} from "grammy";
import {UsersRepository} from "@src/repositories/user-repository";

const userCreation = async (ctx: Context, next: () => Promise<void>) => {
    const {first_name, last_name, id} = ctx.message?.from!
    const getUser = await UsersRepository.getUser({telegram_id: id})

    if (getUser === null) {
        const createUser = await UsersRepository.createUser({
            telegram_id: id,
            nickname: `${first_name ?? ''} ${last_name ?? ''}`
        })
        await ctx.reply(`👋 Account <b>${createUser?.telegram_id}</b> has been created`, {
            parse_mode: 'HTML'
        })
    }

    await next()
}

export default userCreation