export interface Concert {
  /** ISO date 'YYYY-MM-DD'. Used to sort and to split past vs. upcoming at build time. */
  date: string;
  /** Venue name, e.g. 'Sala Rocksound'. */
  venue: string;
  /** City / location line, e.g. 'Barcelona, Catalunya'. */
  city: string;
  /** Optional setlist link (past concerts). */
  setlistUrl?: string;
  /** Optional photos link (past concerts). */
  photosUrl?: string;
  /** Optional video link (past concerts). */
  videoUrl?: string;
  /** Optional tickets link (upcoming concerts). */
  ticketsUrl?: string;
}

// No concerts planned right now — the empty array renders the "cap concert a la vista" state.
export const concerts: Concert[] = [];

const startOfToday = (): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/** Concerts on or after today, soonest first. */
export function upcomingConcerts(): Concert[] {
  const today = startOfToday();
  return concerts
    .filter((c) => new Date(c.date) >= today)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));
}

/** Concerts before today, most recent first. */
export function pastConcerts(): Concert[] {
  const today = startOfToday();
  return concerts
    .filter((c) => new Date(c.date) < today)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
