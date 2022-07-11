import { Component, Input,  Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-info',
  template: `
      <div class='backdrop-blur backdrop-brightness-90  absolute top-0 left-0 w-full h-screen z-10 flex justify-center items-center ' >
        <div class='block rounded drop-shadow-2xl shadow-sky-300 w-11/12  md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 bg-white text-center py-8 px-2 shadow-md shadow-black flex justify-center items-center flex-col ' > 
            <h1 class='text-2xl lg:text-3xl xl:text-4xl italic font-bold mb-10'>{{country}}</h1>       
            <ul *ngFor="let info of countryInfo" class="text-left list-disc">
              <li class="w-96">{{info}}</li>
            </ul>
            <div  class="text-center mt-12"> <span class="material-symbols-outlined text-7xl cursor-pointer" (click)="this.hideInfo.emit();">close</span> </div>
            
        </div> 
        
  `,
  styles: [
  ]
})
export class CountryInfoComponent{
  @Input() country ="";
  @Input() countryInfo:string[]= [];
  @Output() hideInfo = new EventEmitter<void>();
 
}
