import { format } from "date-fns";
import { de } from "date-fns/locale";

export default function DateTime({ dateTime, className }) {
  const date = new Date(dateTime);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return (
    <time dateTime={date.toISOString()} title={date.toLocaleString()} className={className}>
      {format(date, "d. MMMM yyyy", { locale: de })}
    </time>
  );
}
