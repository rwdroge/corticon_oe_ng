import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Item } from '../interfaces/item';
@Component({
  selector: 'app-contractline',
  templateUrl: './contractline.component.html',
  styleUrls: ['./contractline.component.css'],
})
export class ContractLineComponent implements OnInit {
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
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  changeItem(e: any) {
    this.item = this.items[e.target.value];
    this.itemName?.setValue(e.target.value['ID'], {
      onlySelf: true,
    });
    console.log(this.item);
  }
  // Access formcontrols getter
  get itemName() {
    return this.form.get('itemName');
  }
}
