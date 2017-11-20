import { Component } from '@angular/core';

@Component({
  selector: 'app-delijn',
  templateUrl: './delijn.component.html'
})
export class DelijnComponent {
  vertrekken: ILijn[] = 
  [
    {
        bestemming:"Antwerpen",
        lijnNummer: 322,
        vertrekTijd: new Date(2017,10,16,15,10)
    },
    {
        bestemming:"Brussel",
        lijnNummer: 546,
        vertrekTijd: new Date(2017,10,16,15,30)
    },
    {
        bestemming:"Charleroi",
        lijnNummer: 941,
        vertrekTijd: new Date(2017,10,16,15,32)
    },
  ]
}

interface ILijn{
  bestemming: string;
  lijnNummer: number;
  vertrekTijd: Date;
}
