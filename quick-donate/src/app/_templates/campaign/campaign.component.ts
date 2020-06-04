import { ModalService } from './../../_services/modal.service';
import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/_services/campaign.service';
import { Campaign } from '../../_models/Campaign';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

campaigns: Campaign[];
activeCampaign: Campaign;

  constructor(private campaignService: CampaignService, private messageService: MessageService, private modalService: ModalService) { }

  ngOnInit() {
    this.messageService.clear();
    this.campaignService.getAllCampaigns().subscribe(campaigns => this.campaigns = campaigns);
  }

  showDetails(id: number) {
    document.getElementById('camp-details' + id).removeAttribute('hidden');
    const flag = document.getElementById('showDetails' + id).innerHTML;
    if (flag === 'false') {
      document.getElementById('camp-details' + id).style.display = 'block';
      document.getElementById('showDetails' + id).innerHTML = 'true';
    } else {
      document.getElementById('camp-details' + id).style.display = 'none';
      document.getElementById('showDetails' + id).innerHTML = 'false';
    }
  }

  openModal(id: string, selectedCampaign: Campaign) {
    this.modalService.open(id);
    this.activeCampaign = selectedCampaign;
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.activeCampaign = undefined;
  }

}
