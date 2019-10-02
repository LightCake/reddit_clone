export const sign_in = async data => {
  try {
    const response = await fetch("/api/user/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return JSON.stringify(json);
  } catch (e) {
    console.error("Error: ", e);
  }
};
