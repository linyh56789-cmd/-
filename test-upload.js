const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const API_BASE_URL = 'http://localhost:5000/api/v1';
const filePath = 'test-data.csv';

async function testUpload() {
  try {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));
    
    const response = await axios.post(`${API_BASE_URL}/upload/data`, formData, {
      headers: {
        ...formData.getHeaders()
      }
    });
    
    console.log('上传成功:', response.data);
  } catch (error) {
    console.error('上传错误:', error);
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
  }
}

testUpload();