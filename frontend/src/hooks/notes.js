import React from 'react';
import axios from '../axiosInstance';

export default function useNotes() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const data = await axios.get('/notes').then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return {
    ...state,
    fetch,
  };
}
