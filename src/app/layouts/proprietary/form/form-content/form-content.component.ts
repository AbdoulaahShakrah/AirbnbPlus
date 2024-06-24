import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrl: './form-content.component.css'
})
export class FormContentComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      cancelPolicy: ['', Validators.required],
      adultsNum: ['', Validators.required],
      childrenNum: ['', Validators.required],
      babiesNum: ['', Validators.required],
      bathrooms: ['', Validators.required],
      bedrooms: ['', Validators.required],
      beds: ['', Validators.required],
      neighborhood: [''],
      hostThumbnail: [''],
      isSuperhost: [false],
      rareFind: [false],
      hasWIFI: [false],
      hasKitchen: [false],
      hasParking: [false],
      hasSelfCheckin: [false],
      hasWorkSpace: [false],
      hasFridge: [false],
      images: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.propertyForm.valid) {
      console.log('Form Submitted', this.propertyForm.value);
    } else {
      this.validateAllFormFields(this.propertyForm);
    }
  }
validateAllFormFields(formGroup: FormGroup): void {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormGroup) {
      this.validateAllFormFields(control); // Recursivamente valida os campos de FormGroup aninhados
    } else if (control) {
      control.markAsTouched(); // Marca o controle como tocado
    }
  });
}

}
