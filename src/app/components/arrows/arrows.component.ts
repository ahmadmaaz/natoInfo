import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-arrows',
  template: `

    <div class="flex items-center h-screen w-16 align-center absolute right-4 top-0">
      <span class="material-symbols-outlined text-6xl md:text-7xl lg:text-8xl font-bold cursor-pointer text-stone-800 select-none" (click)="this.nextCountryFunc.emit()">
        arrow_forward_ios
        </span>
    </div>

    <div class="flex items-center h-screen w-16 align-center absolute left-4 top-0">
      <span class="material-symbols-outlined text-6xl md:text-7xl lg:text-8xl font-bold cursor-pointer text-stone-800 select-none" (click)="this.prevCountryFunc.emit()">
        arrow_back_ios
      </span>
    </div>
  `,
  styles: [
  ]
})
export class ArrowsComponent{
  @Output() nextCountryFunc = new EventEmitter<void>();
  @Output() prevCountryFunc = new EventEmitter<void>();

}
