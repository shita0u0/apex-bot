import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
const axios = require("axios");
const http = require('http');

const agent = new http.Agent({ family: 4 })
axios.defaults.httpAgent = agent

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

export const action = async (interaction) => {

    let Username = interaction.options.getString('玩家名稱')
    let Platform = interaction.options.getString('使用平台')
    let testreps = await axios.get("https://api.mozambiquehe.re/bridge?auth=" + process.env.apex_token + "&player=" + Username + "&platform=" + Platform).then(response => response.data)

    const test = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('APEX LEGENDS 玩家狀態')
        .setURL("https://apexlegendsstatus.com/profile/uid/" + testreps['global']['platform'] + "/" + testreps['global']['uid'])
        .setThumbnail(testreps["global"]["avatar"])
        .addFields(
            { name: '玩家名稱', value: testreps["global"]["name"], inline: true },
            { name: '玩家等級', value: '' + testreps["global"]["level"], inline: true },
            { name: '\n', value: '\n' }
        )
        .addFields(
            { name: '使用平台', value: testreps["global"]["platform"], inline: true },
            { name: '玩家狀態', value: testreps["realtime"]["currentState"], inline: true },
            { name: '\n', value: '\n' }
        )
        .addFields(
            { name: '玩家牌位', value: testreps["global"]["rank"]["rankName"] + ' ' + testreps["global"]["rank"]["rankDiv"], inline: true },
            { name: '牌位分數', value: '' + testreps["global"]["rank"]["rankScore"], inline: true },
        )
        .setFooter({ text: 'Bot Developer: 一隻軟趴趴的熊🐬' })
    await interaction.reply({ embeds: [test] })
    console.log(testreps["legends"]["all"])
}