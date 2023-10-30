import { MinLength, IsNotEmpty, IsNumber } from "class-validator";

export class ProductDto {
    id?: number;
    @IsNotEmpty()
    categoryId?: number;
    @MinLength(5, { message: 'This field must be than 5 chracters!'})
    productName?: string;
    @IsNumber()
    price?: number;
}