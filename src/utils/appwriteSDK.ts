import {
  Account,
  Client,
  Databases,
  Storage,
  Functions,
  Avatars,
} from 'appwrite';
import AppwriteConfig from '../configs/appwriteConfig';

export const appwrite = new Client();

appwrite
  .setEndpoint(AppwriteConfig.endPoint)
  .setProject(AppwriteConfig.projectId);

export const account = new Account(appwrite);
export const database = new Databases(appwrite);
export const storage = new Storage(appwrite);
export const functions = new Functions(appwrite);
export const avatars = new Avatars(appwrite);
