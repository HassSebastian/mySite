import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-message-area',
  templateUrl: './footer-message-area.component.html',
  styleUrls: ['./footer-message-area.component.scss'],
})
export class FooterMessageAreaComponent implements OnInit {
  nameTest = /^[a-zA-Zäöüß]{1,50}\s[a-zA-Zäöüß]{1,50}$/;
  emailTest = /\S+@\S+\.\S+/;
  messageTest = /^[a-zA-Z0-9\s.,:;!?]+$/;

  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  nameRequired: string = 'First and last name please';
  emailRequired: string = 'Your email is required';
  messageRequired: string = 'Your message is required';
  booleanNameRequired: number = 0;
  booleanEmailRequired: number = 0;
  booleanMessageRequired: number = 0;

  ngOnInit(): void {}

  public autocompleteNameValue = Math.random().toString(36).substring(7);

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;

    this.nameTest.test(nameField.value)
      ? (this.booleanNameRequired = 1)
      : (this.booleanNameRequired = 2);

    this.emailTest.test(emailField.value)
      ? (this.booleanEmailRequired = 1)
      : (this.booleanEmailRequired = 2);

    this.messageTest.test(messageField.value)
      ? (this.booleanMessageRequired = 1)
      : (this.booleanMessageRequired = 2);

    // //animation anzeigen für senden
    // let fd = new FormData();
    // fd.append('name',nameField.value);
    // fd.append('email',emailField.value);
    // fd.append('message',messageField.value);

    // await fetch('https://sebastian-hass.developerakademie.net/send_mail/send_mail.php', {
    //   method: 'POST',
    //   body:fd
    // });

    // // animation anzeigen für gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
  }
}
