import { Events } from "discord.js"
import { useAppStore } from "@/store/app"

export const event = {
    name: Events.InteractionCreate,
    once: false
}
export const action = async (Interaction) => {
    if (!Interaction.isChatInputCommand()) return
    const appStore = useAppStore()
    const action = appStore.commandsActionMap.get(Interaction.commandName)
    await action(Interaction)
}