import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, EventEmitter  } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';  
import { CARD_DATA_PLAYLIST } from '../card/card.data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  itemForm: FormGroup;
  modalPopUp: BsModalRef;
  index: any;
  playlist: any; 
  data=CARD_DATA_PLAYLIST
  public event: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService
    ) { }  

  ngOnInit() {  
    this.playlist=this.data[this.index]
    this.itemForm = this.formBuilder.group({
      playlist: "",
      duration: "",
      description: "",
      song_title: "",
      artist: ""
    })
  }  


  closeModal() {
    console.log('close')
    this.modalPopUp.onHide;
  }
  triggerEvent(item: any) {
    this.event.emit({ data: item});
  }

  // addToPlaylist(item: any) {
  //   this.playlist.push({
  //     name: item.title,
  //     price: item.price,
  //   })
    
  // }
   saveToList(form: any) {
    console.log('cek');
    
    let data = {
      playlist: form.value.playlist,
      description: form.value.description,
      song_title: form.value.song_title,
      duration: form.value.duration,
      artist: form.value.artist
    }
    
    
    this.triggerEvent(data);
    this.modalPopUp.hide();
  }

}
