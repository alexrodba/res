export interface Album {
  name: string;
  year: number;
  spotifyId: string;
  /** Sleeve artwork under /public, 800x800. */
  cover: string;
  /** Landscape 1200x630 share card built from the sleeve, under /public. */
  ogImage: string;
  songs: string[];
}

export const albums: Album[] = [
  {
    name: 'Les teves merdes',
    year: 2023,
    spotifyId: '6fEkUKfEgqIdEo3IIYck5m',
    cover: '/img/covers/les-teves-merdes.jpg',
    ogImage: '/og/album-les-teves-merdes.jpg',
    songs: [
      'No ens cal nom',
      'Kebab de proximitat',
      'El que tu vulguis',
      'President',
      'Absurda generació',
      'Perboc',
      'Horitzó',
      'Les teves merdes',
    ],
  },
  {
    name: 'Sou tots uns fills de puta',
    year: 2022,
    spotifyId: '6FgksiDsON5MeHsmLWSB5D',
    cover: '/img/covers/sou-tots-uns-fills-de-puta.jpg',
    ogImage: '/og/album-sou-tots-uns-fills-de-puta.jpg',
    songs: [
      'Els nois del forat negre',
      'Mor ebri',
      'Adolf Hipster',
      'Quan fumàvem herba',
      'Polla vella',
      'Violent sharks',
      'Moderns de merda',
      'Malmès',
      'Onanisme',
      'No puc més',
    ],
  },
];
