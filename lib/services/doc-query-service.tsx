import axios from 'axios';

export const getResult = async (data: { question?: string; url?: string; file?: File }) => {
  try {
    const url = 'https://docxtra-server-dzmp5jbhna-et.a.run.app/generate-ask';

    // Bentuk payload berdasarkan data yang diberikan
    const payload: FormData = new FormData();
    if (data.url) {
      payload.append('url', data.url);
    } else if (data.file) {
      payload.append('file', data.file);
    }

    if (data.question) {
        payload.append('question', data.question);
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
