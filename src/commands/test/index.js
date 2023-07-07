import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('test')
    .setDescription('玩家狀態查詢')

export const action = async (interaction) => {

    await interaction.reply('你可以點擊右方連結：https://apexlegendsstatus.com/store.');
} 