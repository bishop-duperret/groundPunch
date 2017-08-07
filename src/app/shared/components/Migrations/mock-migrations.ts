import {Migration} from './Migration';

export const MIGRATIONS: Migration []= [ 
{    id: 1001, migrationName:'Maax.cloud llc', 
usersCompleted: 30, usersFailed:2, usersPending:10, 
startDate: '8/6/2017' },
{    id: 1011, migrationName:'Test llc', 
usersCompleted: 20, usersFailed:2, usersPending:30, 
startDate: '8/6/2017' }

 ]

/**
 *   id: Number;
    migrationName: string;

    usersCompleted: Number;
    usersFailed:Number;
    usersPending:Number;

    startDate: Date;
 */