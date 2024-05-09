// api/summaroid.ts
import axios from 'axios';

export const getResult = async (data: { file?: File }) => {
  try {
    const url = 'https://docxtra-server-dzmp5jbhna-et.a.run.app/generate-validate';

    // Bentuk payload berdasarkan data yang diberikan
    const payload: FormData = new FormData();
    if (data.file) {
      payload.append('file', data.file);
    }

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch summary');
  }
};
