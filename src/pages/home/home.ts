import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShopListService } from '../../serivces/shop-list/shop-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.module';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shop$: Observable<Item[]>;
  constructor(public navCtrl: NavController, private shop:ShopListService) {
    this.shop$ = this.shop
      .getShopList() //get list db
      .snapshotChanges() //get key and value
      .map(
        changes=>{
          return changes.map(c=>({
            key:c.payload.key, ...c.payload.val()
          }));
        }
      );
  }

}
