import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder } from '@angular/forms';
import { Dimension } from 'src/shared/dimension.model';

interface Model {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  modes: Model[] = [
    { value: 'Air', viewValue: 'Air' },
    { value: 'Sea', viewValue: 'Sea' }
  ]


  incos: Model[] = [
    { value: 'EXW', viewValue: 'Ex Works(EXW)'},
    { value: 'FCA', viewValue: 'Free Carrier(FCA)'},
    { value: 'FAS', viewValue: 'Free Alongside Ship(FAS)'},
    { value: 'FOB', viewValue: 'Free On Board(FOB)'},
    { value: 'CFR', viewValue: 'Cost & Freight(CFR)'},
    { value: 'CIF', viewValue: 'Cost Insurance & Freight(CIF)'},
    { value: 'CPT', viewValue: 'Carriage Paid To(CPT)'},
    { value: 'CIP', viewValue: 'Carriage Insurance Paid To(CIP)'},
    { value: 'DAT', viewValue: 'Delivered at Terminal(DAT)'},
    { value: 'DAP', viewValue: 'Delivered at Place(DAP)'},
    { value: 'DDP', viewValue: 'Delivered Duty Paid(DDP)'}
  ]

  typeOfLoad: Model[] = [
    { value: 'LCL', viewValue: 'LCL'},
    { value: 'FCL', viewValue: 'FCL'}
  ]
 
  weight: Model[] = [
    { value: 'kg', viewValue: 'Kg'},
    { value: 'lbs', viewValue: 'Lbs'},
    { value: 'tonnes', viewValue: 'Tonnes'}
  ]

  commodities: Model[] = [
    { value: 'hazardous', viewValue: 'Hazardous'},
    { value: 'perishable', viewValue: 'Perishable'},
    { value: 'fragile', viewValue: 'Fragile'},
    { value: 'other', viewValue: 'Other'}
  ]

  insurance: Model[] = [
    { value: 'acquired', viewValue: 'Acquired'},
    { value: 'needed', viewValue: 'Needed'},
    { value: 'not needed', viewValue: 'Not Needed'}
  ]

  dimensions: Model[] = [
    { value: 'cm', viewValue: 'cm.'},
    { value: 'm', viewValue: 'M.'},
    { value: 'ft', viewValue: 'Ft.'},
    { value: 'mm', viewValue: 'mm.'},
    { value: 'in', viewValue: 'in.'}
  ]

  public showElement: boolean = false;
  
  // public eForm: FormGroup;
  // public cbmForm: FormGroup;

  public formArray = [];
  dimension = new Dimension;

  public length = null;
  public height = null;
  public width = null;
  public result = null;

  constructor(private fb: FormBuilder, private fb1: FormBuilder) { }
    eForm = this.fb.group({
      name: [''],
      email: [''],
      phoneNumber: [''],
      paymentTerms: this.fb.group({
        prepaid: [''],
        collect: ['']
      }),
      mot: [''],
      incoTerms: [''],
      type: [''],
      pOL: [''],
      pD: [''],
      aOL: [''],
      aD: [''],
      grossWeight: [''],
      unit: [''],
      shipperName: [''],
      shipperEmail: [''],
      pA: [''],
      dA: [''],
      commodity: [''],
      transitInsurance: [''],
      CBM: [null],
      calculateCBM: this.fb.group({
        length: [null],
        unitL: [''],
        height: [null],
        unitH: [''],
        width: [null],
        unitW: [''],
        numberOfPackages: [''],
        CBMValue: [null]
      }),
      comments: ['']

    })
    cbmForm = this.fb1.group({
        length: [null],
        height: [null],
        width: [null],
        numberOfPackage: [null],
        CBMValue: [null]
    })
    
    // this.eForm = new FormGroup({
    //   mot: new FormControl(),
    //   type: new FormControl(),
    //   dimensions: this.cbmForm = new FormGroup({
    //     length: new FormControl(),
    //     height: new FormControl(),
    //     width: new FormControl()
    //   })
    // })
    
  

  ngOnInit(): void {
    this.formArray.push(this.cbmForm)
  }

  onCalculateCBM(){
    return this.showElement = true;
  }

  onAddDimension(){
    this.dimension = new Dimension
    return this.formArray.push(this.dimension)
  }

  onReset(){
    this.cbmForm.reset()
  }

  calculate(){
    this.result = this.length * this.height * this.width;
    this.cbmForm.patchValue({CBMValue: this.result})
  }

}
