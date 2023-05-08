import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private showMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public value$: Observable<boolean> = this.showMenu.asObservable();

  setValue(value: boolean): void {
    this.showMenu.next(value);
  }

  getValue(): boolean {
    return this.showMenu.getValue();
  }


  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  constructor() {}
}
