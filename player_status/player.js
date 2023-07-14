export const status = (interaction) => {
    switch (interaction) {
        case 'offline':
            interaction = ":red_circle: 下線";
            break;
        case 'inLobby':
            interaction = ":green_circle: 在大廳";
            break;
        case 'inMatch':
            interaction = ":orange_circle: 比賽中";
            break;
    }
    return interaction;
}

export const rank = (interaction) => {
    const translations = {
        "Unranked": "新手",
        "Bronze": "青銅",
        "Sliver": "白銀",
        "Gold": "黃金",
        "Platinum": "白金",
        "Diamond": "鑽石",
        "Master": "大師",
        "Apex Predator": "頂尖獵殺者",
    }
    if (!translations.hasOwnProperty(interaction)) {
        return interaction;
    }
    return translations[interaction];
}