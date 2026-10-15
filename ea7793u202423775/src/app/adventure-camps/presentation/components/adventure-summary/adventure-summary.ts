import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AdventureCamp} from '../../../domain/model/adventure-camp';

@Component({

  imports: [MatCardModule],
  selector: 'app-adventure-summary',
  styleUrl: './adventure-summary.css',
  templateUrl: './adventure-summary.html',
})
export class AdventureSummary {
  camp = input.required<AdventureCamp>();
}
