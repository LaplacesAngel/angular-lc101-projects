import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.reddit.com/', 'https://www.amazon.com/ref=nav_logo?redirectFromSmile=1']
  constructor() { }

  ngOnInit() {
  }

}
