import { REST, Routes } from 'discord.js'
import fg from 'fast-glob'

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
    console.log(result)
}

export const loadCommands = async () => {
    const commands = []
    const files = await fg('./src/commands/**/index.js')
    for (const file of files) {
        const cmd = await import(file)
        commands.push(cmd.command)
    }
    await updataSlashCommands(commands)
}