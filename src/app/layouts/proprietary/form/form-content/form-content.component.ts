import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Property } from '../../../../interfaces/Property';
import { MyPropertyService } from '../../../../services/myProperty/my-property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css'],
})
export class FormContentComponent {
  propertyForm: FormGroup;
  showModal: boolean = false;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private myPropertyService: MyPropertyService,
    private route: Router
  ) {
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
      isSuperhost: [false],
      rareFind: [false],
      hasWIFI: [false],
      hasKitchen: [false],
      hasParking: [false],
      hasSelfCheckin: [false],
      hasWorkSpace: [false],
      hasFridge: [false],
      images: ['', Validators.required],
    });
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.selectedFiles = Array.from(event.target.files);
      const imageUrls = this.selectedFiles.map(file => URL.createObjectURL(file));
      this.propertyForm.patchValue({ images: imageUrls.join(',') });
    }
  }

  toProperty(formValue: any): Property {
    const images: string[] = this.selectedFiles.map((file) => "assets/imgs/" + file.name);
    return {
      id: this.generateUniqueId(),
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
      persons:
        Number(formValue.adultsNum) +
        Number(formValue.childrenNum) +
        Number(formValue.babiesNum),
      reviewsCount: 0,
      type: '',
      hostThumbnail: '',
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
      this.postProperty(newProperty);
      this.showModal = true;
    } else {
      this.validateAllFormFields(this.propertyForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control) {
        control.markAsTouched();
      }
    });
  }

  generateUniqueId(): number {
    return Date.now() + Math.floor(Math.random() * 1000000);
  }

  postProperty(myProperty: Property) {
    this.myPropertyService.post(myProperty);
  }

  closeModal() {
    this.showModal = false;
    this.route.navigateByUrl('/my-properties');
  }
}
