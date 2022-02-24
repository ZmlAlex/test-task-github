import date from 'date-and-time';

const now = new Date();
const weekAgo = date.addDays(now, -7);

const formattedTodaysDate = date.format(now, 'YYYY-MM-DD');
const formattedWeekAgoDate = date.format(weekAgo, 'YYYY-MM-DD');

export default {
  formattedTodaysDate,
  formattedWeekAgoDate,
};
