import { Injectable } from '@angular/core';
// @ts-ignore
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: IWord[] =
    [{word: 'Hello', mean: 'Xin chao'},
    {word: 'Goodbye', mean: 'Tam biet'},
    {word: 'Like', mean: 'Thich'},
    {word: 'Nice', mean: 'Dep'},
  ];

  getAll() {
    return this.words;
  }
  findByWord(word: string){
    return this.words.find(wordObj => wordObj.word === word);
  }
  constructor() { }
}
