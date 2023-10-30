import { Injectable } from "@nestjs/common";

import { Product } from "src/models/product.model";

@Injectable()

export class ProductService {
    private product: Product[] = [
        {id: 1, categoryId: 2, price: 80, productName: 'Rice'},
        {id: 1, categoryId: 2, price: 100, productName: 'Sticky rice'},
        {id: 1, categoryId: 2, price: 70, productName: 'Potato'}
    ]

    getProduct(): Product[] {
        return this.product
    }

    createProduct(): string {
        return 'Create product'
    }

    detailProduct(): string {
        return 'Detail Product'
    }

    updatreProduct(): string {
        return 'Update Product'
    }

    deleteProduct(): string {
        return 'Delete Product'
    }
}