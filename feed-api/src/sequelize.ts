import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize(c.dialect+ "://" +c.username +":"+c.password+"@"+c.host+":5432"+"/"+c.database);
