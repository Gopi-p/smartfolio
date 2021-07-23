import { Component, OnDestroy, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { SwiperComponent } from 'swiper/angular';
import SwiperCore,{ Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'smartfolio';
  arrow = true;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: undefined) {
    this.scrWidth = window.innerWidth;
    if(this.scrWidth <= 600){
      this.arrow = false;
    }
    else{
      this.arrow = true;
    }
  }


  constructor() {
    this.getScreenSize();
  }


  ngOnInit(){}
  ngOnDestroy(){}
}
