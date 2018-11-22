import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.module';
import { ShopListService } from '../../serivces/shop-list/shop-list.service';
import { ToastService } from '../../serivces/toast/toast.service';

/**
 * Generated class for the AddShopItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shop-item',
  templateUrl: 'add-shop-item.html',
})
export class AddShopItemPage {

  item: Item = {
    name : '',
    quantity:undefined,
    price:undefined
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private shop:ShopListService, private toast:ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShopItemPage');
  }

  addItem(item:Item){
    this.shop.addItem(item).then(ref=>{
      // console.log(ref.key);
      this.toast.show(`${item.name} added!`);
      this.navCtrl.setRoot('HomePage',{key:ref.key});
    })
  }
}
