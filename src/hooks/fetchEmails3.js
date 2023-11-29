// fetchEmails.js
import getInbox from './getInbox';

const fetchEmails3 = async (access_token, labelId3) => {
  try {
    const emails = await getInbox(access_token, labelId3);

    const messages = emails.map((email) => {
      try {
        const headers = email.payload.headers;
        const subject = headers.find((header) => header.name === 'Subject')?.value || 'Subject not found';
        const from = headers.find((header) => header.name === 'From')?.value || 'From not found';

        let content;
        if (email.payload.parts) {
          content = atob(email.payload.parts[0].body.data);
        } else {
          content = atob(email.payload.body.data);
        }

        return { subject, from, content };
      } catch (error) {
        console.error(`Error processing email(GMAIL) with ID ${email.id}: ${error.message}`);
        return null; // Skip this email in case of an error
      }
    });

    // Filter out null values (skipped emails due to errors)
    const validMessages = messages.filter((message) => message !== null);

    return validMessages;
  } catch (error) {
    console.error(`Error fetching emails from GMAIL: ${error.message}`);
    return []; // Return an empty array in case of an error during the overall process
  }
};

export default fetchEmails3;
