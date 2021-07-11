import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    birthday: Date;

    constructor(id: string, first_name: string, last_name: string, birthday: Date) {
        super();
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday = birthday;
    }
}
