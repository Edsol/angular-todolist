import { Component, ViewChild } from '@angular/core';
import { SelectionListComponent } from '../app/selection-list/selection-list.component'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(SelectionListComponent) childcomp: SelectionListComponent;

  constructor(private toastr: ToastrService) { }

  showSuccess(message, title) {
    this.toastr.success(message, title)
  }
}