import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../interfaces/productI';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {

  constructor(private http: HttpClient) { }

  searchProducts(text:String): Observable<any>{
          return this.http.get(environment.api + environment.idCountry + "search?q=" + text + environment.limiter + "24")
          .pipe(map(response => {
            let productos:Array<Product> =[];
            let idActual:number=0;
            for (let product of JSON.parse(JSON.stringify(response)).results) {
              let valorTemp: number = this.randomIntFromInterval(0,50)/100
              let temp:Product = {index:idActual, src:product.thumbnail, descripcion:product.title, value:product.price,valueDiscount:product.price-(product.price)*valorTemp, discount:valorTemp};
              idActual++;
              productos.push(temp);
            }
            return productos;
          }));
    
  }

  aleatoryProducts(){
    //Texto filtrar para aleatorizar
    let buscar = ["vestido","traje","ropa","pantalon","camisa","chaleco","faja"];
    let valorRandom:number= this.randomIntFromInterval(0,buscar.length-1);
          return this.http.get(environment.api + environment.idCountry + "search?q=" + buscar[valorRandom] + environment.limiter + "12")
          .pipe(map(response => {
            let productos:Array<Product> =[];
            let idActual:number=0;
            for (let product of JSON.parse(JSON.stringify(response)).results) {
              let valorTemp: number = this.randomIntFromInterval(0,50)/100
              let temp:Product = {index:idActual, src:product.thumbnail, descripcion:product.title, value:product.price,valueDiscount:product.price-(product.price)*valorTemp, discount:valorTemp};
              idActual++;
              productos.push(temp);
            } 
            return new BehaviorSubject<Array<Product>>(productos);
          }));
    
  }
  _resolveInstances(json:any) {
}
  //funcion para generar valor random
  private randomIntFromInterval(min:number, max:number) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
