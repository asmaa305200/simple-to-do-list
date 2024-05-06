import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TsaksService } from 'src/app/shared/services/tsaks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{
  taskId: any;
  taskDetails: any;
  constructor(private _TsaksService: TsaksService, private _ActivatedRoute: ActivatedRoute, private _Router: Router, private _title: Title)
  {this._title.setTitle('Task Details') }
  ngOnInit(): void {
    this.taskId =this._ActivatedRoute.snapshot.paramMap.get('id');
    this.taskDetails = this._TsaksService.task[this.taskId];
  }
  Cancel(): void{
    this._Router.navigate(['/']);
  }
  update(): void{
    this._TsaksService.update(this.taskId , this.taskDetails)
    this._Router.navigate(['/']);
  }
  Delete(): void{
        this._TsaksService.delete(this.taskId);
        this._Router.navigate(['/']);
  }

}
