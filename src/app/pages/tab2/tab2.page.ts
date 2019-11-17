import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

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

  async presentToast(message: any) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }

}
