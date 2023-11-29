// fetchEmails.js
import getInbox from './getInbox';

const fetchEmails2 = async (access_token, labelId2) => {
  try {
    const emails = await getInbox(access_token, labelId2);

    const messages = emails.map((email) => {
      try {
        let content;
        if (email.payload.parts) {
          content = atob(email.payload.parts[0].body.data);
        } else {
          content = atob(email.payload.body.data);
        }
        return { content };
      } catch (error) {
        console.error(`Error processing email(CHAT) with ID ${email.id}: ${error.message}`);
        return null; // Skip this email in case of an error
      }
    });

    // Filter out null values (skipped emails due to errors)
    const validMessages = messages.filter((message) => message !== null);

    return validMessages;
  } catch (error) {
    console.error(`Error fetching emails from CHAT: ${error.message}`);
    return []; // Return an empty array in case of an error during the overall process
  }
};

export default fetchEmails2;
