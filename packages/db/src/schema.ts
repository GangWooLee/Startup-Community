import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    name: text("name"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    authorId: uuid("author_id").references(() => users.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const comments = pgTable("comments", {
    id: serial("id").primaryKey(),
    content: text("content").notNull(),
    postId: serial("post_id").references(() => posts.id),
    authorId: uuid("author_id").references(() => users.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
