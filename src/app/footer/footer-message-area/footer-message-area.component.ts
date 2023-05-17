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

  sendMessage: string = 'Message sending';
  messageChanged: boolean = false;

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


  handleKeyPress(event: any, inputType: string) {
    const inputValue = event.target.value;
    let booleanRequired: number;
  
    switch (inputType) {
      case 'name':
        booleanRequired = this.nameTest.test(inputValue) ? 1 : 2;
        this.booleanNameRequired = booleanRequired;
        break;
      case 'email':
        booleanRequired = this.emailTest.test(inputValue) ? 1 : 2;
        this.booleanEmailRequired = booleanRequired;
        break;
      case 'message':
        booleanRequired = this.messageTest.test(inputValue) ? 1 : 2;
        this.booleanMessageRequired = booleanRequired;
        break;
      default:
        break;
    }
  }
  

  checkValueMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    if (this.messageValueChanged()) {
      this.messageChanged = true;
      setTimeout(() => {
        this.sendMail(nameField, emailField, messageField);
      }, 3000);
    } 
    else {
      if (this.booleanNameRequired == 0) this.booleanNameRequired = 2;
      if (this.booleanEmailRequired == 0) this.booleanEmailRequired = 2;
      if (this.booleanMessageRequired == 0) this.booleanMessageRequired = 2;
    }
  }

  messageValueChanged() {
    return (
      this.booleanNameRequired == 1 &&
      this.booleanEmailRequired == 1 &&
      this.booleanMessageRequired == 1
    );
  }

  async sendMail(
    nameField: HTMLInputElement,
    emailField: HTMLInputElement,
    messageField: HTMLInputElement
  ) {
    this.sendMessage = 'thanks for message :-)';
    setTimeout(() => {
      this.messageChanged = false;
      this.sendMessage = 'Message sending';

      nameField.value = '';
      emailField.value = '';
      messageField.value = '';

      this.booleanNameRequired = 0;
      this.booleanEmailRequired = 0;
      this.booleanMessageRequired = 0;
    }, 3000);

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    try {
      const response = await fetch('https://sebastian-hass.de/assets/email-send/send_mail.php', {
        method: 'POST',
        body: fd,
      });

      if (response.ok) {
        // Erfolgreich versendet
        const confirmation = await response.text();
        console.log('Bestätigung:', confirmation);
      } else {
        // Fehler beim Versenden
        const error = await response.text();
        console.log('Fehler:', error);
      }
    } catch (error) {
      console.log('Fehler:', error);
    }
  }
}
