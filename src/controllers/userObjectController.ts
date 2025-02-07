import { getAllActiveUsers, getAllUserObjects, getUsersByProperty, updateDateOnObjects } from '../services/userObjectService.js';
import { type Express, type Request, type Response, type Router } from 'express';

export function getAllUsers(req: Request, res: Response) {
    try {
        const users = getAllUserObjects();
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send('Error when trying to fetch users');
    }
}

export function updateWithCurrentDate(req: Request, res: Response) {
    try {
        updateDateOnObjects();
        res.status(200).send('Date updated succesfully');
    } catch (e) {
        res.status(500).send('Error when trying to update date on objects');
    }
}

export function getActiveUsers(req: Request, res: Response) {
    try {
        const activeUsers = getAllActiveUsers();

        if (activeUsers?.length === 0) throw new Error('No active users found');
        res.status(200).send(activeUsers);
    } catch (e: any) {
        res.status(404).send(e.message);
    }
}

export function getAllUsersByProperty(req: Request, res: Response) {
    try {
        const users = getUsersByProperty(String(req.query.orderBy));
        res.status(200).send(users);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}