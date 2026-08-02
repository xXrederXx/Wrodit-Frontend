import { timeAgo } from "../../lib/util";

export default function RelativeTime({ dateTime, className }) {
  const date = new Date(dateTime);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return (
    <time
      dateTime={date.toISOString()}
      title={date.toLocaleString()}
      className={className}
    >
      Vor {timeAgo(dateTime)}
    </time>
  );
}