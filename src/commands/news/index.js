import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('news')
    .setDescription('查詢APEX新聞')

export const action = async (interaction) => {
    await interaction.reply('點擊右方連結查看APEX新聞 :newspaper:：https://www.ea.com/games/apex-legends/news?isLocalized=true.');
}






