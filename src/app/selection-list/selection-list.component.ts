import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {

  listOfItems = [];

  @Output() appParent = new EventEmitter<boolean>();

  constructor() {
    var storage_data = localStorage.getItem('listOfItems');
    this.listOfItems = JSON.parse(storage_data);
  }

  ngOnInit(): void { }

  saveAll() {
    localStorage.setItem('listOfItems', JSON.stringify(this.listOfItems));
  }

  addElement(input) {
    if (input.value) {
      this.listOfItems.push({
        name: input.value,
        active: true
      });
      input.value = '';
      this.appParent.showSuccess('a', 'b');
    }

  }

  toggleClass(item) {
    console.log(item);
    item.active = !item.active;
    console.log(item);
  }
}
