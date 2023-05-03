import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from './connection';
import { config } from '../config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.sequelizeOrmConfig);
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
