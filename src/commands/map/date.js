export const Time = (interaction) => {
    const dateObject = new Date(interaction);

    // 取得時間物件的毫秒數
    const timestamp = dateObject.getTime();

    // 台灣時區的位移量為 8 個小時的毫秒數
    const taiwanOffset = 8 * 60 * 60 * 1000;

    // 加上台灣時區的位移量
    const taiwanTime = new Date(timestamp + taiwanOffset);

    // 轉換為台灣時區的日期字串
    const taiwanTimeString = taiwanTime.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    // console.log(taiwanTimeString); // 輸出：2023/07/09 下午04:00:00
    return(taiwanTimeString)
}