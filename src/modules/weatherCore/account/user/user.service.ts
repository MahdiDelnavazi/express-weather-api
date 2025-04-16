import { UserRepository } from '@modules/weatherCore/account/user/user.repository';
import { User } from '@modules/weatherCore/account/user/entity';
import { SignupDto } from '@modules/weatherCore/account/authentication';

export class UserService {
    private readonly userRepository = new UserRepository();

    constructor() {}

    async findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOneByEmail(email);
    }

    async findOneById(id: string): Promise<User> {
        return this.userRepository.findOneById(id);
    }

    async create(signupDto: SignupDto): Promise<User> {
        return this.userRepository.create(signupDto);
    }
}
