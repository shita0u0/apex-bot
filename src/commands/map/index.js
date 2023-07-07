import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
const axios = require("axios");
const http = require('http');

const agent = new http.Agent({ family: 4 })
axios.defaults.httpAgent = agent

export const command = new SlashCommandBuilder()
    .setName('map')
    .setDescription('地圖查詢')

export const action = async (interaction) => {
    let mapResp = await axios.get("https://lil2-gateway.apexlegendsstatus.com/gateway.php?qt=map").then(response => response.data)
    const craftingEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('APEX LEGENDS 地圖查詢')
        .addFields(
            { name: '遊戲模式', value: 'NG', inline: true },
            { name: '當前地圖', value: mapResp["rotation"]["battle_royale"]["current"]["map"], inline: true },
            { name: '下張地圖', value: mapResp["rotation"]["battle_royale"]["next"]["map"], inline: true },
            { name: '\n', value: '\n' },
            { name: ' ', value: ' ', inline: true },
            { name: '開始時間', value: mapResp["rotation"]["battle_royale"]["current"]["readableDate_start"], inline: true },
            { name: '結束時間', value: mapResp["rotation"]["battle_royale"]["next"]["readableDate_start"], inline: true },
            { name: '\n', value: '\n' },
        )
        .addFields(
            { name: '遊戲模式', value: 'RK', inline: true },
            { name: '當前地圖', value: mapResp["rotation"]["ranked"]["current"]["map"], inline: true },
            { name: '下張地圖', value: mapResp["rotation"]["ranked"]["next"]["map"], inline: true },
            { name: '\n', value: '\n' },
            { name: ' ', value: ' ', inline: true },
            { name: '開始時間', value: mapResp["rotation"]["ranked"]["current"]["readableDate_start"], inline: true },
            { name: '結束時間', value: mapResp["rotation"]["ranked"]["next"]["readableDate_start"], inline: true },
            { name: '\n', value: '\n' },
        )
        .addFields(
            { name: '遊戲模式', value: mapResp["rotation"]["ltm"]["current"]["eventName"], inline: true },
            { name: '當前地圖', value: mapResp["rotation"]["ltm"]["current"]["map"], inline: true },
            { name: '下張地圖', value: mapResp["rotation"]["ltm"]["next"]["map"], inline: true },
            { name: '\n', value: '\n' },
            { name: ' ', value: ' ', inline: true },
            { name: '開始時間', value: mapResp["rotation"]["ltm"]["current"]["readableDate_start"], inline: true },
            { name: '結束時間', value: mapResp["rotation"]["ltm"]["next"]["readableDate_start"], inline: true },
            { name: '\n', value: '\n' },
        )
        .setImage(mapResp["bannerPath"])
        .setFooter({ text: 'Bot Developer: 一隻軟趴趴的熊🐬' });

    await interaction.reply({ embeds: [craftingEmbed] });
}