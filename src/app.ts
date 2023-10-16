import express from "express";
import {webhookCallback} from "grammy";
import {bot} from "./bot";
import crypto from "node:crypto"
import mongoose from "mongoose"
import "dotenv/config"

const mongo_url = String(process.env.MONGO_URL)
const domain = String(process.env.WEBHOOK_DOMAIN);
const token = String(process.env.BOT_TOKEN);
const port = Number(process.env.WEBHOOK_PORT)

const secretToken = crypto.randomBytes(64).toString("hex")

const app = express();

app.use(express.json());
app.use(`/${token}`, webhookCallback(bot, "express", {
    secretToken: secretToken
}));

mongoose.connect(mongo_url).then(() => console.log(`[ MongoDB ] Successfully connected`))

bot.api.setWebhook(`https://${domain}/${token}`, {
    secret_token: secretToken
}).then(() => console.log(`[ Bot ] Launched on https://${domain} domain`));

app.listen(port, () => {
    console.log(`[ Server ] Launched on ${port} port`)
});

