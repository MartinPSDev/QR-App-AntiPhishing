import axios from 'axios';

const API_KEY = 'YOUR_VIRUSTOTAL_API_KEY'; // Replace with actual API key

export const scanUrl = async (url: string) => {
  try {
    // Submit URL for scanning
    const scanResponse = await axios.post(
      'https://www.virustotal.com/vtapi/v2/url/scan',
      `url=${encodeURIComponent(url)}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'apikey': 'f7c45e0645da8d6a39c07120057f00d4799778dce26ded6ea8f1c6205a926f33'
        }
      }
    );

    // Wait for results
    const reportResponse = await axios.get(
      'https://www.virustotal.com/vtapi/v2/url/report',
      {
        params: {
          apikey: API_KEY,
          resource: url
        }
      }
    );

    return {
      success: true,
      data: reportResponse.data
    };
  } catch (error) {
    return {
      success: false,
      error: 'Error scanning URL'
    };
  }
};