import {
  Table,
  Column,
  Model,
  DataType,
  Sequelize,
  Comment,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from '../users/users.entity';

@Table({
  tableName: 'devices',
  timestamps: false,
  freezeTableName: true,
})
export class Devices extends Model<Devices> {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column
  @ForeignKey(() => Users)
  userId: number;

  @Column
  fcm: string;

  @Column
  deviceId: string;

  @Comment('I: ios, A: android')
  @Column({
    type: DataType.ENUM('I', 'A'),
    allowNull: false,
  })
  deviceType: number;

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

  @BelongsTo(() => Users)
  users: Users;
}
