import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appStylingDirective]"
})
export class StylingDirectiveDirective {
  constructor(private tag: ElementRef) {}
  @HostListener("mouseover") mousehovering() {
    this.tag.nativeElement.style.border = "1px solid gray";
    this.tag.nativeElement.style.boxShadow = "0px 0px 15px gray";
  }

  @HostListener("mouseleave") mouseleave() {
    this.tag.nativeElement.style.border = "";
    this.tag.nativeElement.style.boxShadow = "none";
  }
}
