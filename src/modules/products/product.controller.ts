import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

@Controller('products')
export class ProductController {
    @Get()
    getProduct(): string {
        return 'Get list products'
    }

    @Post()
    createProduct(): string {
        return 'Create product'
    }

    @Get('/:id')
    detailProduct(): string {
        return 'Detail Product'
    }

    @Put('/:id')
    updatreProduct(): string {
        return 'Update Product'
    }

    @Delete('/:id')
    deleteProduct(): string {
        return 'Delete Product'
    }
}
