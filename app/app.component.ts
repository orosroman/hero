import { Component } from '@angular/core';

export class Hero {
    constructor (public id: number,
                 public name: string) {}
};

let heros: Hero[] = [
    new Hero(1, 'hero1'),
    new Hero(1, 'Hero2'),
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id: </label>{{hero.id}}
    </div>
    <div>
        <label>name: </label><input  [(ngModel)] = "hero.name" placeholder="name">
    </div>
    <ul>
        <li *ngFor='let hero of heros'>{{hero.name}}</li>
    </ul>
    `,
}) 

export class AppComponent  {
    public title = 'Tour of Heroes';
    
    public heros = heros;
    
    public hero: Hero = {
        id: 1,
        name: 'herooooo'
    };
    
}
