import { Component } from '@angular/core';
import PrevisionService from './services/prevision.service'
import Prevision from './entities/prevision';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  previsions: Prevision[]
  previsionService: PrevisionService

  constructor(private http: HttpClient){
    this.previsionService = new PrevisionService(http)
    this.showPrevisions()
  }
  
  showPrevisions(){
    this.previsionService.getPrevisions().subscribe((previsions)=>{
      this.previsions = previsions
    })
  }
}
