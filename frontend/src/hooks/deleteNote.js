import { useMutation } from 'react-query';
import axios from '../axiosInstance';

const deleteNote = async (noteId) => {
  const { data } = await axios.delete(`/notes/${noteId}`);
  return data;
};

export default function useDeleteNote() {
  return useMutation(deleteNote, {});
}
