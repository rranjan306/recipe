import { 
  Directive,
  HostListener,
  HostBinding,
  Renderer2,
  ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggle: boolean = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostListener('click') onClick() {
    this.toggle = !this.toggle;
  }
}
