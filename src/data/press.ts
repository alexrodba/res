export interface PressFeature {
  /** Publication / outlet / show name. */
  outlet: string;
  /** Short pull-quote or headline (kept punchy — one line reads best). No quote marks; they're added in the layout. */
  quote: string;
  /** Type of coverage, shown as a small badge, e.g. 'Ressenya', 'Entrevista', 'Playlist'. */
  kind: string;
  /** Display date, e.g. 'Setembre 2023'. Optional when unknown (e.g. a TV placement). */
  date?: string;
  /** Link to the article / episode / playlist. Use '#' for coverage without an online link yet. */
  url: string;
  /** Optional extra detail line, e.g. a timestamp: 'Minut 3:31'. */
  detail?: string;
  /** Marks the hero item — rendered as a highlighted banner at the top of the section. */
  featured?: boolean;
  /** Optional cropped press clipping (the "our review only" scan). Renders the item as a feature card. Path under /public. */
  image?: string;
  /** Optional full-page scan, opened when the clipping is clicked. Path under /public. */
  scan?: string;
}

// Real coverage first. To add a text-only feature, omit `image`/`scan` — it renders as a compact row.
// Items whose `url` is '#' (or non-http) render as an inert "Aviat" row instead of a dead link.
export const press: PressFeature[] = [
  {
    outlet: 'TV3 · Joc de cartes',
    quote: '«Kebab de proximitat» sona a la televisió pública catalana.',
    kind: 'Televisió',
    date: 'Agost 2024',
    detail: 'Minut 3:31 · T8·C2',
    url: 'https://www.3cat.cat/3cat/t8xc2-el-millor-restaurant-de-km0-de-les-muntanyes-de-prades/video/6294443/',
    featured: true,
  },
  {
    outlet: 'El 9 Nou · El 9 Magazín',
    quote: 'El punk no ha mort. Almenys a casa nostra.',
    kind: 'Ressenya',
    date: 'Setembre 2023',
    url: 'https://mes9.cat/novetats-discografiques-35/',
    image: '/img/premsa/el9nou-2023-09-08-res.jpg',
    scan: '/img/premsa/el9nou-2023-09-08-full.jpg',
  },
  {
    outlet: 'Enderrock',
    quote: 'Segon llarga durada de la banda de punk de Barcelona.',
    kind: 'Fitxa',
    date: 'Juliol 2023',
    url: 'https://www.enderrock.cat/disc/10058/teves-merdes',
  },
];
