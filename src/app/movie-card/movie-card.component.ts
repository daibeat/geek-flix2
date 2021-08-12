import { Movie, PagedResults } from '../movie';
import { MovieService } from '../movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})

export class MovieCardComponent implements OnInit {
  public movie!: Movie[];

  constructor(private movieService: MovieService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(
      (pagedResults: PagedResults) => {
        // Note: Given we have paged results, do we want to go and get the next page, and the page after that etc?
        // OR: do we want to have a button at the bottom that gets the next page etc?
        console.log(pagedResults.results);
        this.movie = pagedResults.results;
      });
  }

}



