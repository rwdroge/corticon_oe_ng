import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractGeneratorComponent } from './contract-generator/contract-generator.component';
import { AddressComponent } from './contract-generator/address/address.component';
import { ColorsComponent } from './contract-generator/colors/colors.component';
import { BasicInfoComponent } from './contract-generator/basic-info/basic-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ItemService } from '../item.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [ItemService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  declarations: [
    ContractGeneratorComponent,
    AddressComponent,
    BasicInfoComponent,
    ColorsComponent,
  ],
  exports: [ContractGeneratorComponent],
})
export class ContractGeneratorModule {}
