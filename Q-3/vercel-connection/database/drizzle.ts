import { sql } from "@vercel/postgres";
import {varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const UserSignUp = pgTable(
    "signup",{
        Name:varchar("Name").notNull(),  	
        Email: varchar("Email").notNull(),
        Password: varchar("Password").notNull(),
    }
)
export const db = drizzle(sql)
//use this object to send quries to your database