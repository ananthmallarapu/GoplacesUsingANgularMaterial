import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchSuggestionService {

   baseUrl1:string='https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
   baseUrl2:string='https://maps.googleapis.com/maps/api/place/autocomplete/json?input='
   placeIdUrl:string="https://maps.googleapis.com/maps/api/place/details/json?placeid=";
   apiKey :string='&key=AIzaSyAHyosU6yZB15D9bNNqTC5UZ49gbZ53tes';
   apiKey1 :string='AIzaSyAHyosU6yZB15D9bNNqTC5UZ49gbZ53tes'
  baseUrl3:string='https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key='
  //YOUR_API_KEY&input=pizza+near%20par

  constructor(private http: Http) { }
  
  searchPlaceId(queryString:String) {
    let _URL = this.placeIdUrl + queryString+this.apiKey;
    return this.http.get(_URL);
  }
  

  search(queryString: string) {
    queryString.trim()
    let _URL = this.baseUrl1 + queryString+this.apiKey;
    return this.http.get(_URL);
}
showsug(queryString:string){
  let a=queryString.split(' ').join('+');
  let _URL = this.baseUrl3 +this.apiKey1+'&input='+a;
  console.log(a);
  return this.http.get(_URL);


}

}

  
