import { Inject, Injectable } from '@nestjs/common';

import { Devices } from './devices.entity';

@Injectable()
export class DevicesService {
  constructor(
    @Inject('DevicesRepository')
    private readonly devicesRepository: typeof Devices,
  ) {}

  addDevice = async (reqData: any) => {
    const whereCondition = {
      deviceId: reqData.deviceId,
      deviceType: reqData.deviceType,
    };

    const deviceData = await this.devicesRepository.findOne<Devices>({
      where: whereCondition,
    });

    if (!deviceData) {
      await this.devicesRepository.create<Devices>({
        userId: reqData.userId,
        fcm: reqData.fcm,
        deviceId: reqData.deviceId,
        deviceType: reqData.deviceType,
      });
    } else {
      await this.devicesRepository.update(
        {
          userId: reqData.userId,
          fcm: reqData.fcm,
        },
        {
          where: whereCondition,
        },
      );
    }
    return true;
  };
}
