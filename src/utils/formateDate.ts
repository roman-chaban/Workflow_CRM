import dayjs from 'dayjs';

export default function formatTodayDate(): string {
  const today = dayjs();

  const startDate = today.format('MMM D, YYYY');

  const endDate = today.add(30, 'day').format('MMM D, YYYY');

  return `${startDate} - ${endDate}`;
}
