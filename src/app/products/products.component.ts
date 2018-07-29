import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  
  catogeryList:Array<any>;
selectedProductDetailsList:Array<any>;
  img:any;
  product:any;
  productList:Array<any>;
  productDesList:Array<any>;
   catogeryDetails:any;
   priceDetails:any;
  _catlogList:Array<any>;
  
  constructor(private httpSVC:HttpClientService) {
    this.catogeryDetails={
        catogery_id:'',
        traditional:'traditional',
        Women:'women',
        VillageMen:'Men',
        Farming:'farming',
        Festivals:'Festivals',
        ALL:'All'

    }
   
    console.info('b4 loading',this._catlogList);
    this.priceDetails={
      high:'high',
      low:'low',
      medium:'medium'
    }
    var  cartList=JSON.parse(localStorage.getItem("cartList"));
    console.info('cartlist in products page',cartList);
      this.httpSVC.getProducts()
      .subscribe((x:any) => {
        
        this.productList = x.products.map(x=>{
          x.quantity=1;
          x.totalprice=0;
          return x;
        });
        
      },
    (err)=>{
      console.log(err);
    })

   // this._catlogList=this.httpSVC.getInitialProductList().su;
     
    console.info('b4 loading',this.productList);
    
    
    
    this.catogeryList=
          [
            {id:'All', name:'ALL'},
          {id:'Festivals', name:'Festivals'},
          {id:'Men', name:'Village Men'},
          {id:'women', name:'Women'},
          {id:'traditional', name:'Traditional'},
          {id:'farming', name:'Farming'},
          ];
    
  }
  open() {
    document.getElementById("mySidebar").style.display = "block";
}
 close() {
    document.getElementById("mySidebar").style.display = "none";
}

  fetchproducts(catogery_id){
   
      if (catogery_id!='All') {
        console.log('catogery_id',catogery_id);
        return this.productList.filter(x => {
            return x.catogery == catogery_id;
        })
    }
    else {
        return this.productList;
    }
  }

  chooseCatogery(catogery_id){
   // console.info('cafaf',this.catogery);
    console.info('catory',catogery_id);
    this._catlogList=this.fetchproducts(catogery_id);
    console.log(this._catlogList);
    }
//fetchInRangeProducts(range){
  //console.info('Range',range);
    //  console.info('catogerylist---',this._catlogList);
      //return this._catlogList.filter(x => {
        //return x.price >='1000000';
//}
  //  choosePrice(range){
    //  console.info('Range',range);
     //this._catlogList=this.fetchInRangeProducts(range);

//})
 //   }
    
  
fetchProductDetails(img){
  console.info("image ID:",img);
  localStorage.setItem('imgID',img);
  console.info('productList:',this.productList);
  localStorage.setItem("prodList",JSON.stringify(this.productList));
  console.info("---------after setting var productID",this.productList);

 

}



  ngOnInit() {
    var  cartList=JSON.parse(localStorage.getItem("cartList"));
    console.info('cartlist in products page',cartList);
this.httpSVC.getProducts().subscribe((x:any)=>{
  this._catlogList = x.products.map(x=>{
    x.quantity=1;
    x.totalprice=0;
    return x;
  });
  
},
(err)=>{
console.log(err);
})
  }
  
  

}
