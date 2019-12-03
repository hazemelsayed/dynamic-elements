import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicInputsDirective } from './shared/dynamic-inputs.directive';
import { NewListComponent } from './dynamic-lists/new-list/new-list.component';
import { DoubleInputsNumberComponent } from './dynamic-lists/shared/double-inputs-number/double-inputs-number.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgSelectModule ],
  declarations: [ AppComponent, HelloComponent, DynamicInputsDirective, NewListComponent,  DoubleInputsNumberComponent ],
  entryComponents: [ DoubleInputsNumberComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
