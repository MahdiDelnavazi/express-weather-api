import { Database } from '@common/database';
import { User } from './entity';
import { SignupDto } from '../authentication';

export class UserRepository {
    private readonly repository = Database.getRepository(User);

    async findOneByEmail(email: string): Promise<User> {
        return this.repository.findOne({
            where: {
                email: email,
            },
            select: ['id', 'email', 'password'],
        });
    }

    async findOneById(id: string): Promise<User> {
        return this.repository.findOneBy({ id: id });
    }

    async create(signupDto: SignupDto): Promise<User> {
        return this.repository.save(signupDto);
    }
}
