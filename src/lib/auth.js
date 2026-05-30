import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("Book-User-Data");

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
   },
       socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 
    },

        
  database: mongodbAdapter(db, {  
    client
  }),
});

