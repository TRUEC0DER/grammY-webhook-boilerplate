import {Context} from "grammy";

const messageLogging = async (ctx: Context, next: () => Promise<void>) => {
    const {first_name, last_name, id, username} = ctx.message?.from!
    const text = ctx.message?.text

    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    const formattedTime = currentDate.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    console.info(`[ ${formattedDate} - ${formattedTime} ] [ ${id} / ${username} / ${first_name ?? ''} ${last_name ?? ''}] » ${text}`)

    await next()
}

export default messageLogging

