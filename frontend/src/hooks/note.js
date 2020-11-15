import { useQuery } from 'react-query';
import axios from '../axiosInstance';

export const fetchNote = async (noteId) => {
  const { data } = await axios.get(`/notes/${noteId}`);
  return data;
};

export default function useNote(noteId) {
  return useQuery(['notes', noteId], () => fetchNote(noteId));
}
