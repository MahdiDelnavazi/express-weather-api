import { Database } from '@common/database';
import { SignupDto } from '@modules/weatherCore/account/authentication';
import { User } from '@modules/weatherCore/account/user/entity';

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
