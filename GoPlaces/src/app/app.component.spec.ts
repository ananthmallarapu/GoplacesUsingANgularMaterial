import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search/search.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { DispaycontainerComponent } from './dispaycontainer/dispaycontainer.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TestBed,ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      providers: [
        BrowserModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    

    expect(app).toBeTruthy();
  });
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
xdescribe("only app component",() =>{
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ 
        RouterModule.forRoot([
          {path: '',
          component: DispaycontainerComponent 
      },
          {path: 'results/:id/moredetails',
          component: MoreDetailsComponent },
          {path: 'results/:id/moredetails/:id',
          component: MoreDetailsComponent },
          {path: 'moredetails',
          component: MoreDetailsComponent },
          {path: 'moredetails/:id',
          component: MoreDetailsComponent },
          {path: 'results',
          component: DisplayResultsComponent },
          {path: 'results/:id',
          component: DisplayResultsComponent },
          {path: 'favourites',
          component: FavouritesComponent }
          
    
          
    ]), ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        DispaycontainerComponent,
        MoreDetailsComponent,
        DisplayResultsComponent,
        FavouritesComponent,
        SearchComponent


      ]
    }).compileComponents();
  }));
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    

    expect(app).toBeTruthy();
  });

})