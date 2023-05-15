import {
  Table,
  Column,
  Model,
  DataType,
  Sequelize,
  Default,
  Comment,
  HasOne,
} from 'sequelize-typescript';
import { Devices } from '../devices/devices.entity';

@Table({
  tableName: 'users',
  timestamps: false,
  freezeTableName: true,
})
export class Users extends Model<Users> {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  countryCode: string;

  @Column
  phone: string;

  @Column
  address: string;

  @Column
  lat: string;

  @Column
  long: string;

  @Comment('0: not verified, 1: verified')
  @Default('0')
  @Column({
    type: DataType.ENUM('0', '1'),
    allowNull: false,
  })
  isEmailVerified: number;

  @Comment('0: not blocked, 1: blocked')
  @Default('0')
  @Column({
    type: DataType.ENUM('0', '1'),
    allowNull: false,
  })
  isBlockedByAdmin: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: Sequelize.fn('now'),
  })
  firstCreated: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: Sequelize.fn('now'),
  })
  lastModified: Date;

  @HasOne(() => Devices)
  devices: Devices;
}
