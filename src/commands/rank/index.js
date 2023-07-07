import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
const axios = require("axios");
const http = require('http');

const agent = new http.Agent({ family: 4 })
axios.defaults.httpAgent = agent

export const command = new SlashCommandBuilder()
    .setName('rank')
    .setDescription('查詢目前牌位狀況')

export const action = async (interaction) => {
    let testreps = await axios.get("https://api.mozambiquehe.re/predator?auth=" + process.env.apex_token).then(response => response.data)
    const test = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('APEX LEGENDS 牌位狀態')
        .addFields(
            { name: '主機', value: 'PC', inline: true },
            { name: '頂尖獵殺者數量 / 底分', value: testreps["RP"]["PC"]["foundRank"] + ' / ' + testreps["RP"]["PC"]["val"], inline: true },
            { name: '總大師數量', value: '' + testreps["RP"]["PC"]["totalMastersAndPreds"], inline: true },
            { name: '\n', value: '\n' }
        )
        .addFields(
            { name: '主機', value: 'Play Station', inline: true },
            { name: '頂尖獵殺者數量 / 底分', value: testreps["RP"]["PS4"]["foundRank"] + ' / ' + testreps["RP"]["PS4"]["val"], inline: true },
            { name: '總大師數量', value: '' + testreps["RP"]["PS4"]["totalMastersAndPreds"], inline: true },
            { name: '\n', value: '\n' }
        )
        .addFields(
            { name: '主機', value: 'XBOX', inline: true },
            { name: '頂尖獵殺者數量 / 底分', value: testreps["RP"]["X1"]["foundRank"] + ' / ' + testreps["RP"]["X1"]["val"], inline: true },
            { name: '總大師數量', value: '' + testreps["RP"]["X1"]["totalMastersAndPreds"], inline: true },
            { name: '\n', value: '\n' }
        )
        .addFields(
            { name: '主機', value: 'SWITCH', inline: true },
            { name: '頂尖獵殺者數量 / 底分', value: testreps["RP"]["SWITCH"]["foundRank"] + ' / ' + testreps["RP"]["SWITCH"]["val"], inline: true },
            { name: '總大師數量', value: '' + testreps["RP"]["SWITCH"]["totalMastersAndPreds"], inline: true },
            { name: '\n', value: '\n' }
        )
        .setFooter({ text: 'Bot Developer: 一隻軟趴趴的熊🐬' })
    await interaction.reply({ embeds: [test] })
}