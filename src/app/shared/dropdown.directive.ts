import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // HostBinding binds the class to the variable
  @HostBinding('class.open') isOpen = false; 

  // HostListener listens for events.. clicks in this case.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}