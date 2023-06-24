import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music';
validar:string=""
  aplicarSonido(nombre:string):void{
    const audio=new Audio();
    audio.src='../assets/musica/' + nombre + '.mp3';
    audio.load();
    audio.play();
  }

musica:any[]=[
{nombre:'Rochy',genero:'dembow'},
{nombre:'Alfa',genero:'dembow'},
{nombre:'Anuel',genero:'trap'}

]

//       validar:string="";
//     verificar ():void{

//  if(this.validar=='juan'){
// console.log("tu codigo es validado")
//   }

//       }
    

 


}
