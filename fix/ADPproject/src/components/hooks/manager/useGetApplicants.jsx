import { useQuery } from 'react-query';
import axios from 'axios';

const fetchApplicants = async (applicantIds) => {
  const response = await axios.get('http://localhost:3000/api/manager/api/applicants', {
    params: { ids: applicantIds },
  });

  if (response.status !== 200) {
    throw new Error('Failed to fetch applicants');
  }

  return response.data;
};

export const useApplicants = (applicantIds) => {
  return useQuery(['applicants', applicantIds], () => fetchApplicants(applicantIds), {
    enabled: !!applicantIds.length,
  });
};