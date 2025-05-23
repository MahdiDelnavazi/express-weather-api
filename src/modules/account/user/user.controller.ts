import { HttpStatus } from '@common/enums';
import { handleRoute } from '@common/helpers';
import { authentication } from '@common/middlewares';
import { Router } from 'express';
import { UserService } from '@modules/account/user/user.service';
import { UserDto } from '@modules/account/user/dto';

export const UserController = () => {
    const router = Router();

    const userService = new UserService();

    /**
     * @swagger
     *
     * /account/users/me:
     *   get:
     *     tags: [User]
     *     summary: Get the current user's details
     *     security:
     *      - bearerAuth: []
     *     responses:
     *       200:
     *         description: The current user's details
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/UserDto'
     *       401:
     *        description: Unauthorized
     */
    router.get(
        '/me',
        authentication,
        handleRoute(async (req, res) => {
            const user = await userService.findOneById(req.user.id);

            return res.status(HttpStatus.OK).transformAndSend(user, UserDto);
        }),
    );

    return router;
};
