import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Review } from '../reveiws/review.entity';
import { Cart } from '../carts/cart.entity';
import { Address } from '../addresses/address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Review, review => review.user)
  reviews: Review[];

  @OneToMany(() => Cart, cart => cart.user)
  carts: Cart[];

  @OneToMany(() => Address, address => address.user)
  addresses: Address[];

}