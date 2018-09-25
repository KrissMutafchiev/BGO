import { Component, OnInit, Inject } from '@angular/core';
import { Observable, Subject, throwError} from 'rxjs';

import { Validators, FormBuilder, FormGroup ,FormControl } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { GetDataService } from '../get-data.service';

import { Item } from '../model';
import { EditService } from '../edit.service';

import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
      sort: [],
      skip: 0,
      take: 10
  };
  public formGroup: FormGroup;

  private editService: EditService;
  private editedRowIndex: number;

  constructor(@Inject(EditService) editServiceFactory: any) {
      this.editService = editServiceFactory();
  }

  public ngOnInit(): void {
      this.view = this.editService.pipe(map(data => process(data, this.gridState)));

      this.editService.read();
  }

  public onStateChange(state: State) {
      this.gridState = state;

      this.editService.read();
  }


  public editHandler({sender, rowIndex, dataItem}) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
          'ProductID': new FormControl(dataItem.ProductID),
          'ProductName': new FormControl(dataItem.ProductName, Validators.required),
      });

      this.editedRowIndex = rowIndex;

      sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({sender, rowIndex}) {
      this.closeEditor(sender, rowIndex);
  }

  public saveHandler({sender, rowIndex, formGroup, isNew}) {
      const item: Item = formGroup.value;

      this.editService.save(item, isNew);

      sender.closeRow(rowIndex);
  }

  public removeHandler({dataItem}) {
      this.editService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
      grid.closeRow(rowIndex);
      this.editedRowIndex = undefined;
      this.formGroup = undefined;
  }

}
