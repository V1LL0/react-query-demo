import NotesList from 'components/NotesList';
import NoteView from 'components/NoteView';

export default {
  path: '',
  children: [
    {
      path: '/',
      action: () => ({
        component: <NotesList />,
      }),
    },
    {
      path: '/:id',
      action: (context) => ({
        component: <NoteView noteId={context.params.id} />,
      }),
    },
  ],
};
