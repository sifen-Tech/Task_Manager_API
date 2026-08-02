const { default: Errors } = require("undici-types/errors");
fetchTask();
async function fetchTask() {
  try {
    const res = await fetch("http://localhost:3000/api/tasks");
    if (!response.ok) {
      throw new Error("could not fetch resources");
    }
    const task = await res.json();
    console.log(task);
  } catch (error) {
    console.error(error);
  }
}
