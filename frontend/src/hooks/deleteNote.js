import React from 'react';
import axios from '../axiosInstance';

export default function useDeleteNote() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true,
  });

  const mutate = React.useCallback(async (noteId) => {
    setState({ isLoading: true });
    try {
      await axios.delete(`/notes/${noteId}`).then((res) => res.data);
      setState({ isSuccess: true });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}
