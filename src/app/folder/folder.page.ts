import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  coffeeCollection: AngularFirestoreCollection<any>;

  coffee$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private cd: ChangeDetectorRef,
  ) {
    this.coffeeCollection = this.afs.collection('coffeeshop');
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadCoffeshop();
  }

  private loadCoffeshop() {
    this.coffee$ = this.coffeeCollection.doc('TsqbkxCsmS8J6B85MEMG')
      .get()
      .pipe(
        map((coffee) => {
          return coffee.data();
        }),
        tap(() => this.cd.markForCheck()),
      );
  }

}
