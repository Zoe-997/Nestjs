import { Injectable } from "@nestjs/common";

import { Product } from "src/models/product.model";
import { ProductDto } from 'src/dto/product.dto';

@Injectable()

export class ProductService {
    private products: Product[] = [
        {id: 1, categoryId: 2, price: 80, productName: 'Rice'},
        {id: 1, categoryId: 2, price: 100, productName: 'Sticky rice'},
        {id: 1, categoryId: 2, price: 70, productName: 'Potato'}
    ]

    getProduct(): Product[] {
        return this.products
    }

    createProduct(productDto: ProductDto): Product {
        const product: Product = {
            id: Math.random(),
            ...productDto
        }

        this.products.push(product)
        return product
    }

    detailProduct(id: number): Product {
        return this.product.find(item => item.id === Number(id))
    }

    updatreProduct(): string {
        return 'Update Product'
    }

    deleteProduct(): string {
        return 'Delete Product'
    }
}