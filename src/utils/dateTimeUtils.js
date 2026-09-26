export function getWeekDayDescByKey(weekDayKey) {
    const weekDaysArr = [
        { weekDayKey: "mon", weekDayDesc: "Monday" },
        { weekDayKey: "tue", weekDayDesc: "Tuesday" },
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


export function getMonthDescByMonthNo(monthNo) {
    const monthsArr = [
        { monthNo: 1, monthDesc: "January" },
        { monthNo: 2, monthDesc: "February" },
        { monthNo: 3, monthDesc: "March" },
        { monthNo: 4, monthDesc: "April" },
        { monthNo: 5, monthDesc: "May" },
        { monthNo: 6, monthDesc: "June" },
        { monthNo: 7, monthDesc: "July" },
        { monthNo: 8, monthDesc: "August" },
        { monthNo: 9, monthDesc: "September" },
        { monthNo: 10, monthDesc: "October" },
        { monthNo: 11, monthDesc: "November" },
        { monthNo: 12, monthDesc: "December" }
    ];

    const monthObj = monthsArr.find((monthItem) => monthItem.monthNo === monthNo);
    
    if (monthObj) {
        return monthObj.monthDesc;
    }

    return "";
}


export function formatMonthsList(months) {
    if (!Array.isArray(months) || months.length <= 0) {
        return "Year around";
    }
    
    const sortedMonths = [...new Set(months)].sort((a, b) => a - b);
    console.log("[formatMonthsList] Data cua sortedMonths :", sortedMonths);

    const groups = [];
    let start = sortedMonths[0];
    let end = sortedMonths[0];

    for (let i = 1; i < sortedMonths.length; i++) {
        const current = sortedMonths[i];

        if (current === end + 1) {
            // Tháng tiếp theo liền nhau
            end = current;
        } else {
            // Kết thúc một nhóm
            groups.push([start, end]);

            start = current;
            end = current;
        }
    }

    // Thêm nhóm cuối cùng
    if (sortedMonths.length > 0) {
        groups.push([start, end]);
    }

    // Format từng nhóm
    return groups.map(([start, end]) => {
            if (start === end) {
                //return monthNames[start - 1];
                return getMonthDescByMonthNo(start);
            }

            //return `${monthNames[start - 1]} - ${monthNames[end - 1]}`;
            return getMonthDescByMonthNo(start) + " - " + getMonthDescByMonthNo(end);
        }).join(", ");
}