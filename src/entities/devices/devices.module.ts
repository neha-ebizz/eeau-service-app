import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { devicesProviders } from './devices.provider';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [DevicesService, ...devicesProviders],
  controllers: [],
  exports: [DevicesService],
})
export class DevicesModule {}
