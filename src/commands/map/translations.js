export const Map = (interaction) => {
    const translations = {
        //NG, RK
        "Broken Moon": "殘月",
        "Kings Canyon": "王者峽谷",
        "World's Edge": "世界邊緣",
        "Olympus": "奧林匹斯",
        "Storm Point": "暴風點",

        //Mixtape
        "Party crasher": "不速之客",
        "Habitat 4": "4號棲息地",
        "Skulltown": "骷髏鎮",
        "Estates": "破碎西方",
    };

    if (!translations.hasOwnProperty(interaction)) {
        return interaction;
    }

    return translations[interaction];
}

export const Game_mode = (interaction) => {
    const translations = {
        "TDM": "團隊死鬥",
        "Control": "控制",
        "Gun Run": "槍戰",
    };

    if (!translations.hasOwnProperty(interaction)) {
        return interaction;
    }

    return translations[interaction];
}