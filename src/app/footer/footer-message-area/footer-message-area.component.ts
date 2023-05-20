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


  /**
   * Handles the key press event for the input.
   *
   * @param {any} event - The key press event object.
   * @param {string} inputType - The type of input ('name', 'email', or 'message').
   *
   */
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


  /**
   * Checks the value of the email message and performs corresponding actions.
   *
   */
  checkValueMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    this.messageValueChanged()
      ? this.messageValueChangedOK(nameField, emailField, messageField)
      : this.messageValueChangedNotOK();
  }


  /**
   * Checks if the values of name, email, and message fields have valid values.
   *
   * @returns {boolean} - True if all fields have valid values, false otherwise.
   *
   */
  messageValueChanged() {
    return (
      this.booleanNameRequired == 1 &&
      this.booleanEmailRequired == 1 &&
      this.booleanMessageRequired == 1
    );
  }


  /**
   * Performs actions when the message value has changed and all fields have valid values.
   *
   * @param {any} nameField - The name field element.
   * @param {any} emailField - The email field element.
   * @param {any} messageField - The message field element.
   *
   */
  messageValueChangedOK(nameField: any, emailField: any, messageField: any) {
    this.messageChanged = true;
    setTimeout(() => {
      this.sendMail(nameField, emailField, messageField);
    }, 3000);
  }


  /**
   * Performs actions when the message value has changed but one or more fields have invalid values.
   *
   */
  messageValueChangedNotOK() {
    if (this.booleanNameRequired == 0) this.booleanNameRequired = 2;
    if (this.booleanEmailRequired == 0) this.booleanEmailRequired = 2;
    if (this.booleanMessageRequired == 0) this.booleanMessageRequired = 2;
  }


  /**
   * Sends the mail with the provided name, email, and message values.
   *
   * @param {HTMLInputElement} nameField - The name field input element.
   * @param {HTMLInputElement} emailField - The email field input element.
   * @param {HTMLInputElement} messageField - The message field input element.
   *
   */
  sendMail(
    nameField: HTMLInputElement,
    emailField: HTMLInputElement,
    messageField: HTMLInputElement
  ) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    this.tryFunction(nameField, emailField, messageField, fd);
  }


  /**
   * Tries to send the mail with the provided name, email, message, and form data values.
   *
   * @param {any} nameField - The name field element.
   * @param {any} emailField - The email field element.
   * @param {any} messageField - The message field element.
   * @param {any} fd - The form data object.
   *
   */
  async tryFunction(
    nameField: any,
    emailField: any,
    messageField: any,
    fd: any
  ) {
    try {
      const response = await fetch(
        'https://sebastian-hass.de/assets/email-send/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );
      if (response.ok) {
        this.emailSendinOK(nameField, emailField, messageField);
      } else {
        this.sendMessage = 'ERROR when sending!';
      }
    } catch (error) {
      this.sendMessage = 'ERROR. Try again later!';
    }
  }
  

  /**
   * Performs actions when the email has been successfully sent.
   *
   * @param {any} nameField - The name field element.
   * @param {any} emailField - The email field element.
   * @param {any} messageField - The message field element.
   *
   */
  emailSendinOK(nameField: any, emailField: any, messageField: any) {
    this.sendMessage = 'Thanks for message :-)';
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
  }
}
