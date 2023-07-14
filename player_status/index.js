import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { status, rank } from './player'
const axios = require("axios");
const http = require('http');

const agent = new http.Agent({ family: 4 })
axios.defaults.httpAgent = agent

export const command = new SlashCommandBuilder()
    .setName('player_status')
    .setDescription('查詢玩家狀態')
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
            .setRequired(true))

export const action = async (interaction) => {
    let Username = interaction.options.getString('玩家名稱')
    let Platform = interaction.options.getString('使用平台')
    const playerEmbed = new EmbedBuilder()
        .setColor(0x0099FF);
    try {
        //let playerreps = await axios.get("https://api.mozambiquehe.re/bridge?auth=" + process.env.apex_token + "&player=" + Username + "&platform=" + Platform)
        let playerreps = await axios.get("https://lil2-gateway.apexlegendsstatus.com/gateway.php?qt=stats-single-legend&userName=" + Username + "&userPlatform=" + Platform)
            .then(response => response.data)
            .catch(error => {
                console.error('發生錯誤', error.message);
            });
        playerEmbed.setTitle('APEX LEGENDS 玩家狀態')
        playerEmbed.setURL("https://apexlegendsstatus.com/profile/uid/" + playerreps["statsAPI"]['global']['platform'] + "/" + playerreps["statsAPI"]['global']['uid'])
        playerEmbed.setThumbnail(playerreps["statsAPI"]["global"]["avatar"])
        playerEmbed.addFields(
            { name: '玩家名稱', value: '' + playerreps['statsAPI']["global"]["name"], inline: true },
            { name: '玩家等級', value: '' + playerreps["statsAPI"]["global"]["level"], inline: true },
            { name: '\n', value: '\n' }
        )
        playerEmbed.addFields(
            { name: '使用平台', value: playerreps["statsAPI"]["global"]["platform"], inline: true },
            { name: '玩家狀態', value: status(playerreps["statsAPI"]["realtime"]["currentState"]), inline: true },
            { name: '\n', value: '\n' }
        )
        playerEmbed.addFields(
            { name: '玩家牌位', value: ':trophy: ' + rank(playerreps["statsAPI"]["global"]["rank"]["rankName"]) + ' ' + playerreps["statsAPI"]["global"]["rank"]["rankDiv"], inline: true },
            { name: '牌位分數', value: ':crown: ' + playerreps["statsAPI"]["global"]["rank"]["rankScore"], inline: true },
        )
        playerEmbed.setFooter({ text: 'Bot Developer: 一隻軟趴趴的熊🐬' });
        await interaction.deferReply({ embeds: [playerEmbed] });
    } catch (error) {
        console.log(error)
        playerEmbed.setTitle("發生錯誤");
        playerEmbed.setDescription(":x: 發生錯誤，請稍後再試");
        await interaction.deferReply({ embeds: [playerEmbed] });
        return;
    }

}