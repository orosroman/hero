import { Component } from '@angular/core';

import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

let HEROES: Hero[] = [
    new Hero(11, "Mr. Nice"),
    new Hero(12, "Narco"),
    new Hero (13, "Bombasto"),
    new Hero (14, "Celeritas"),
    new Hero (15, "Magneta"),
    new Hero (16, "RubberMan"),
    new Hero (17, "Dynama"),
    new Hero (18, "Dr IQ"),
    new Hero (19, "Magma"),
    new Hero (20, "Tornado")
];

@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  styleUrls: [
        "./app/app.component.css",
  ]
})

export class AppComponent  {
    public title = 'Tour of Heroes';
    
    public heros = HEROES;
    
    public selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }  
}
  