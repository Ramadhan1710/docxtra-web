import axios from 'axios';

export const getResult = async (data: { files?: File[] }) => {
  try {
    const url = 'https://docxtra-server-dzmp5jbhna-et.a.run.app/generate-similarity';

    const payload: FormData = new FormData();
    if (data.files) {
      data.files.forEach((file, index) => {
        payload.append(`files`, file);
      });
    }

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch similarity');
  }
};
