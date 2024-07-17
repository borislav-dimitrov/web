async function logInRequest(userName, passWord) {
  // Define the login credentials
  const credentials = {
    userName: userName,
    passWord: passWord,
  };

  try {
    // Make a POST request to your API endpoint for login
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json(); // Parse the JSON response
    return data;
  } catch (error) {
    // Handle errors that occurred during the fetch
    console.error("There was a problem with your fetch operation:", error);
    throw error; // Rethrow the error so it can be caught by the caller
  }
}

async function logOutRequest(sessionID) {
  // Define the login credentials
  const credentials = {
    sessionID: sessionID,
  };

  try {
    // Make a POST request to your API endpoint for login
    const response = await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json(); // Parse the JSON response
    return data;
  } catch (error) {
    // Handle errors that occurred during the fetch
    console.error("There was a problem with your fetch operation:", error);
    throw error; // Rethrow the error so it can be caught by the caller
  }
}

async function authUserRequest(userName, sessionID) {
  const payLoad = {
    userName: userName,
    sessionID: sessionID,
  };

  try {
    // Make a POST request to your API endpoint for login
    const response = await fetch("http://localhost:3000/api/auth/authorize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad),
    });

    const data = await response.json(); // Parse the JSON response
    return data;
  } catch (error) {
    // Handle errors that occurred during the fetch
    console.error("There was a problem with your fetch operation:", error);
    throw error; // Rethrow the error so it can be caught by the caller
  }
}

export default {
  logInRequest,
  logOutRequest,
  authUserRequest,
};
