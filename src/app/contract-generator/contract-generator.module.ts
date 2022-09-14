import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractGeneratorComponent } from './contract-generator/contract-generator.component';
import { ContractLineComponent } from './contract-generator/contractline/contractline.component';
import { ColorsComponent } from './contract-generator/colors/colors.component';
import { ContractComponent } from './contract-generator/contract/contract.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ItemService } from './contract-generator/services/item.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  providers: [ItemService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    ContractGeneratorComponent,
    ContractLineComponent,
    ContractComponent,
    ColorsComponent,
  ],
  exports: [ContractGeneratorComponent],
})
export class ContractGeneratorModule {}
