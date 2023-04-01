import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveApiServiceService } from 'src/app/service/move-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MoveApiServiceService,
    private router: ActivatedRoute
  ) {}

  getMovieResult: any;
  getVideoResult: any;
  getCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.getMovieResult = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getCast(id).subscribe((result) => {
      this.getCastResult = result.cast;
    });
  }
}
