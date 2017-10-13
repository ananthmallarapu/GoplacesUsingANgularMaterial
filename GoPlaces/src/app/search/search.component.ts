import { SearchSuggestionService } from './../search-suggestion.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import{Router} from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  results: any[] = [];
  resultssug: any[] = [];
  queryField: FormControl = new FormControl();
  constructor(
    private router:Router ,
    private searchService: SearchSuggestionService) { }
  
  onSubmitSearch(value:string){
    this.queryField.setValue(value);
    console.log(value);
    this.router.navigate(['/results',value]);
  

    
    /*this.searchService.search(value)
    .subscribe(response => {this.results=response.json().results;
    console.log(this.results)});*/
  }

  ngOnInit() {
    this.queryField.valueChanges
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((query) =>  this.searchService.showsug(query)).
    subscribe(response => {this.resultssug=response.json();
      console.log(this.resultssug);
    if(this.resultssug["status"]==="OVER_QUERY_LIMIT")
    alert("limit exceeded")});

    
    }
  }
  



