import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList:Array<any>;
  totalCartList:Array<any>;
  price:any;
  constructor(private httpSVC:HttpClientService) {
   
   }
  removeFromCart(item){
    
    if(item.quantity>1){
    item.quantity--;
    console.info('removed from cart................');
    
  }
    else if(item.quantity==1)
    {
      console.info('entered block');
      this.httpSVC.productRemoveSubject.next(item);
      
        this.totalCartList=this.totalCartList.filter(function(x){
          return x.img_id!=item.img_id;

        })
        
    }
   // someArray.remove(function(el) { return el.Name === "Kristian"; });
    console.info('after removing from cart',this.totalCartList);
    localStorage.setItem("cartList",JSON.stringify(this.totalCartList));
  }
  addToCart(item){
    item.quantity++;
    console.info('added fro cart................');
    localStorage.setItem("cartList",JSON.stringify(this.totalCartList));
  }
  ngOnInit() {
    var  cartList=JSON.parse(localStorage.getItem("cartList"));
    
    console.info('%%%%%%%%%%%% cart',cartList);
    this.totalCartList=cartList;
    console.info('%%%%%%%%%dsad%%% cart',this.totalCartList);	
  }

}
