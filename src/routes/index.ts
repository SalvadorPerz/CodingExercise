import express from 'express';
import { type Express, type Request, type Response, type Router } from 'express';
import { getAllUsers, updateWithCurrentDate , getActiveUsers, getAllUsersByProperty} from '../controllers/userObjectController.js';

const router: Router = express.Router();

router.get('/allUsersSorted', getAllUsersByProperty);

router.get('/allUsers', getAllUsers);

router.get('/activeUsers', getActiveUsers);

router.post('/userObject/updateDateOnObjects', updateWithCurrentDate);

export default router;