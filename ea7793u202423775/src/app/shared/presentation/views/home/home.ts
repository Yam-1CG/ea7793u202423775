import {Component, inject, OnInit} from '@angular/core';
import { AdventureCampsStore} from "../../../../adventure-camps/application/adenture-camps-store";
import { AdventureSummary } from "../../../../adventure-camps/presentation/components/adventure-summary/adventure-summary";
@Component({
  imports: [AdventureSummary],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  protected store= inject(AdventureCampsStore);
  ngOnInit(): void {
    this.store.loadCamps();
  }
}
