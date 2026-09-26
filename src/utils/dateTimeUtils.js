export function getWeekDayDescByKey(weekDayKey) {
    const weekDaysArr = [
        { weekDayKey: "mon", weekDayDesc: "Monday" },
        { weekDayKey: "tue", weekDayDesc: "Thursday" },
        { weekDayKey: "wed", weekDayDesc: "Wednesday" },
        { weekDayKey: "thu", weekDayDesc: "Thursday" },
        { weekDayKey: "fri", weekDayDesc: "Friday" },
        { weekDayKey: "sat", weekDayDesc: "Saturday" },
        { weekDayKey: "sun", weekDayDesc: "Sunday" }
    ];

    const weekDayObj = weekDaysArr.find((weekDayItem) => weekDayItem.weekDayKey === weekDayKey);
    
    if (weekDayObj) {
        return weekDayObj.weekDayDesc;
    }

    return "";
}

export function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}