import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  SearchText:any;
  isCollapsed = false;
  checkoutForm = this.formBuilder.group({
    texto: '',
  });
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  async colapsar(){
    this.isCollapsed = true;
  }
  //Opcion para realizar la busqueda
  onSubmit():void{
    //En caso de que se quiera buscar en la misma pagina, se realiza la configuracion de reusar estrategia, e ir hacia la misma pagina
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.SearchText=this.checkoutForm.value.texto;
    this.router.navigate(['buscar/:' + this.SearchText]);
  }

}
