import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Property } from '../../../../interfaces/Property';
import { MyPropertyService } from '../../../../services/myProperty/my-property.service';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent{
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder, private myPropertyService: MyPropertyService) {
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
    console.log(this.propertyForm.value);
  }

  onFileChange(event: any): void {
    const files: File[] = Array.from(event.target.files);
    const images: string[] = files.map(file => `assets/imgs/${file.name}`);
    this.propertyForm.patchValue({ images: images.join(',') });
  }
  
  toProperty(formValue: any): Property {
    const images = formValue.images.split(",").map((image: string) => image.replace("C:\\fakepath\\", "assets/imgs/")); 
    console.log(images);
    return {  
      id: 0,
      url: '',
      name: formValue.name,
      city: formValue.address,
      images: images,
      previewAmenities: this.getAmenities(formValue),
      cancelPolicy: formValue.cancelPolicy,
      price_title: `$${formValue.price} x 1 night `,
      amount: Number(formValue.price),
      bathrooms: Number(formValue.bathrooms),
      bedrooms: Number(formValue.bedrooms),
      beds: Number(formValue.beds),
      neighborhood: formValue.neighborhood,
      isSuperhost: formValue.isSuperhost,
      rareFind: formValue.rareFind,
      persons: Number(formValue.adultsNum) + Number(formValue.childrenNum) + Number(formValue.babiesNum),
      reviewsCount: 0,
      type: '', 
      hostThumbnail: ''
    };
  }

  getAmenities(formValue: any): string[] {
    const amenities: string[] = [];
    if (formValue.hasWIFI) amenities.push('WIFI');
    if (formValue.hasKitchen) amenities.push('Kitchen');
    if (formValue.hasParking) amenities.push('Parking');
    if (formValue.hasSelfCheckin) amenities.push('Self Check-in');
    if (formValue.hasWorkSpace) amenities.push('Workspace');
    if (formValue.hasFridge) amenities.push('Fridge');
    return amenities;
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      const newProperty = this.toProperty(this.propertyForm.value);
      console.log(newProperty);
      console.log("constror: ",this.propertyForm.value); 

      this.postProperty(newProperty);
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

  

  postProperty(myProperty: Property){
    this.myPropertyService.post(myProperty)
  }
}
