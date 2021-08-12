import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieV2, PagedResults } from '../movie';
@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {

  constructor() { }

  movie!: MovieV2;


  ngOnInit() {


  }
 
}
