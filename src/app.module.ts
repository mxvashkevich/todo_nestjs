import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRESS_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRESS_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRESS_DB,
        entities: [Todo],
        autoLoadEntities: true,
        synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
