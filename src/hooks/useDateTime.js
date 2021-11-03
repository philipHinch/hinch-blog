const useDateTime = () => {
    let day = new Date().getDay();
    let year = new Date().getFullYear().toString();
    let hour = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();

    let date = new Date();

    let options = { month: 'long' };
    let formattedMonth = new Intl.DateTimeFormat('en-US', options).format(date);

    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;

    return { day, formattedMonth, year, hour, min };
};


export default useDateTime