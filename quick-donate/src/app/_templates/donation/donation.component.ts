import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { Donation } from '../../_models/Donation';
import { DonationService } from 'src/app/_services/donation.service';
import { Item } from 'src/app/_models/Item';
import { Campaign } from 'src/app/_models/Campaign';
import { ModalService } from 'src/app/_services/modal.service';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donateForm: FormGroup;
  donation: Donation;
  @Input() activeCampaign: Campaign;
  disabled = false;
  gifts: Item[];
  selectedItems: Item[];
  giftsettings: any = {};
  ShowFilter = false;
  limitSelection = false;
  


  constructor(private donationService: DonationService, private formBuilder: FormBuilder, private modalService: ModalService) {
   }

  ngOnInit() {
    this.gifts = this.activeCampaign.giftCategories;

    this.selectedItems = [
      //{ id: 11, code: 'C11', name: 'Clothes', desc: 'Clothes' },
      //{ id: 21, code: 'C21', name: 'Food', desc: 'Food' }
    ];

    this.giftsettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };

    this.donateForm = this.formBuilder.group({
      description: [''],
      gifts: [this.gifts],
      giftsReceived: ['']
    });
  }

  donate(){
    this.donation = new Donation(this.donateForm.value);
    console.log(this.donation);
    this.donationService.donate(this.donation)
      .subscribe(res => this.closeModal('campaignModal'))
      ;
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
