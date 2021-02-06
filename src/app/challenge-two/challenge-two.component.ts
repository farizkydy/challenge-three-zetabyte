import { CARD_DATA_PLAYLIST } from '../card/card.data';
import { Component, OnInit} from '@angular/core';  

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';  
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.css']
})
export class ChallengeTwoComponent implements OnInit {
  
  playlists=CARD_DATA_PLAYLIST
  modalPopUp: any;
 
  constructor(private modalService: BsModalService) { }  

  ngOnInit(): void {
  }

  openModalWithClass(i:any) {  
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
  
  openModal() {
    this.modalPopUp = this.modalService.show(  

      ModalComponent
    ); 
  }
}
