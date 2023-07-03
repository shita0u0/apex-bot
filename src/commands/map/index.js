import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('map')
    .setDescription('地圖查詢')

export const action = async (ctx) => {
    ctx.reply('pong !')
}