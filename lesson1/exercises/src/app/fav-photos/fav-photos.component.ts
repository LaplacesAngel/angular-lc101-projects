import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'The rockinest photos section EVER';
  image1 = 'https://media2.giphy.com/media/yk5PJiIfFSgUM/giphy.gif';
  image2 = 'https://www.denofgeek.com/wp-content/uploads/2021/12/Arwen-saying-come-and-claim-him-in-Fellowship-of-the-Ring.png?resize=768%2C432';
  image3 = 'https://i.ytimg.com/vi/7w0A0V9ZTJg/maxresdefault.jpg';

  constructor() { }

  ngOnInit() {
  }

}