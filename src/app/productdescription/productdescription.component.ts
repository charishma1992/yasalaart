import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';



@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {
  productList:Array<any>;
  filteredproductList:Array<any>;
  totalCartList:Array<any>;
  cartList:Array<any>
  img:any;
  message:any;
  price:any;
  constructor(private httpSVC:HttpClientService) {  
    this.message="";
    var  cartList=JSON.parse(localStorage.getItem("cartList"));
    if(cartList!=null)
    {
      this.totalCartList=cartList;
    }else{
      this.totalCartList=[];

    }
    
    
    var imgID=localStorage.getItem('imgID');
     console.info("in display product ",imgID);
    
    this.img=imgID;
    console.info("in display product ",this.img);
     
}
addToCart(item){
  item.quantity++;
  
}
addProduct(item){
  let check=0;
 // this.httpSVC.productAddSubject.next(item);
  for(let i=0;i<this.totalCartList.length;i++){
if(item.img_id==this.totalCartList[i].img_id){
  this.message="This painting is already added to cart";
   check=1;
}
  }
  

  
  if(check==0){
    if(item.quantity>0){
      item.totalprice=item.quantity*2;
      

      console.info('price:',this.price);
    this.httpSVC.productAddSubject.next(item);
  this.totalCartList.push(item);
  localStorage.setItem("cartList",JSON.stringify(this.totalCartList));
  }
  else{
    this.message="Quantity should not be '0'";
  }
}
  console.info('totalcartlist in productsdescription page',this.totalCartList);
} 
removeFromCart(item){
  if(item.quantity>0){
    item.quantity--;

  }
  
}    
shreyansh(){
  var  prodList=JSON.parse(localStorage.getItem("prodList"));
  
  console.info("------prodlist:",prodList);
  this.filteredproductList= this.httpSVC.SelectedProductDetails(this.img,prodList);
  console.info('filtered product list:',this.filteredproductList);
  //this.httpSVC.cartList=prodList;
  } 

  ngOnInit() {
this.shreyansh();

  }

}
