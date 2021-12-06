import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQUERY_TOKEN} from './jQuery.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(@Inject(JQUERY_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
