import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService : DataService, private router:Router ) { }

  
  newItems = [
    'item',
    'Item 0',
    'Item 1',
    'Item 2',
    'Item 3',
   ]
   activeItems = [
    'Item 4',
   ]
  public allNumbers: number[] = [];
  public allProducts;
  public itemName;
  ngOnInit() {
    for(var i=0;i<this.newItems.length;i++){
      //debugger;
      if (i === 0) { 
        this.itemName = this.newItems[i].split(" ")[0]
        console.log(this.itemName)
        break; 
        
      }
      
    }
    // checking drag and drop
    for (let insertNumbers = 0; insertNumbers <= 100; insertNumbers++) {
      this.allNumbers.push(insertNumbers);
    }

    this.dataService.getAllProducts().subscribe(result =>this.allProducts = result)
  }

  editProductData(pro){
    console.log(pro)
    this.router.navigate(['/products/',pro.id])
  }

  // dropNumber(event: CdkDragDrop<number[]>){
  //   //console.log(event)
  //   moveItemInArray(this.allNumbers, event.previousIndex, event.currentIndex);
  // }

   

  //  dropped(event){
  //    console.log(event)
  //  }

  dropped(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer)
    console.log(event.container)
    console.log(event)
  //   if (event.previousContainer === event.container) {
  //    moveItemInArray(
  //      event.container.data, 
  //       event.previousIndex, 
  //       event.currentIndex
  //    );
  //   } else {
  //     transferArrayItem(
  //      event.previousContainer.data,
  //      event.container.data,
  //      event.previousIndex,
  //      event.currentIndex
  //    );
  //  }
  }
  
}
