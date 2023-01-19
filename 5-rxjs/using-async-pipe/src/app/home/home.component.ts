import { Component, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  streamsOutput$: Observable<number[]>
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData = [];

  constructor() { }

  ngOnInit() {
    this.startStream();
  }

  startStream() {
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    this.streamsOutput$ = merge(
      streamSource,
      secondStreamSource,
      fastestStreamSource
      ).pipe(
        map(output => {
          console.log(output)
          this.outputStreamData = [...this.outputStreamData, output]
          return this.outputStreamData;
        })
      )
  }
}
