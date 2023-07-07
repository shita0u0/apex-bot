import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('news')
    .setDescription('查看APEX新聞')

export const action = async (interaction) => {

    await interaction.reply('功能製作中...');
}






