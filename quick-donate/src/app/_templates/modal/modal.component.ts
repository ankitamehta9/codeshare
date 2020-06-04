import { ModalService } from './../../_services/modal.service';
import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;
  isActive: boolean;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
    this.isActive = false;
  }

  ngOnInit(): void {
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // close modal on background click
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'qd-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
  }

  // open modal
  open(): void {
    this.isActive = true;
    document.getElementById('overlay').style.display = 'block';
  }

  // close modal
  close(): void {
    this.isActive = false;
    document.getElementById('overlay').style.display = 'none';
  }

}
