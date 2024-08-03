import NextAuth from "next-auth";
import resend from "next-auth/providers/resend";
import google from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/libs/mongo";

const config = {
    providers: [
        resend({
            apiKey: process.env.RESEND_KEY,
            from: "noreply@resend.findscript.xyz",
            name:"Email"
        }),
        google({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET,  
        }),
    ],
    adapter:MongoDBAdapter(clientPromise)
};
export const {handlers,aignIN,signOut,auth} = NextAuth(config);