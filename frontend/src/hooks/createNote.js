import { useMutation, queryCache } from 'react-query';
import axios from '../axiosInstance';

const createNote = async (note) => {
  const { data } = await axios.post('/notes', note);
  return data;
};

export default function useCreateNote() {
  return useMutation(createNote, {
    // onMutate:
    // onSuccess:
    // onError:
    onSettled: () => queryCache.invalidateQueries('notes'),
  });
}
