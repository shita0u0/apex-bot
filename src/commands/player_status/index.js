import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('player_status')
    .setDescription('玩家狀態查詢')
    .addStringOption(Option =>
        Option.setName('玩家名稱')
            .setDescription('輸入玩家名稱')
            .setRequired(true)
    )
    .addStringOption(Option =>
        Option.setName('使用平台')
            .setDescription('選擇使用平台')
            .addChoices(
                { name: 'PC', value: 'PC' },
                { name: 'Playstation ', value: 'PS4' },
                { name: 'Xbox', value: 'X1' },
            )
            .setRequired(true)
    )

export const action = async (ctx) => {
    ctx.reply('pong !')
}