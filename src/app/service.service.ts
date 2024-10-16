import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  touchDisplay:boolean=false

  private showMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public value$: Observable<boolean> = this.showMenu.asObservable();

  /**
   * Sets the value of the menu state.
   *
   * @param {boolean} value - The new value for the menu state.
   *
   */
  setValue(value: boolean): void {
    this.showMenu.next(value);
  }

  /**
   * Retrieves the current value of the menu state.
   *
   * @returns {boolean} - The current value of the menu state.
   *
   */
  getValue(): boolean {
    return this.showMenu.getValue();
  }

  /**
   * Scrolls to the specified element with smooth behavior and hides the menu.
   *
   * @param {string} elementId - The ID of the element to scroll to.
   *
   */
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.showMenu.next(false);
    }
  }

  isTouchDevice(): boolean {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  }

  constructor() {}
}
