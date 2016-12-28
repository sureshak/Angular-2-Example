import { Component } from '@angular/core';
import { Utilities } from './CoolApps';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent {
  title ='Suresh AK';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }

  public callExternalClass(): void {
  	let util : Utilities  = new Utilities();
  	util.myMethod();
  }
}
 
