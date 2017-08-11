import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Victory Points Counter';
  private data: Observable<number>;

  first: number;
  second: number;
  sum: number;
  first_percent: number;
  second_percent: number;
  left_score: number;
  right_score: number;

  left_result: number;
  right_result: number;


  // countScore(first: number, second: number){
  //     if (isNaN(this.first) || isNaN(this.second)){
  //       alert("Put numbers into inputs.");
        
  //   } else { 
  init(){
    
    setTimeout(function(){
      console.log("Odliczamy 5 sec...");

    this.sum = this.first + this.second;
    this.first_percent = (this.first * 100)/this.sum;
    this.second_percent = 100 - this.first_percent;
    this.left_score = (20 * this.first_percent)/100;
    this.right_score = 20 - this.left_score;
    //zaokraglanie wynikow do liczby calkowitej
    this.left_result = Number(this.left_score.toFixed(0));
    this.right_result = Number(this.right_score.toFixed(0));
    console.log("Wyniki policzone");
    });
    
    
    // if (this.second == NaN){
    //   this.right_result = 0;
    //   }
  
  }
}
