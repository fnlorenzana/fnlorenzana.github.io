const getInbox = async (access_token, labelId) => {
  const response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10&labelIds=${labelId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  console.log("Response data:", data); // Log the response data for debugging

  if (!data.messages || !Array.isArray(data.messages)) {
    throw new Error("Invalid or missing messages in response");
  }

  const emails = await Promise.all(data.messages.map(async (message) => {
    const res = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${message.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const email = await res.json();
    return email;
  }));

  return emails;
};

export default getInbox;
