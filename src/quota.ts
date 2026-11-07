// Fake example: a monthly quota check. No real data anywhere in this repo.
export function remaining(cap: number, used: number): number {
  if (used >= cap) return 0;
  return cap - used;
}

export function isThisMonth(date: Date, now: Date): boolean {
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  );
}

export const VERSION = "0.0.2";
