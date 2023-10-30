import { Controller, Get, Post, Put, Delete, Param, Body, ValidationPipe } from "@nestjs/common";

import { ResponseData } from 'src/global/globalClass';
import { HttpStatus, HttpMessage } from 'src/global/globalEmun';
import { ProductService } from './product.service';
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";

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
    createProduct(@Body() productDto: ProductDto): ResponseData<ProductDto> {
        try {
            return new ResponseData<ProductDto>(productDto, HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<ProductDto>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    detailProduct(@Param('id') id: number): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.detailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)            
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
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
