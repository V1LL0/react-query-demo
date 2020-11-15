import React, { createContext, useContext } from 'react';
import axios from '../axiosInstance';

export const Context = createContext({
  isLoading: true,
});

let fetchNotes;
export const NotesStore = ({ children }) => {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  });

  fetchNotes = async () => {
    setState({ data: state.data, isLoading: true });
    try {
      const data = await axios.get('/notes').then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  React.useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default function useNotes() {
  const [state] = useContext(Context);
  return { ...state, fetch: fetchNotes };
}
