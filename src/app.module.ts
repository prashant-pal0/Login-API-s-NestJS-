import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { SocketModule } from './modules/bidirectional/socket.module';

@Module({
  imports: [UserModule,
    SocketModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
