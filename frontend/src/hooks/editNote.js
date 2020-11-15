import { queryCache, useMutation } from 'react-query';
import axios from '../axiosInstance';

const saveNote = async (note) => {
  const { data } = await axios.put(`/notes/${note.id}`, note);
  return data;
};

export default function useSaveNote() {
  return useMutation(saveNote, {
    onSettled: () => queryCache.invalidateQueries('notes'),
  });
}
