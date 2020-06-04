import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/_services/campaign.service';
import { FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { Campaign } from 'src/app/_models/Campaign';
import { Audience } from 'src/app/_models/Audience';
import { ITEMCATEGORY } from '../../_models/sampledata';
import { AUDIENCE } from '../../_models/sampledata';
import { ItemCategory } from 'src/app/_models/ItemCategory';


@Component({
  selector: 'app-campaign',
  templateUrl: './postcampaign.component.html',
  styleUrls: ['./postcampaign.component.css']
})
export class PostCampaignComponent implements OnInit {
  postCampaign: FormGroup;
  campaign: Campaign;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;

  itemcategories = ITEMCATEGORY;
  audienceList = AUDIENCE;
  settings: any = {};

  constructor(private campaignService: CampaignService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };

    this.postCampaign = this.formBuilder.group({
      title: [''],
      description: [''],
      giftCategories: [],
      audience: [],
      giftLimit: [''],
      startDate: [''],
      endDate: ['']
    });

  }

  createCampaign() {
    this.campaign = new Campaign(this.postCampaign.value);
    this.campaignService.createCampaign(this.campaign)
      .subscribe(data => {

        this.postCampaign.reset();
        this.postCampaign.controls.giftCategories.reset();
        this.postCampaign.controls.audience.reset();

      })
      ;


  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }

  onAudienceSelect(audience: any) {
    console.log('onAudienceSelect', audience);
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

}
