import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoveApiServiceService } from 'src/app/service/move-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private service: MoveApiServiceService) {}
  ngOnInit(): void {}
  searchResult: any;
  searchForm = new FormGroup({
    moviename: new FormControl(null),
  });

  submitForm() {
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResult = result.results;
    });
  }
}
