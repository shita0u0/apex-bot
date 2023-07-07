import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
const axios = require("axios");
const http = require('http');

const agent = new http.Agent({ family: 4 })
axios.defaults.httpAgent = agent

export const command = new SlashCommandBuilder()
    .setName('crafting')
    .setDescription('查詢複製器可製作物品')

export const action = async (interaction) => {

    await interaction.reply('功能製作中...')
} 