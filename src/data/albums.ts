export interface Album {
  name: string;
  year: number;
  spotifyId: string;
  songs: string[];
}

export const albums: Album[] = [
  {
    name: 'Les teves merdes',
    year: 2023,
    spotifyId: '6fEkUKfEgqIdEo3IIYck5m',
    songs: [
      'No ens cal nom',
      'Kebab de proximitat',
      'El que tu vulguis',
      'President',
      'Perboc',
      'Absurda generació',
      'Horitzó',
      'Les teves merdes',
    ],
  },
  {
    name: 'Sou tots uns fills de puta',
    year: 2022,
    spotifyId: '6FgksiDsON5MeHsmLWSB5D',
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
