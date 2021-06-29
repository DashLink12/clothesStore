import { Component, OnInit } from '@angular/core';
import { OptionsFooterI } from 'src/app/interfaces/options-footerI';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public isMenuCollapsed = true;
  options: Array<OptionsFooterI> = [];
  constructor() {
  }

  async ngOnInit() {
    //Opciones del footer
    this.options= [
      {title:"POLÍTICAS",subtitles:[
        {name:"Políticas de privacidad",referencia:"./"},
        {name:"Políticas de cambio",referencia:"./"},
        {name:"Políticas de envío",referencia:"./"},
        {name:"Términos y condiciones",referencia:"./"},
        {name:"Responsabilidad Social",referencia:"./"}
      ]},
      {title:"SOBRE NOSOTROS",subtitles:[
        {name:"Encuentra tu tienda",referencia:"./"},
        {name:"Contáctanos",referencia:"./"},
        {name:"Trabaja con nosotros",referencia:"./"}
      ]},
      {title:"MEDIOS DE PAGO",subtitles:[      ]},
    ];
  }

}
