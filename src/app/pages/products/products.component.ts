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
  constructor(private service: MercadoLibreService,private route: ActivatedRoute) {
    let valorBusqueda = this.route.snapshot.params.text;  
    console.log("producto de venta" + valorBusqueda)
    service.searchProducts(valorBusqueda).subscribe((response)=>{
      this.items = response;
    })
   }

  ngOnInit(): void {
  }

}
