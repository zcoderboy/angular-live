import { Component, OnInit, Input } from '@angular/core';
import Prevision from '../../entities/prevision'

@Component({
  selector: 'app-prevision-detail',
  templateUrl: './prevision-detail.component.html',
  styleUrls: ['./prevision-detail.component.css']
})
export class PrevisionDetailComponent implements OnInit {

  @Input() prevision: Prevision;
  
  constructor() { }

  ngOnInit(): void {
  }

}
