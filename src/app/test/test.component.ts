import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Test Page</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
    <h2>coffee2$ | async | json</h2>
    {{coffee2$ | async | json}}
</ion-content>
  `
})
export class TestPage implements OnInit {
  public folder: string;

  coffeeCollection: AngularFirestoreCollection<any>;

  coffee2$: Observable<any>;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.coffeeCollection = this.afs.collection('coffeeshop');
  }

  ngOnInit() {
    this.loadCoffeshop();
  }

  private loadCoffeshop() {
    this.coffee2$ = this.coffeeCollection.doc('TsqbkxCsmS8J6B85MEMG').valueChanges();
  }

}
