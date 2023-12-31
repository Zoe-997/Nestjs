import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ProductModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor (private datasource: DataSource) {}
}
