import axios from 'axios';

export const getResult = async (data: { text?: string; url?: string; file?: File }) => {
  try {
    const url = 'https://docxtra-server-dzmp5jbhna-et.a.run.app/generate-summarize';

    // Bentuk payload berdasarkan data yang diberikan
    const payload: FormData = new FormData();
    if (data.text) {
      payload.append('text', data.text);
    } else if (data.url) {
      payload.append('url', data.url);
    } else if (data.file) {
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
