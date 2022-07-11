import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
  <div class="w-screen h-screen  bg-contain lg:bg-auto bg-center bg-no-repeat flex items-center justify-center flex-col" [ngClass]="natoCountries[number].bool ? 'animation1' : 'animation2' " [style.background]="infoOpen ? natoCountries[number].bg : '' ">
    <div   class="w-8/12 h-4/6 flex items-center justify-center" >
      <div class="overflow-hidden w-10/12 h-5/6  bg-contain lg:bg-auto bg-center bg-no-repeat flex justify-center items-center ani" >
        <img  [src]="natoCountries[number].flag" class="cursor-pointer" (click)="infoOpen=true" >
        <app-country-info [country]="natoCountries[number].country" *ngIf="infoOpen" [countryInfo]="natoCountries[number].info" (hideInfo)="infoOpen=false" > </app-country-info>
      </div> 
    </div>  
  </div>
  <app-arrows (nextCountryFunc)="nextCountry()" (prevCountryFunc)="prevCountry()"> </app-arrows>
  `,
  styleUrls: ["./country.component.css"]
})
export class CountryComponent  {
  natoCountries=[
    {
      country:"United States",
      description:"The United states is .....",
      flag:"../assets/images/USAFlag.png",
      bg:"linear-gradient(to bottom right ,red,white)",
      bool:true,
      info:["Population: 324,057,300", "Capital: Washington, D.C" , "Area: 9,826,630 square kilometres", "The US Has The 4th Longest River System In The World"," The US Has The Largest Economy In The World"]
    },
    {
      country:"Germany",
      description:"",
      flag:"../assets/images/GermanyFlag.svg",
      bg:"linear-gradient(to bottom right, black,red,yellow)",
      bool:false,
      info:["Population: 82,422,299","Capital: Berlin","Area: 349,223 km²", "One-third of Germany is still covered in forests and woodlands", "Germany is the EU’s largest economy","The first magazine ever seen was launched in 1663 in Germany","Berlin has the largest train station in Europe"]
    },
    {
      country:"France",
      description:"",
      flag:"../assets/images/FranceFlag.png",
      bg:"linear-gradient(to right, blue,white,red)",
      bool:true,
      info:["Population: 67,092,056","Capital: Paris","Area: 543,965 km²", "France is the world’s most popular tourist destination", "In France, you can marry a dead person!","The croissant was actually invented in Austria in the 13th century"]
    },    
    {
      country:"United Kingdom",
      description:"",
      flag:"../assets/images/UnitedKingdomFlag.webp",
      bg:"linear-gradient(to top right, blue,red,white)",
      bool:false,
      info:["Population: 67,220,000","Capital: london","Area: 243,610 km²","Royal weddings are national holidays. The day after the ceremony, people get a day off work", "London has over 170 museums", "27% of people in the UK are obese, the highest percentage in the world","French was the official language in the UK, from 1066 to 1362 for almost 300 years"]
    },
    {
      country:"Italy",
      description:"",
      flag:"../assets/images/ItalyFlag.webp",
      bg:"linear-gradient(to bottom right , green ,white,red)",
      bool:true,
      info:["Population: 59,550,000","Capital: Rome","Area: 301,230 km2 ", "Rome is over 2,000 years old","The country was under a dictatorship for 20 years",". Tourists throw €1,000,000 into the Trevi Fountain each year","Pinocchio was first published in an Italian newspaper","The Vatican City is the world's smallest country"]
    },
    {
      country:"Canada",
      description:"",
      flag:"../assets/images/CanadaFlag.png",
      bg:"linear-gradient(to bottom right, red, white,red)",
      bool:false,
      info:["Population: 38,000,000", "Capital: Ottawa","Area: 9.985 million km²","More than half of all the lakes in the world are located in Canada","Canada’s national animal is actually a beaver","The coldest ever recorded temperature in Canada is -63°C.","Canada has one of the highest immigration rates in the world"]
    },
    {
      country:"Netherlands",
      description:"",
      flag:"../assets/images/NetherlandsFlag.webp",
      bg:"linear-gradient(to bottom , red,white,blue)",
      bool:true,
      info:["Population: 17,440,000", "Capital: Amsterdam","Area: 41,543 km²","The Netherlands is the sixth happiest country in the world","The Dutch are the healthiest in the world when it comes to diet","There are more bicycles in the Netherlands than people","The Dutch are indeed the tallest nation in the world"]
    },
    {
      country:"Denmark",
      description:"",
      flag:"../assets/images/DenmarkFlag.png",
      bg:"linear-gradient(to top right, white,red,white )",
      bool:false,
      info:["Population: 5,831,000", "Capital: Copenhagen","Area: 42,951 km²"," The oldest flag in the world","More than 50% of Copenhageners cycle to and from work every day","LEGO® was invented by a Dane","You'll never be more than 52km from the ocean in Denmark"]
    },
    {
      country:"Norway",
      description:"",
      flag:"../assets/images/NorwayFlag.png",
      bg:"linear-gradient(to top right, blue,white,red)",
      bool:true,
      info:["Population: 5,379,000", "Capital: Oslo","Area: 385,207 km²","The world's longest road tunnel is in Norway","The Nobel Peace Prize is awarded in Oslo","Norway gave the world the cheese slicer","Norway isn't powered by oil"]
    },
    {
      country:"Luxembourg",
      description:"",
      flag:"../assets/images/LuxembourgFlag.png",
      bg:"linear-gradient(to bottom , red,white,blue)",
      bool:false,
      info:["Population: 632,275", "Capital: Luxembourg","Area:  2,586 km²","Luxembourg is the second-richest country in the world","Luxembourg is one of the safest countries in the world","Forests cover more than a third of Luxembourg","Luxembourg has the highest minimum wage in the EU"]
    },
    {
      country:"Portugal",
      description:"",
      flag:"../assets/images/PortugalFlag.jpg",
      bg:"linear-gradient(to right, green,red)",
      bool:true,
      info:["Population: 10,310,000", "Capital: Lisbon","Area: 92,212 km²","Lisbon is older than Rome and among the oldest cities in Europe","Portugal’s most famous export and its national drink is port wine","Portugal is a world leader in renewable energy","The biggest wave ever surfed was in Portugal"]
    },
    {
      country:"Belgium",
      description:"",
      flag:"../assets/images/BelgiumFlag.jpg",
      bg:"linear-gradient(to  right, black,yellow,red)",
      bool:false,
      info:["Population: 11,560,000", "Capital: Brussels","Area: 30,688 km²","Belgian men are the second tallest in the world","Belgium has been producing chocolate for almost 400 years","Smurfs came fro belgium","Belgium has three official languages, and none of them is Belgian (Dutch,French,German)"]
    },
    {
      country:"Iceland",
      description:"",
      flag:"../assets/images/IcelandFlag.png",
      bg:"linear-gradient(to bottom right, blue,red)",
      bool:true,
      info:["Population: 366,425", "Capital: Reykjavík","Area: 103,000 km²","More than 60% of the Icelandic population live in the capital city, Reykjavik","Iceland was the last place on earth to be settled by humans","Iceland is one of the most eco-friendly countries in the world","About 11% of Iceland is covered by glaciers","The Northern Lights can be seen in Iceland from September to March"]
    }
  ];
  number=0
  infoOpen = false;
  nextCountry(): string{


    if (this.number==this.natoCountries.length-1){
      this.number=0;
      return ""
    }
    this.number++;
    return ""
    
  }
  prevCountry():string{
    
    if (this.number==0){
      this.number=this.natoCountries.length -1;
      return ""
    }
    this.number--
    return ""
  }

}
