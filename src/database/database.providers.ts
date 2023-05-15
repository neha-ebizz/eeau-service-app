import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from './connection';
import { config } from '../config';
import { Users } from 'src/entities/users/users.entity';
import { Devices } from 'src/entities/devices/devices.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.sequelizeOrmConfig);
      sequelize.addModels([Users, Devices]);
      await sequelize.sync();
      await sequelize
        .authenticate()
        .then(() => {
          console.log(
            'Connection has been established successfully',
            config().DB_NAME,
          );
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        });

      return sequelize;
    },
    inject: [ConfigService],
  },
];
