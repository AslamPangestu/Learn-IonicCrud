import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.module';
import { ShopListService } from '../../serivces/shop-list/shop-list.service';
import { ToastService } from '../../serivces/toast/toast.service';

/**
 * Generated class for the EditShopItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shop-item',
  templateUrl: 'edit-shop-item.html',
})
export class EditShopItemPage {

  item: Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, private shop : ShopListService, private toast:ToastService) {
  }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad EditShopItemPage');
  //   // console.log(this.navParams.get('item'));
  // }

  ionViewWillLoad(){
    this.item = this.navParams.get('item');
  }

  saveItem(item:Item){
    this.shop.editItem(item)
    .then(()=>{
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    })
  }
}
