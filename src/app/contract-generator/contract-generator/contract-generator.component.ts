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
    this.userForm = this.fb.group({
      contract: this.fb.group({
        contractDate: [],
        durationYears: [],
        riskFactor: [],
        totalStartupCosts: [],
        type: [],
        yearlyContractAmount: [],
        yearlyMaintenanceAmount: [],
      }),
      contractline: this.fb.group({
        itemName: [],
        quantity: [],
        price: [],
        yearlyContractAmount: [],
        yearlyMaintenanceAmount: [],
        yearlyRentalAmount: [],
        yearlyRentInclMaintenance: [],
        yearlyRiskSurcharge: [],
        yearlyStartupCosts: [],
      }),
      colors: this.fb.array(['red', 'green', 'blue']),
    });
  }

  ngOnDestroy(): void {
    this.ageValueChanges?.unsubscribe();
  }
}
