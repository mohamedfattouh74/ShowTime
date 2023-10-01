import { Component ,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieApiServiceService){}


  searchResult:any;

  ngOnInit(): void {
    

  }
  submitForm(f: NgForm){
    console.log(f);
    this.service.getSearchMovie(f.value).subscribe(result=>{
      console.log(result,'searchmovie##')
      this.searchResult=result.results;
    })
  }

}
