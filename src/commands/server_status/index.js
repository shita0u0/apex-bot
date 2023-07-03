import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('server_status')
    .setDescription('查詢目前伺服器狀態')

export const action = async (ctx) => {
    ctx.reply('pong !')
}