import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', vorname: 'Gemein', email: 'gemein.nice@mail.de' },
      { id: 13, name: 'Bombasto', vorname: 'Großartig', email: 'g.bombasto@gmail.com' },
      { id: 14, name: 'Celeritas', vorname: 'Langsamas', email: 'lang.cel@yahoo.com' },
      { id: 15, name: 'Magneta', vorname: 'Kunststoff', email: 'magkun@abc.de' },
      { id: 16, name: 'RubberMan', vorname: 'Starr', email: 'starr@web.de' },
      { id: 17, name: 'Dynama', vorname: 'Statica', email: 'dynama@gmail.de' },
      { id: 18, name: 'Dr. IQ', vorname: '75', email: 'iq75@web.de' },
      { id: 19, name: 'Magma', vorname: 'Vereist', email: 'V.magma@gmail.com' },
      { id: 20, name: 'Tornado', vorname: 'Brise', email: 'br.tor@yahoo.de' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
