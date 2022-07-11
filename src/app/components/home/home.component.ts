import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="flex justify-center items-center flex-col">
    <h1 class=" text-6xl md:text-7xl text-blue-800 font-mono border-2 border-blue-800 w-10/12  lg:w-7/12 py-4 rounded-md italic hover:translate-y-3 hover:translate-x-3 transition-all duration-500 mt-16 text-center"> NATO </h1>
    <div class="pl-4 mt-12 w-10/12 md:w-8/12 lg:w-5/12">
     <b class="text-2xl  md:text-3xl">What is NATO? </b>NATO is an alliance of countries from Europe and North America. It provides a unique link between these two continents, enabling them to consult and cooperate in the field of defence and security, and conduct multinational crisis-management operations together.
     NATO’s purpose is to guarantee the freedom and security of its members through political and military means.
    </div>

    <button class="mt-48 px-12 py-4 border-2 border-blue-800 bg-blue-800  text-white text-blue-800 rounded-lg hover:bg-white hover:text-blue-800 font-bold  transition duration-500 " (click)="this.setHomeScreen.emit()">NATO Major Countries</button>
  </div>
  `,
  styles: []
})
export class HomeComponent  {
  @Output() setHomeScreen = new EventEmitter<void>();
}
