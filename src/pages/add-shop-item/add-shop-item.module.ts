import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShopItemPage } from './add-shop-item';

@NgModule({
  declarations: [
    AddShopItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShopItemPage),
  ],
})
export class AddShopItemPageModule {}
