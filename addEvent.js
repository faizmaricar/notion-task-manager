import createPage from "./createPage.js";

export default async function addEvent(name, start, end = null) {
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
        select: { name: "Event" },
      },
    });
    console.log(response);
    console.log("Success! Event added.");
  } catch (error) {
    console.error(error.body);
  }
}
