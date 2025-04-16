import { Router } from 'express';
import { UserController } from '@modules/weatherCore/account/user/user.controller';
import { AuthenticationController } from '@modules/weatherCore/account/authentication/authentication.controller';

export const AccountController = () => {
    const router = Router();

    router.use('/auth', AuthenticationController());
    router.use('/users', UserController());

    return router;
};
