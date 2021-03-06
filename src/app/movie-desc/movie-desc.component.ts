import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie, PagedResults, } from '../movie';
@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.less']
})
export class MovieDescComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieDesc(this.route.snapshot.paramMap.get('id'));
  }

  getMovieDesc(id: any): void {
    this.movieService.getMovie(id).subscribe(
      (themovie: Movie) => {
        this.movie = themovie
        console.log (themovie);
      });
  }
}
