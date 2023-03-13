import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries']},
      {title: "Tomorrow's Chores", tasks: ['buy a watch', 'go to chonmbi town']},
      {title: "Next Week's Chores", tasks: ["move to Delft", 'meditate', 'run in the morning', 'take nice morning walks']}
   ];

   pets = ['cat', 'dog', 'fish', 'snake'];
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores", "Next week's chores", "Next month's chores"];

   constructor() { }

   ngOnInit() {
   }

}
