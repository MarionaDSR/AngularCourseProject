import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	open: boolean = false;

  constructor(private elementRef: ElementRef,
  	private renderer: Renderer2) { }

  // build a dropdirective that attaches 'open' class on first click and remove it on second click.

  @HostListener('click') appDropdown() {
  	this.open = !this.open; 
  	if (this.open) {
  		this.renderer.addClass(this.elementRef.nativeElement, 'open');
  	} else {
  		this.renderer.removeClass(this.elementRef.nativeElement, 'open');  	
  	}
  }

}
