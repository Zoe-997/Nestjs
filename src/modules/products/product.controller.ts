import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

import { ResponseData } from 'src/global/globalClass';
import { HttpStatus, HttpMessage } from 'src/global/globalEmun';
import { ProductService } from './product.service';
import { Product } from "src/models/product.model";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProduct(): ResponseData<Product[]> {
        try {
            return new ResponseData<Product[]>(this.productService.getProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Post()
    createProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.createProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    detailProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.detailProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Put('/:id')
    updatreProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.updatreProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Delete('/:id')
    deleteProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.deleteProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
}
