const baseUrl = process.env.REACT_APP_USERS_BASE_URL;
const apiKey = process.env.REACT_APP_USERS_API_KEY;

/**
 * Gets all users
 * @returns Users as an Array
 */
export const getAllUsers = async () => {
  try {
    const res = await fetch(baseUrl);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Finds usernames matching the given parameter.
 * @param {string} username
 * @returns All matching usernames
 */
export const getUser = async (username) => {
  try {
    const res = await fetch(`${baseUrl}/?username=${username}`);
    const json = await res.json();
    return json[0];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new user. If an user with given username is already found from the databse, return that instead
 * @param {string} username
 * @returns Newly created or found user
 */
export const createOrFindUser = async (username) => {
  try {
    const existingUser = await getUser(username);
    if (existingUser) {
      return existingUser;
    }
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        translations: [],
      }),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Updates the current users highscore
 * @param {number} userId
 * @param {number} newHighScore
 * @returns Updated user
 */
export const addTranslations = async (userId, newTranslations) => {
  try {
    const res = await fetch(`${baseUrl}/${userId}`, {
      method: "PATCH",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        translations: newTranslations,
      }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
