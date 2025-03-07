// * This file is a shortcut and utility for all environment variables which the program is using
import normalizePort from './normalizePort';

const NODE_ENV = process.env.NODE_ENV as string;
const BASE_URL = process.env.BASE_URL as string;
const DATABASE_URL = process.env.DATABASE_URL as string;
const PORT = normalizePort(process.env.PORT as string);

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

export default {
  NODE_ENV,
  PORT,
  BASE_URL,
  DATABASE_URL,
  PRIVATE_KEY,
};
