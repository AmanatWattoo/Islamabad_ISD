import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";


export const UserLogOn =pgTable("logon",{

    user_id: serial("user_id").primaryKey(),
    user_name: varchar("user_name").notNull(),
    user_email: varchar("user_email").notNull(),
    user_password: varchar("user_password").notNull(),
})
export const db = drizzle(sql)