import React from 'react';
import axios from '../axiosInstance';

export const fetchNote = (noteId) =>
  axios.get(`/notes/${noteId}`).then((res) => res.data);

export default function useNote(noteId) {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  });

  const fetch = React.useCallback(async () => {
    setState({ isLoading: true });
    try {
      const data = await fetchNote(noteId);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, [noteId]);

  React.useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    ...state,
    fetch,
  };
}
