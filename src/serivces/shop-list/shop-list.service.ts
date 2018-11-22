import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from "../../models/item/item.module";

@Injectable()

export class ShopListService{

    private shopListRef = this.db.list<Item>('shop-list');

    constructor(private db:AngularFireDatabase){

    }
    getShopList(){
        return this.shopListRef;
    }
    addItem(item:Item){
        return this.shopListRef.push(item);
    }
    editItem(item:Item){
        return this.shopListRef.update(item.key,item);
    }
    deleteItem(item:Item){
        return this.shopListRef.remove(item.key);

    }
}