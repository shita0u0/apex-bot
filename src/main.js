import { Client, GatewayIntentBits } from 'discord.js'
import vueinit from '@/core/vue'
import dotenv from 'dotenv'
import { loadCommands, loadEvents } from '@/core/loader'
import { useAppStore } from '@/store/app.js'

vueinit()
dotenv.config()

loadCommands()
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
const appStore = useAppStore()
appStore.client = client
loadEvents()
client.login(process.env.token)