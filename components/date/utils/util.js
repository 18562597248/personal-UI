import dateUtil from 'src/utils/date';

export const toDate = function(date) {
    date = new Date(date);
    if (isNaN(date.getTime())) return null;
    return date;
};

export const formatDate = function(date, format) {
    date = toDate(date);
    if (!date) return '';
    return dateUtil.format(date, format || 'yyyy-MM-dd');
};

export const parseDate = function(string, format) {
    return dateUtil.parse(string, format || 'yyyy-MM-dd');
};
export const getDayCountOfMonth = function(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }

    return 31;
};

export const getFirstDayOfMonth = function(date) {
    const temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};
export const getWeekNumber = function(src) {
    const date = new Date(src.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};
export const prevMonth = function(src) {
    const year = src.getFullYear();
    const month = src.getMonth();
    const date = src.getDate();

    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;

    const newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
    if (newMonthDayCount < date) {
        src.setDate(newMonthDayCount);
    }

    src.setMonth(newMonth);
    src.setFullYear(newYear);

    return new Date(src.getTime());
};

export const nextMonth = function(src) {
    const year = src.getFullYear();
    const month = src.getMonth();
    const date = src.getDate();

    const newYear = month === 11 ? year + 1 : year;
    const newMonth = month === 11 ? 0 : month + 1;

    const newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
    if (newMonthDayCount < date) {
        src.setDate(newMonthDayCount);
    }

    src.setMonth(newMonth);
    src.setFullYear(newYear);

    return new Date(src.getTime());
};

export const initTimeDate = function () {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
};
