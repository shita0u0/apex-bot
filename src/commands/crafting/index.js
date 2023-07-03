import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('crafting')
    .setDescription('查詢複製器可製作物品')

export const action = async (ctx) => {
    ctx.reply('pong !')
}