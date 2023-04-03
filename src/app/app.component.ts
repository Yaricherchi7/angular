import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  restaurants : any = [
    {
      id: "92fb9513-73ad-5de9-a45c-769f33befcb8",
      restaurantName: "Pots and Ladles",
      companyName: "Zions Bancorporation",
      cuisine: [
        "British Virgin Islands"
      ],
      phone: "+48 91 707 98 15",
      email: "badon@ZionsBancorporation.com",
      geolocation: {
        country: "Bermuda",
        city: "Sioux Falls",
        address: "63843 Leora Circles Apt. 112"
      },
      sideProducts: [
        {
          name: "Table",
          material: "Wooden",
          description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          adjectives: "Luxurious",
          color: "purple"
        }
      ],
      priceRange: [
        [
          "$83.00",
          "$158"
        ]
      ]
    }
  ]


}
