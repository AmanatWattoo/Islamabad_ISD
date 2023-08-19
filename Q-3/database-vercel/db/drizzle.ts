import { sql } from "@vercel/postgres";
import { varchar } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const UserData=pgTable("pets",{
    id:serial("id").primaryKey(),	
    Name:varchar("Name").notNull(),
    Owner:varchar("Name").notNull()
})
export const db= drizzle(sql)