import { queryCache, useMutation } from 'react-query';
import { notification } from 'antd';
import axios from '../axiosInstance';

const saveNote = async (note) => {
  const { data } = await axios.put(`/notes/${note.id}`, note);
  return data;
};

export default function useSaveNote() {
  return useMutation(saveNote, {
    onMutate: (newNote) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      queryCache.cancelQueries('notes');

      // Snapshot the previous value
      const previousValue = queryCache.getQueryData('notes');

      // Optimistically update to the new value
      queryCache.setQueryData('notes', (notes) => {
        const newNotes = [...notes];
        const idx = newNotes.findIndex((n) => n.id === newNote.id);
        if (idx !== -1) {
          newNotes.splice(idx, 1, newNote);
        }
        return newNotes;
      });

      // Return the rollback function
      return () => queryCache.setQueryData('notes', previousValue);
    },

    // If the mutation fails, use the value returned from onMutate to roll back
    onError: (err, newData, rollback) => {
      rollback();
      return notification.error({
        duration: 3,
        message: 'Whoops, something went wrong!',
      });
    },

    onSettled: () => queryCache.invalidateQueries('notes'),
  });
}
