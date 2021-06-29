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

  onSubmit():void{
    this.SearchText=this.checkoutForm.value.texto;
    this.router.navigate(['buscar/:' + this.SearchText]);
  }

}
