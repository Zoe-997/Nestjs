import { Injectable } from "@nestjs/common";

import { Product } from "src/models/product.model";
import { ProductDto } from 'src/dto/product.dto';

@Injectable()

export class ProductService {
    private products: Product[] = [
        {id: 1, categoryId: 2, price: 80, productName: 'Rice'},
        {id: 2, categoryId: 2, price: 100, productName: 'Sticky rice'},
        {id: 3, categoryId: 3, price: 70, productName: 'Potato'}
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
        return this.products.find(item => item.id === Number(id))
    }

    updateProduct(productDto: ProductDto, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id))
        this.products[index].categoryId = productDto.categoryId
        this.products[index].productName = productDto.productName
        this.products[index].price = productDto.price
        return this.products[index]
    }

    deleteProduct(): string {
        return 'Delete Product'
    }
}