import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContractGeneratorModule } from './contract-generator/contract-generator.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ContractGeneratorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
