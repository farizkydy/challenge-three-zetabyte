import { SongModel, PlaylistModel, CARD_DATA_PLAYLIST } from '../card/card.data';
import { Component, OnInit} from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.css']
})
export class ChallengeTwoComponent implements OnInit {

  // assign playlist with dummy data
  playlists: PlaylistModel[] = CARD_DATA_PLAYLIST;
  // set variable for selected playlist
  playlistselected: PlaylistModel = new PlaylistModel();

  modalPopUp: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModalWithClass(i:any): any {
    const initialState = {
      index: i
    };

    this.modalPopUp = this.modalService.show(

      ModalComponent, {initialState}

    );
    this.modalPopUp.content.closeBtnName = 'Close';
    this.modalPopUp.content.event.subscribe((res:any) => {
      // this.playlists.push(res.data);
      console.log(res.data);

    });

  }

  openModal(): void {
    this.modalPopUp = this.modalService.show(

      ModalComponent
    );
  }

  countSong(songs: SongModel[] = []): number {
    return songs.length;
  }

  countMinutes(songs: SongModel[] = []): number {
    let count = 0;
    songs.forEach(song => {
      count += song.duration;
    });
    return count;
  }

  onDelete(i: number = 0): void {
    this.playlists.splice(i, 1);
  }
}
