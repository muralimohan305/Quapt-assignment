import { CommonModule } from '@angular/common';
import {
  Component,
  EnvironmentInjector,
  OnInit,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ResortService } from '../services/resort.service';
import { Resort } from '../models/resort.modal';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExploreContainerComponent,
  ],
  providers: [ResortService],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsPage implements OnInit {
  resorts: Resort[] = [];
  @ViewChild('map') mapRef!: ElementRef;
  map!: GoogleMap;
  constructor(
    public environmentInjector: EnvironmentInjector,
    private resortService: ResortService
  ) {}

  ngOnInit(): void {
    this.resortService.getResorts().subscribe((resorts) => {
      this.resorts = resorts;
    });
  }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.googleApiKey,
      //  forceCreate:true,
      config: {
        center: { lat: 8.3405, lng: 115.092 },
        zoom: 3,
      },
    });
  }
}
