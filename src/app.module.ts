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
import { AlmaceneModule } from './almacenes/almacenes.module';
import { CatalogoModule } from './catalogo/catalogo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b9zjo8z6javb3dnhow3z-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u21glvtikjjfmvpx',
      password: 'FWV2mT74j6zgPnEVHy5G',
      database: 'b9zjo8z6javb3dnhow3z',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductosModule,
    CategoriaModule,
    FamiliasModule,
    ProveedoresModule,
    AlmaceneModule,
    CatalogoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
