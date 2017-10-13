import { Router } from '@angular/router';
import { SharedFavouriteService } from './../shared-favourite.service';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
favArray=[];
putitem;
resultUpdated;
rerender=false;
  constructor(private fav :SharedFavouriteService,
    private cdRef:ChangeDetectorRef
  ) { }

  doRerender() {
    this.rerender = true;
    this.cdRef.detectChanges();
    this.rerender = false;
  }
  getResult(result){
    this.putitem=result;
    console.log(this.putitem);
  }

  deleteFav(item){
    this.fav.deleteFav(item).subscribe(() =>this.favArray= this.favArray.filter( f => f.id !==item.id))

  }
  putFav(userCommentspar){
    let userCommentsobj={
      userComments:userCommentspar
    };
  
    this.fav.putFav(this.putitem,userCommentsobj).subscribe((res) =>{
      this.resultUpdated=res.json();
      //console.log(this.resultUpdated);
      //console.log(userCommentsobj);
      this.favArray.forEach(
        
        (element) => { 
          console.log("parsing the array");
          if(this.resultUpdated.id===element.id){
            element.userComments=this.resultUpdated.userComments
          }

        });
    
    
        
        
      
      
    });
  
    
    
      
   
    
  }

  ngOnInit() {
    this.fav.getFav().subscribe((res) =>{this.favArray=res.json()
    console.log(this.favArray)})

  

  }

}
