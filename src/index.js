import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({path:'../config.env'});
 
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);
 
const models = {
  Patient: sequelize.import('./patient'),
  Insurance: sequelize.import('./insurance'),
  Pharmacy:sequelize.import('./pharmacy')
};