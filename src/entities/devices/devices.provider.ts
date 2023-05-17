import { Devices } from './devices.entity';

export const devicesProviders = [
  { provide: 'DevicesRepository', useValue: Devices },
];
