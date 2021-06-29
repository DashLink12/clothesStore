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
  contenedorItems: Array<Product>=[]
  innerWidth: number;
  imagesPerItem:Array<number>;
  actual:number;
  constructor(private service: MercadoLibreService) {
    this.innerWidth = window.innerWidth
    this.imagesPerItem = this.calcularImagenesPorItem(this.innerWidth);
    this.actual=0;
    service.aleatoryProducts().subscribe((res)=>{
      this.contenedorItems=res.getValue();
      this.imagesInItems(this.imagesPerItem.length);
    })
    
  }

  async ngOnInit() {
  }
  //Metodo que escucha eventos de cambio de tamaño web
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.imagesPerItem = this.calcularImagenesPorItem(this.innerWidth);
    this.imagesInItems(this.imagesPerItem.length);
  }
  /**Metodo que recoje los productos indicados por el parametro quantity,
   * siendo este la cantidad de productos que se deben mostrar por pagina, atributo que cambia dependiendo del tamaño
  */
  async imagesInItems(quantity:number){
    let temp = [];
    let valueTemp = 0;
    for(let product of this.contenedorItems){
      if( product.index >= this.actual && product.index< this.actual+quantity && this.contenedorItems.length >=this.actual){
        temp.push(product);
        valueTemp++;
      }
    }
    this.items = await temp;
    if(this.actual+valueTemp>= this.contenedorItems.length){
      this.actual=0;
    }else{
      this.actual += quantity;
    }
  }
  /**Metodo privado que identifica los diferentes tamaños de las paginas, y devuelve un array con la cantidad de productos
   * que deben haber en una página
  */
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
