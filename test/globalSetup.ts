import 'tsconfig-paths/register';
import { Database } from '@common/database';
import { User } from '@modules/weatherCore/account/user';
import { BcryptHelper } from '@common/helpers';

export default async function globalSetup() {
    await Database.initialize();

    const userRepository = Database.getRepository(User);

    await userRepository.save({
        email: 'user@test.com',
        password: await BcryptHelper.hashPassword('Pass1234'),
    });
}
