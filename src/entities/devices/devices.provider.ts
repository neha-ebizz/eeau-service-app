import { Devices } from './devices.entity';

export const devicesRepository = [
  { provide: 'DevicesRepository', useValue: Devices },
];
