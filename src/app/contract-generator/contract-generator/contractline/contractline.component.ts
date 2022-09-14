import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Item } from '../interfaces/item';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-contractline',
  templateUrl: './contractline.component.html',
  styleUrls: ['./contractline.component.css'],
})
export class ContractLineComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;
  selectedItem: any;
  item: any;
  items: Item[] = [];
  purchasePrice: number;
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
    this.form.get('quantity').setValue(1);
    this.onChanges();

  }

  onChanges() {
    this.form.valueChanges.subscribe((val) => {
      this.selectedItem = val.item;
      console.log(this.selectedItem.ID);
      this.form.get('price').setValue(this.selectedItem.PURCHASEPRICE * val.quantity, {
        onlySelf: true,
      });
    });
  }

  changeItem(e: any) {
    console.log(e.target.value);

    this.form.get('price').setValue(e.target.value, {
      onlySelf: true,
    });
    /* this.itemName?.setValue(e.target.value, {
      onlySelf: true,
    });
*/
  }
  // Access formcontrols getter
  get itemName() {
    return this.form.get('itemName');
  }
}
