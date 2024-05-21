import { createPage } from "./index.js";

export default async function addEvent(name, category, start, end = null) {
  try {
    const response = await createPage({
      title: {
        title: [
          {
            text: { content: name },
          },
        ],
      },
      Date: {
        date: {
          start,
          end,
          time_zone: "Asia/Singapore",
        },
      },
      Category: {
        type: "select",
        select: { name: category },
      },
    });
    console.log(`Success! Event added. ${response.url}`);
    return response;
  } catch (error) {
    console.error(error.body);
  }
}
