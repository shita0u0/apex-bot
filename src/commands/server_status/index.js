import { SlashCommandBuilder } from 'discord.js'
const axios = require("axios");
const http = require('http');

const agent = new http.Agent({ family: 4 })
axios.defaults.httpAgent = agent

export const command = new SlashCommandBuilder()
    .setName('server_status')
    .setDescription('查詢目前伺服器狀態')

export const action = async (interaction) => {
    let mapResp = await axios.get("https://api.mozambiquehe.re/servers?auth=" + process.env.apex_token).then(response => response.data)
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('APEX LEGENDS 伺服器狀態')
        .addFields(
            { name: '歐盟-西方', value: mapResp["Origin_login"]["EU-West"]["Status"], inline: true },
            { name: '歐盟-東方', value: mapResp["Origin_login"]["EU-East"]["Status"], inline: true },
            { name: '美國-西方', value: mapResp["Origin_login"]["US-West"]["Status"], inline: true },
            { name: '美國-中央', value: mapResp["Origin_login"]["US-Central"]["Status"], inline: true },
            { name: '美國-東方', value: mapResp["Origin_login"]["US-East"]["Status"], inline: true },
            { name: '南美洲', value: mapResp["Origin_login"]["SouthAmerica"]["Status"], inline: true },
            { name: '亞洲', value: mapResp["Origin_login"]["Asia"]["Status"], inline: true },
        )
        .setFooter({ text: 'Bot Developer: 一隻軟趴趴的熊🐬' });

    await interaction.reply({ embeds: [exampleEmbed] });
}