import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  data = [
    {
      title: "Handwoven Handbag",
      description: "Be hippy and support local craftworks at the same time!",
      price: "20",
      image: "Bag1.jpg"
    },
    {
      title: "Geometric Tote Bag",
      description: "Flaunt your love for geometry like the nerd you are!",
      price: "45",
      image: "Bag2.jpg"
    },
    {
      title: "Chic Backpack",
      description: "Wanna be girly but want to carry many things with you? This bag is for you!",
      price: "80",
      image: "Bag3.jpg"
    }
  ]

  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Data Bag", this.data);
  }

  async presentToast(message: any) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }

  // submit(item, id){
  //   this.item = this.data.findIndex(id)
  //   console.log("Data bag", item);
  //   console.log("Data id", id);
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       item: item 
      
    
  

}
