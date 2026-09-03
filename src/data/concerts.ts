export interface Concert {
  /** ISO date 'YYYY-MM-DD'. Used to sort and to split past vs. upcoming at build time. */
  date: string;
  /** Venue name, e.g. 'Bar Ceferino'. Optional — the earliest gigs are only recorded by town. */
  venue?: string;
  /** City / location line, e.g. 'Barcelona, Catalunya'. */
  city?: string;
  /** Other bands on the bill, in billing order. Rendered as "amb A + B". */
  lineup?: string[];
  /** Songs played, in order. Titles matching a lyrics page link to it. */
  setlist?: string[];
  /** Short aside shown on the row, e.g. 'Primer concert'. */
  note?: string;
  /** Optional photos link (past concerts). */
  photosUrl?: string;
  /** Optional video link (past concerts). */
  videoUrl?: string;
  /** Optional tickets link (upcoming concerts). */
  ticketsUrl?: string;
}

// Nothing booked ahead right now, so /concerts renders the "cap concert a la
// vista" state above the history below.
// Setlists are written with the canonical song titles from src/content/lyrics
// so each one links to its own words — the handwritten lists shorten "Mor ebri"
// to "Ebri" and "Adolf Hipster" to "Adolf". Covers keep the original band in
// parentheses and have no lyrics page of ours to link to.
export const concerts: Concert[] = [
  {
    date: '2021-06-19',
    city: 'Santa Maria de Palautordera',
    lineup: ['Només Tot', "Càndid d'Autodestrucció"],
    note: 'Primer concert',
    setlist: [
      'Adolf Hipster',
      'Polla vella',
      'Mor ebri',
      'Astro Zombies (Misfits)',
      'Violent sharks',
      'Els nois del forat negre',
      'Quan fumàvem herba',
    ],
  },
  {
    date: '2022-02-12',
    venue: 'Oasis',
    lineup: ['Ancora'],
    setlist: [
      'Els nois del forat negre',
      'Mor ebri',
      'Quan fumàvem herba',
      'Adolf Hipster',
      'Polla vella',
      'Violent sharks',
      'Moderns de merda',
      'Malmès',
      'Onanisme',
      'R.A.M.O.N.E.S (Motörhead)',
    ],
  },
  {
    date: '2022-07-23',
    venue: 'Rancho skatepark',
    lineup: ['Rüna', 'Només Tot'],
    setlist: [
      'Els nois del forat negre',
      'Mor ebri',
      'Adolf Hipster',
      'Onanisme',
      'Violent sharks',
      'Quan fumàvem herba',
      'Malmès',
      'Kebab de proximitat',
      'No ens cal nom',
      'Polla vella',
      'President',
      'No puc més',
      'Les teves merdes',
      'Moderns de merda',
      'R.A.M.O.N.E.S (Motörhead)',
    ],
  },
  {
    date: '2022-11-11',
    venue: 'Bar Ceferino',
    lineup: ['Rostoll'],
    setlist: [
      'Els nois del forat negre',
      'Mor ebri',
      'Adolf Hipster',
      'Onanisme',
      'Quan fumàvem herba',
      'Violent sharks',
      'Malmès',
      'Polla vella',
      'President',
      'Kebab de proximitat',
      'No ens cal nom',
      'Les teves merdes',
      'No puc més',
      'Moderns de merda',
      'R.A.M.O.N.E.S (Motörhead)',
    ],
  },
];

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
