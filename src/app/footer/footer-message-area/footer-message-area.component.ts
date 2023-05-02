import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-footer-message-area',
  templateUrl: './footer-message-area.component.html',
  styleUrls: ['./footer-message-area.component.scss']
})
export class FooterMessageAreaComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.myForm.invalid) {
      // Markiere alle Felder als berührt, um Fehlermeldungen anzuzeigen
      this.myForm.markAllAsTouched();
      return;
    }

    // Formular ist gültig, führen Sie hier Ihre Aktionen aus (z. B. Daten senden)
    console.log('Formular wurde abgesendet');
  }
}