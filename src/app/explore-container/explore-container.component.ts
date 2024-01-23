import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResortService } from '../services/resort.service';
import { Resort } from '../models/resort.modal';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [IonicModule, CommonModule, HttpClientModule],
  providers: [ResortService],
  standalone: true,
})
export class ExploreContainerComponent implements OnChanges {
  @Input() resorts!: Resort[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resorts']) {
      this.resorts = changes['resorts']?.currentValue;
    }
  }
}
