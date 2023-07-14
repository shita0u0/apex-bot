import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('shop')
    .setDescription('查詢商城販售物品')

export const action = async (interaction) => {
    await interaction.reply('點擊右方連結查看APEX商城販售物品:shopping_cart:：https://apexlegendsstatus.com/store.');
} 