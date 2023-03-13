import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9];
   prepWork = [];

   targetImage = 'https://www.theonering.net/torwp/wp-content/uploads/2021/03/young-gollum.jpg';

   constructor() { }

   ngOnInit() {
   }

}
