import { Component, OnInit } from '@angular/core';

// import bootstrap library
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

// import dummy data
import { SongModel, PlaylistModel, CARD_DATA_PLAYLIST } from './dummy.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // assign playlist with dummy data
  playlists: PlaylistModel[] = CARD_DATA_PLAYLIST;
  // set variable for selected playlist
  playliststate = 'create';
  playlistindex = 0;
  playlistselected: PlaylistModel = new PlaylistModel();

  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
  }

  onCreatePlaylist(): void {
    this.playliststate = 'create';
    // just make sure you init it with good structure
    const playlist = new PlaylistModel();
    playlist.titleplaylist = '';
    playlist.description = '';
    playlist.songs = [];
    this.playlistselected = playlist;
    this.onAddSong();
  }

  onUpdatePlaylist(i: number = 0): void {
    this.playliststate = 'update';
    this.playlistindex = i;
    const clone = Object.assign({}, this.playlists[i]);
    clone.songs = Object.assign([], clone.songs);
    this.playlistselected = clone;
  }

  onSavePlaylist(): void {
    if (this.playliststate === 'create') {
      this.playlists.push(this.playlistselected);
    } else if (this.playliststate === 'update') {
      this.playlists[this.playlistindex] = this.playlistselected;
    }
    this.modalService.dismissAll();
  }

  onAddSong(): void {
    const song = new SongModel();
    song.titlesong = '';
    song.artist = '';
    song.duration = 0;
    this.playlistselected.songs.push(song);
  }

  onDeleteSong(i: number = 0): void {
    this.playlistselected.songs.splice(i, 1);
  }

  // modal open for create / update purpose
  openModal(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // just delete playlist base on index
  onDeletePlaylist(i: number = 0): void {
    this.playlists.splice(i, 1);
  }

  // count number of song inside playlist
  countSong(songs: SongModel[] = []): number {
    return songs.length;
  }

  // count total of minute inside playlist
  countMinutes(songs: SongModel[] = []): number {
    let count = 0;
    songs.forEach(song => {
      count += song.duration;
    });
    return count;
  }

}
