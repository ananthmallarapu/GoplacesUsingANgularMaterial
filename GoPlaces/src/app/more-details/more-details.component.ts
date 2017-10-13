import { SharedFavouriteService } from './../shared-favourite.service';
import { Http } from '@angular/http';
import { SearchSuggestionService } from './../search-suggestion.service';

import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { Location }                 from '@angular/common'

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  displayResultsArray:any[];
  isMarkedFav:boolean=false;
  results:any[];

  constructor(private http:Http,
  private route:ActivatedRoute,
private searchService:SearchSuggestionService,
private router:Router,
private favservice:SharedFavouriteService) { }

goToFav(userComments:string) {
  console.log(userComments);
   let favObj={
    "placeName":this.displayResultsArray['result'].name,
    "userComments":userComments,
    "id":this.displayResultsArray['result'].place_id
  }
 /* this.route.paramMap.subscribe( (params) =>{ this.favservice.favSet.add(params.get('id'))
  console.log(this.favservice.favSet.values())
this.isMarkedFav=  this.favservice.favSet.has(params.get('id'))*/
localStorage.setItem(this.displayResultsArray['result'].place_id,'true');
//console.log(this.isMarkedFav)});
  this.isMarkedFav=true;
  console.log(favObj);
  this.favservice.postFav(favObj).subscribe(res =>alert("posted succesfully"),error => alert("cant post"))
  //this.router.navigate(['/favourites']);
 
  
  
}


  ngOnInit() {
      
    this.route.paramMap.switchMap((params: ParamMap) => this.searchService.
    searchPlaceId(params.get('id'))).subscribe(response => {this.displayResultsArray = response.json();
      console.log(this.displayResultsArray['result']);
      if(localStorage.getItem(this.displayResultsArray['result'].place_id)!=null) {
        
      this.isMarkedFav=true;
      }
    });
    
      

     
      
     
  }
 


}
