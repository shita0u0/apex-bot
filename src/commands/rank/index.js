import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('rank')
    .setDescription('查詢目前牌位狀況')

export const action = async (ctx) => {
    ctx.reply('pong !')
}