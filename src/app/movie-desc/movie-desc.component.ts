import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie, PagedResults, } from '../movie';
@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.less']
})
export class MovieDescComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieDesc();
  }

  getMovieDesc(): void {
    this.movieService.getMovie(11165).subscribe(
      (themovie: Movie) => {
        console.log(themovie);
      });
  }
}
