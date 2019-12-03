import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DynamicItem } from '../../core/models/dynamic-item';
import {DoubleInputsNumberComponent} from '../shared/double-inputs-number/double-inputs-number.component';
import { DynamicInputsDirective } from 'src/app/shared/dynamic-inputs.directive';
import { DynamicComponant } from 'src/app/core/models/dynamic-componant';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  @ViewChild(DynamicInputsDirective, {static: true}) componantHost: DynamicInputsDirective;

  attributesValues = [
    {
      "id":"1",
      "name":"city",
      "type":"text"
    },
    { 
      "id":"2",
      "name":"age",
      "type":"number"
    }
  ];
  
  selectedAttribute: any;
  // this should be render through the mapping not directly like below.
  operatorsValues = ["is","contains","between"]
  selectedOperator: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onFilterChanged($event){
    this.renderDynamicComponant()

  }
 

  onClear(){

  }

  onOperatorChanged($event){
    this.renderDynamicComponant()
  }

  renderDynamicComponant(){
    const viewContainerRef = this.componantHost.viewContainerRef;
    viewContainerRef.clear();
    if(this.selectedAttribute.name == 'age' && this.selectedOperator == 'between'){
      console.log('render the inputs');
      const dynamicItem = new DynamicItem(DoubleInputsNumberComponent);

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicItem.component);

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<DynamicComponant>componentRef.instance).data = dynamicItem.data;
    }
  }
  onOperatorClear(){

  }

}