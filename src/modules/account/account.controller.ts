import { Router } from 'express';
import { AuthenticationController } from '@modules/account/authentication/authentication.controller';
import { UserController } from '@modules/account/user/user.controller';

export const AccountController = () => {
    const router = Router();

    router.use('/auth', AuthenticationController());
    router.use('/users', UserController());

    return router;
};
