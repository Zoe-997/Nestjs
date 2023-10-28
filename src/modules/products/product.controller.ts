import { ProductService } from './product.service';
import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProduct(): string {
        return this.productService.getProduct()
    }

    @Post()
    createProduct(): string {
        return this.productService.createProduct()
    }

    @Get('/:id')
    detailProduct(): string {
        return this.productService.detailProduct()
    }

    @Put('/:id')
    updatreProduct(): string {
        return this.productService.updatreProduct()
    }

    @Delete('/:id')
    deleteProduct(): string {
        return this.productService.deleteProduct()
    }
}
