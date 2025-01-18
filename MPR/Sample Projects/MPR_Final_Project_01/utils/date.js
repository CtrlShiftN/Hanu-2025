export function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
  
    if (month < 10) {
      month = `0${month}`
    }
    if (date < 10) {
      date = `0${date}`
    }
    return `${year}-${month}-${date}`;
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
