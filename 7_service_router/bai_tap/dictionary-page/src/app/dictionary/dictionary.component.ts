import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../dictionary.service";

interface IWord {
  word: string;
  mean: string;
}

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.words = this.dictionaryService.getAll();
  }


}
