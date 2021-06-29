import { Component, OnInit } from '@angular/core';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/productI';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items:Array<Product> = [];
  isVisible = true; // whenever you need to hide an element
  constructor(private service: MercadoLibreService,private route: ActivatedRoute) {
    let valorBusqueda = this.route.snapshot.params.text; 
    // Me suscribo al servicio, para obtener la response
    service.searchProducts(valorBusqueda).subscribe((response)=>{
      this.items = response;
      this.isVisible=false;
    })
   }

  ngOnInit(): void {
  }
  
  


}
