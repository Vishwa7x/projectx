import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter} from "@auth/mongodb-adapter";
import clientPromise from "@/app/libs/mongo";

const config = {
    providers : [
        Resend ({
            apiKey: process.env.RESEND_KEY,
            from: "noreply@resend.spac3.shop",
            name: "Email",
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
};

export const {handlers,signIn,signOut,auth} = NextAuth(config);