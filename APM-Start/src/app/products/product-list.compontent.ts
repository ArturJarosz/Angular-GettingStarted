import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.css'
  ]
})
export class ProductListComponent implements OnInit {
  private _listFilter: string = '';

  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  set listFilter(listFilter: string) {
    this._listFilter = listFilter;
    this.filteredProducts = this.filterProducts(this._listFilter);
  }

  get listFilter() {
    return this._listFilter;
  }

  ngOnInit(): void {
    this.products = [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2021',
        description: 'Curved claw steel hammer',
        price: 8.99,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png',
      },
    ];
    this.listFilter = "cart";
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  filterProducts(filteredBy: string): Product[] {
    filteredBy = filteredBy.toLowerCase();
    return this.products.filter((product: Product) => {
      return product.productName.toLowerCase().includes(filteredBy);
    });
  }
}
