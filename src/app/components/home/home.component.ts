import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TsaksService } from 'src/app/shared/services/tsaks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public _TsaksService: TsaksService ,  private _title:Title) {  {this._title.setTitle('Home') }}

  delete(i:number){
    this._TsaksService.delete(i)
  }
 

}
