import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-message-area',
  templateUrl: './footer-message-area.component.html',
  styleUrls: ['./footer-message-area.component.scss'],
})
export class FooterMessageAreaComponent implements OnInit {
  nameTest = /^[a-zA-Zäöüß]{1,50}\s[a-zA-Zäöüß]{1,50}$/;
  emailTest = /\S+@\S+\.\S+/;
  messageTest = /^[a-zA-Z0-9\s.,:;!?]*$/;

  // @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  nameRequired: string = 'First and last name please';
  emailRequired: string = 'Your email is required';
  messageRequired: string = 'Your message is required';
  booleanNameRequired: boolean = false;
  booleanEmailRequired: boolean = false;
  booleanMessageRequired: boolean = false;
  buttonClick: boolean = false;
  ngOnInit(): void {}

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    this.nameTest.test(nameField.value)
      ? (this.booleanNameRequired = true)
      : (this.booleanNameRequired = false);

    this.emailTest.test(emailField.value)
      ? (this.booleanEmailRequired = true)
      : (this.booleanEmailRequired = false);

    this.messageTest.test(messageField.value)
      ? (this.booleanMessageRequired = true)
      : (this.booleanMessageRequired = false);

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
    // nameField.disabled = false;
    // emailField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;
  }
}
