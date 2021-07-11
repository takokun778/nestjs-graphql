import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MutationUsersInput } from '../graphql';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(inputs: MutationUsersInput[]) {
        const entities = inputs.map((input) => {
            return new User(uuid.v4(), input.firstName, input.lastName, input.birthday);
        });
        await this.userRepository.createQueryBuilder().insert().values(entities).execute();
        return entities;
    }

    async read(ids?: string[]) {
        if (ids) {
            return await this.userRepository.createQueryBuilder().whereInIds(ids).getMany();
        } else {
            return await this.userRepository.createQueryBuilder().getMany();
        }
    }

    async update(inputs: MutationUsersInput[]) {
        await Promise.all(
            inputs.map(async (input) => {
                const values = {};
                if (input.firstName) {
                    Object.assign(values, { first_name: input.firstName });
                }
                if (input.lastName) {
                    Object.assign(values, { last_name: input.lastName });
                }
                if (input.birthday) {
                    Object.assign(values, { birthday: input.birthday });
                }
                if (!Object.keys(values).length) {
                    return;
                }
                await this.userRepository
                    .createQueryBuilder()
                    .update()
                    .set(values)
                    .where('id = :id', { id: input.id })
                    .execute();
            })
        );
        return await this.read(inputs.map((input) => input.id));
    }

    async delete(ids: string[]) {
        const entities = await this.read(ids);
        await this.userRepository.createQueryBuilder().delete().whereInIds(ids).execute();
        return entities;
    }
}
