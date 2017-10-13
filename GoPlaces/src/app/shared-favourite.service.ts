import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SharedFavouriteService {
  favUrl:string="http://localhost:3000/favourites";
  favSet=[];
  

  constructor(private http:Http) { }
  postFav(favObj:object){
    
    return(this.http.post(this.favUrl,favObj));

  }
  putFav(item,userComments){
    
    console.log(String(item.id));
    console.log(userComments);
    return(this.http.patch(this.favUrl+'/'+String(item.id),
    userComments));
   

  }
  getFav(){
    return(this.http.get(this.favUrl))

  }
  deleteFav(item){
    console.log(String(item.id));
    localStorage.removeItem(item.id);
    return(this.http.delete(this.favUrl+'/'+String(item.id)));

    
  }


}
