import { Injectable } from "@nestjs/common";

@Injectable()

export class ProductService {
    getProduct(): string {
        return 'Get list products'
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