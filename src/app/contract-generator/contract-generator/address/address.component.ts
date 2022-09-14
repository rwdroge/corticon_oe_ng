import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ItemService } from '../../../item.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Item } from '../../item';
import { ListItemHarnessFilters } from '@angular/material/list/testing';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;
  item: Item;
  items: Item[] = [];
  constructor(
    private rootFormGroup: FormGroupDirective,
    private itemService: ItemService
  ) {
    this.itemService
      .getItems()
      .subscribe((items: Item[]) => (this.items = items));

    console.log(this.items);
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  changeItem(e: any) {
    console.log(e.target.value);
    this.itemName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get itemName() {
    return this.form.get('itemName');
  }
}
