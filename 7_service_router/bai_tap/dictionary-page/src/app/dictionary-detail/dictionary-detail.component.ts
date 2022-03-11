import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DictionaryService} from "../dictionary.service";

interface IWord {
  word: string;
  mean: string;
}

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordObj: IWord;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const wordSearch = this.activatedRoute.snapshot.params.word;
    console.log(wordSearch);
    this.wordObj = this.dictionaryService.findByWord(wordSearch);

  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('list');
  }
}
