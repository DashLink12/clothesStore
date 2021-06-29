import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/productI';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-mas-buscados',
  templateUrl: './mas-buscados.component.html',
  styleUrls: ['./mas-buscados.component.scss']
})
export class MasBuscadosComponent implements OnInit {
  items: Array<Product> = [];
  prueba: Array<Product>=[]
  innerWidth: number;
  imagesPerItem:Array<number>;
  actual:number;
  constructor(private service: MercadoLibreService) {
    service.aleatoryProducts().subscribe((response: Product[])=>this.prueba=response)
    this.innerWidth = window.innerWidth
    this.imagesPerItem = this.calcularImagenesPorItem(this.innerWidth);
    this.actual=0;
    this.imagesInItems(this.imagesPerItem.length);
  }

  async ngOnInit() {
  }
  async cargar(){
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.imagesPerItem = this.calcularImagenesPorItem(this.innerWidth);
    this.imagesInItems(this.imagesPerItem.length);
  }
  imagesInItems(quantity:number){
    let temp = [];
    let valueTemp = 0;
    for(let product of this.prueba){
      if( product.index >= this.actual && product.index< this.actual+quantity && this.prueba.length-1 >=this.actual){
        temp.push(product);
        console.log(quantity)
        console.log(product)
        valueTemp++;
      }
    }
    this.items = temp;
    if(this.actual>= this.prueba.length){
      this.actual=0;
    }else{
      this.actual += quantity;
    }
  }
  private calcularImagenesPorItem(tamano:number):Array<number>{
    if(tamano>=1400){
      return Array(4).fill(0).map((x,i)=>i);
    }else if(tamano>=992 && tamano <1400){
      return Array(3).fill(0).map((x,i)=>i);
    }else if(tamano>=576 && tamano <992){
      return Array(2).fill(0).map((x,i)=>i);
    }else if(tamano <576){
      return Array(1).fill(0).map((x,i)=>i);
    }else{
      return Array(1).fill(0).map((x,i)=>i);
    }
  }

}
