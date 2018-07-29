import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image:any;
  imgList:Array<any>;
  message:any;
  textIndex:any;
  message1:any;
  message2:any;
  constructor() {
    this.message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat,leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis"; 
    this.message1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat,leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis"; 
    this.message2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat,leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis"; 
this.imgList=[
  {
    image:'assets/Paintings/20140618_160233-1.jpg',
    imageCaption:'telangana Painting'
  },
  {
    image:'assets/Paintings/20150613_093514.jpg',
    imageCaption:'telangana Painting'
  },
  {
    image:'assets/Paintings/20150609_155729-1.jpg',
    imageCaption:'Lord krishna  with gopikas painting'
  },
  {
    image:'assets/Paintings/20180312_182515-2.jpg',
    imageCaption:'telangana Painting'
  }

];
this.textIndex={
  startIndex:0,
  endIndex:80,
  endIndex1:80,
  endIndex2:80 
}
   }
readMore(){
  
  this.textIndex.endIndex +=800;
 
}
readMore1(){
 
  this.textIndex.endIndex1 +=800;

}
readMore2(){
  console.info("entered");
 //let  count=0;
//if(count){
 // console.info('count in if',count);
   // this.textIndex.endIndex +=80;
    //count--;
   // console.info('count in if222',count);
//}
//else{
 // console.info('count in else',count);
  this.textIndex.endIndex2 +=800;
 // count++;
  //console.info('count in else222',count);
//} 
}
  ngOnInit() {
  }

}
