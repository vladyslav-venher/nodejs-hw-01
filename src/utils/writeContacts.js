import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  await writeFile(PATH_DB, JSON.stringify(updatedContacts, 2, null));
};
