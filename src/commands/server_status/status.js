export const server_status = (interaction) => {
    switch (interaction) {
        case "UP":
            interaction = ":green_circle: 正常"
            break;
        case "SLOW":
            interaction = ":orange_circle: 緩慢"
            break;
        case "DOWN":
            interaction = ":red_circle: 離線"
            break;
    }
    return interaction
}