import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class HttpClientService {
    private _states: Array<any>;
    public imgid: any;
    private productList: Array<any>;
    cartList: Array<any>;
    countryList: Array<any>;
    productAddSubject: Subject<any>;
    productRemoveSubject: Subject<any>;
    constructor(private http: HttpClient) {
        this.cartList = [];
        this.productAddSubject = new Subject<any>();
        this.productRemoveSubject = new Subject<any>();
        this.getCountriesFromApi();
    }

    addProductToCart() {
        return this.productAddSubject.asObservable();
    }
    removeProductFromCart() {
        return this.productRemoveSubject.asObservable();
    }
    registerUserDetails(data: any) {
        return this.http.post("http://localhost:4200/register", data).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }
getCountriesFromApi() {

    return this.http.get('https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/countries.json')



}


getStates() {
    return this.http.get('https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/states.json')

}

states(stateslist, countryCode) {
    console.info('stateslist', stateslist);
    console.log('countryyycode', countryCode);

    if (countryCode) {
        console.log('countryyycode', countryCode);
        return stateslist.filter(x => {
            return x.country_id == countryCode;
        })
    }
    else {
        return stateslist;
    }
}
getProducts() {
    return this.http.get('https://raw.githubusercontent.com/abhhilashkyadari/Snapdeal/master/paintings.json');

}
getInitialProductList() {
    this.http.get('https://raw.githubusercontent.com/abhhilashkyadari/Snapdeal/master/paintings.json')
        .subscribe((x: any) => {

            this.productList = x.products.map(x => {
                x.quantity = 1;
                x.totalprice = 0;
                return x;
            });
        },
            (err) => {
                console.log(err);
            })
}



SelectedProductDetails(img, productList) {
    console.info('img', img);
    console.log('productlist', productList);

    if (img) {
        console.log('countryyycode', img);
        return productList.filter(x => {
            return x.img_id == img;
        })
    }
    else {
        return productList;
    }
}
}

