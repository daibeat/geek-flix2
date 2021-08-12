import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from "@angular/router";
import { Movie, } from '../movie';
@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.less']
})
export class MovieDescComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {}
}
