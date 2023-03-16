import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   butonState: boolean[] = [true, true, true] 

   constructor() { }

   ngOnInit() { }


   resetButtons(){
      for (let i = 0; i < this.butonState.length; i++) {
         this.butonState[i] = true;
      }
   }

   onClick(color){
      if (color === 'gold') {this.inactiveGold = !this.inactiveGold;}
      if (color === 'silver') {this.inactiveSilver = true;}
      if (color === 'copper') {this.inactiveCopper = true;}
   }

   onClickAll(){
      this.inactiveGold = false;
      this.inactiveSilver = false;
      this.inactiveCopper = false;
   }


   clicks = 0;

   onClick1(stuff) {
         this.clicks += 1;
         console.log("inactive started as false and is now",stuff,"after",this.clicks,"clicks");
   }

   
}
