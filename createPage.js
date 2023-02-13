import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

export default async function createPage(properties) {
  const response = await notion.pages.create({
    parent: { database_id: databaseId },
    properties,
  });
  return response;
}
