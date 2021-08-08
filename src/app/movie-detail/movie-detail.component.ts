import { Movie, MovieV2, PagedResults } from '../movie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  public movies?: MovieV2[];

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getMovieCredit();
  }
  getMovieCredit(): void {
    this.movieService.getMovieDetails().subscribe(
      (pagedResults: PagedResults) => {
        // Note: Given we have paged results, do we want to go and get the next page, and the page after that etc?
        // OR: do we want to have a button at the bottom that gets the next page etc?
        console.log(pagedResults.results);
        this.movies = pagedResults.results;
      });
  }
 

}
