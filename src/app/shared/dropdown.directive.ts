import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') open: boolean = false;

  // build a dropdirective that attaches 'open' class on first click and remove it on second click.

  @HostListener('click') appDropdown() {
  	this.open = !this.open; 
  }

}
