import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TsaksService } from 'src/app/shared/services/tsaks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
   @ViewChild('alert')
  alertElement!: ElementRef;
    constructor(private _TsaksService: TsaksService, private _Router: Router, private _Renderer2: Renderer2 ,  private _title:Title) {  {this._title.setTitle('Task') }}
  addTask(title: any, description: any) {
    if (title.value!=0 ) {
         this._TsaksService.addTask(title.value, description.value);
          this._Router.navigate(['/'])
    } else {
      this.showAlert()
    }
   
  }
  
  showAlert() {
this._Renderer2.removeClass(this.alertElement.nativeElement, 'd-none');
  }
}
