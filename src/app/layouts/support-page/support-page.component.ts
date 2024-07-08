import { Component } from '@angular/core';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrl: './support-page.component.css'
})
export class SupportPageComponent {
  isSubmitted = false;

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/myzgyebd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this.isSubmitted = true;
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map((error: any) => error["message"]).join("\n"));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        });
      }
    }).catch(error => {
      alert("Oops! There was a problem submitting your form");
    });
  }
}
