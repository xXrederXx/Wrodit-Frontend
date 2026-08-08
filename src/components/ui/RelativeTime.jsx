import { formatDistanceToNow } from "date-fns";
import { de } from "date-fns/locale";

export default function RelativeTime({ dateTime, className }) {
  const date = new Date(dateTime);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return (
    <time dateTime={date.toISOString()} title={date.toLocaleString()} className={className}>
      {formatDistanceToNow(date, {
        addSuffix: true,
        locale: de,
      })}
    </time>
  );
}
