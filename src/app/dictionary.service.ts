import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'}
  ];

  constructor() { }
  search(word: string): string {
    // nếu không nhập thì trả về chuỗi rỗng
    if (!word){
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase()  );
    // tạo 1 hằng w và gán nó bằng từ được nhập vào
    // từ được nhập vào gán nó thành key của 1 item có kiểu dữ liệu là IWord
    // ( nhớ cho ó toLowerCase trước khi gán)
    if (w){
      return w.meaning;
    }
    return 'Not found';
  }
}
