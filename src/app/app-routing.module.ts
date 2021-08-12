import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';



const routes: Routes = [
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'movies-container', component: MoviesContainerComponent },
  { path: '', redirectTo: '/movies-container', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }