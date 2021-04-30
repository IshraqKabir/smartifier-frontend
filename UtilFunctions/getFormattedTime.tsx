export default function getFormattedTime(
  time: String
): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  let hours = 0,
    minutes = 0,
    seconds = 0;

  if (time == null) return { hours, minutes, seconds };

  const times = time?.split(":");

  seconds = parseInt(times[times?.length - 1]);
  if (times.length > 1) {
    minutes = parseInt(times[times?.length - 2]);
  }

  if (times.length > 2) {
    hours = parseInt(times[times?.length - 3]);
  }

  return { hours, minutes, seconds };
}
