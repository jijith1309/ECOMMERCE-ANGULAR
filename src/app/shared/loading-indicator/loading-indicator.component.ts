import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Subject<{loading: boolean, hasError: boolean, hasMsg: string}>;
  
  constructor(private utilityService:UtilityService) { 
    this.loading$=this.utilityService.loading;
  }

  ngOnInit() {
  }

}
