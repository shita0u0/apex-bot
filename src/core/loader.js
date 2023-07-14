import { REST, Routes, Collection } from 'discord.js'
import fg from 'fast-glob'
import { useAppStore } from '@/store/app'

const updataSlashCommands = async (commands) => {
    const rest = new REST({ version: 10 }).setToken(process.env.token)
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.application_id,
            process.env.guild_id
        ),
        {
            body: commands
        }
    )
}

export const loadCommands = async () => {
    const appStore = useAppStore()
    const commands = []
    const actions = new Collection()
    const files = await fg('./src/commands/**/index.js')
    for (const file of files) {
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name, cmd.action)
    }
    await updataSlashCommands(commands)
    appStore.commandsActionMap = actions
}

export const loadEvents = async () => {
    const appStore = useAppStore()
    const client = appStore.client
    const files = await fg('./src/events/**/index.js')
    for (const file of files) {
        const event_file = await import(file)
        if (event_file.event.once) {
            client.once(event_file.event.name, event_file.action)
        }
        else {
            client.on(event_file.event.name, event_file.action)
        }
    }
}