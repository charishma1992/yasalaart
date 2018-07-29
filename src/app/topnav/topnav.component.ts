import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClientService } from '../providers/http.provider';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
cartLists:Array<any>;
image:any;
imgList:Array<any>;
routes:any;

  constructor(private route:Router,private httpSVC:HttpClientService) { 
    this.cartLists=[];
       this.routes={
      products:'products',
      home:'home',
      signup:'signup'
                }
       this.observerAddProduct();
       this.observerRemoveAddProduct();        
  }
count=0;
  observerAddProduct(){
    this.httpSVC.addProductToCart().subscribe((result)=>{
      console.info('adding product to cart');
      this.count++;
    },
    (err)=>{

    })
  }
 observerRemoveAddProduct(){
    this.httpSVC.removeProductFromCart().subscribe((result)=>{
        console.info('removing product from cart');
        this.count--;
    },
  (err)=>{

  })
 }
  loadRoute(path){
    this.route.navigateByUrl(path);
}
  ngOnInit() {
    
    var  cartList=JSON.parse(localStorage.getItem("cartList"));
    this.cartLists=cartList;
    console.info('shreyansh',this.cartLists);
    if(cartList.length==null){
     this.count=0;
    }
else{
  this.count=this.cartLists.length;
}
  }

}
