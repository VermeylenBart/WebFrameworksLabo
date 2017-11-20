import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  imageURL: string;

  constructor(){
    this.imageURL = 'https://mdbootstrap.com/img/Photos/Slides/img (' + _.random(1,152) + ').jpg';

    setInterval(() => {
      this.imageURL = 'https://mdbootstrap.com/img/Photos/Slides/img (' + _.random(1,152) + ').jpg';
    },5000)
  }
}
