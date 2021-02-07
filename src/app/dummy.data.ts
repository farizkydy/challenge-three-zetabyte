export class SongModel {
  titlesong: string;
  artist: string;
  duration: number;
}

export class PlaylistModel {
  titleplaylist: string;
  // lets make on the fly / by calculate
  // totalsong: number;
  // totalduration: number;
  description: string;
  songs: SongModel[];
}

export const CARD_DATA_PLAYLIST: PlaylistModel[] = [
  {
    titleplaylist: 'Kopikustik',
    // totalsong: 0,
    // totalduration: 0,
    description: 'lorem kakaka lo',
    songs: [
      {
        titlesong: 'judul lagu',
        artist: 'penyanyinya',
        duration: 6
      }, {
        titlesong: 'judul lagu',
        artist: 'penyanyinya',
        duration: 8
      }
    ]
  },
  {
    titleplaylist: 'Selain rock',
    // totalsong: 0,
    // totalduration: 0,
    description: 'lorem kakakao',
    songs: [
      {
        titlesong: 'judul lagu',
        artist: 'penyanyinya',
        duration: 6
      }, {
        titlesong: 'judul lagu',
        artist: 'penyanyinya',
        duration: 7
      }
    ]
  }
];

// export const CARD_DATA_CONTENT = [
//     {
//         pla
//     }
// ]
