import { useQuery } from 'react-query';
import axios from '../axiosInstance';

const fetchNotes = async () => {
  const { data } = await axios.get('/notes');
  return data;
};

export default function useNotes() {
  return useQuery('notes', fetchNotes);
}
