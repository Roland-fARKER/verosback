/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CorsMiddleware } from './cors.middleware';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FamiliasModule } from './familias/familias.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { AlmacenesModule } from './almacenes/almacenes.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bubgq0dtg2rvtoxnynux-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uonuqe7tcadw8qpe',
      password: 'MSzqKYQIdI4KGYF33ALX',
      database: 'bubgq0dtg2rvtoxnynux',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductosModule,
    CategoriaModule,
    FamiliasModule,
    ProveedoresModule,
    AlmacenesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
