import { Http } from '@angular/http';
import { SearchSuggestionService } from './../search-suggestion.service';
import { SlicePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { RouterOutlet } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
   displayResultsArray:object[];
   Url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=";
   apiKey = "&key=AIzaSyCDD25WB0LQFcU5Uim3szYpHiWzHVd3pNg";
   

  constructor(private route:ActivatedRoute
    ,private http:Http,
  private searchService:SearchSuggestionService) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.searchService.search(params.get('id')))
    .subscribe(response => {this.displayResultsArray = response.json()
      console.log(this.displayResultsArray['results']);},
    error =>{alert("enable cross orgin resource sharing"+error)});
    
  }
 

}
