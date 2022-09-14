import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contract-generator',
  templateUrl: './contract-generator.component.html',
  styleUrls: ['./contract-generator.component.css'],
})
export class ContractGeneratorComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  private ageValueChanges: Subscription;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('whatever');
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: [],
        age: [],
      }),
      address: this.fb.group({
        itemName: [],
        street: [],
        number: [],
        postal: [],
        company: [],
      }),
      colors: this.fb.array(['red', 'green', 'blue']),
    });

    const companyFormControl = this.userForm.get('address.company');

    this.ageValueChanges = this.userForm
      .get('basicInfo.age')
      .valueChanges.subscribe((age) => {
        if (age > 18) {
          companyFormControl.setValidators(Validators.required);
        } else {
          companyFormControl.clearValidators();
        }
        companyFormControl.updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.ageValueChanges?.unsubscribe();
  }
}
