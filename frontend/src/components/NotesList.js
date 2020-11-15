import Note from 'components/Note';
import { Empty, Button } from 'antd';
import { COLORS } from 'consts';
import useNotes from 'hooks/notes';
import useDeleteNote from 'hooks/deleteNote';
import { useState } from 'react';
import CreateNoteModal from 'components/CreateNoteModal';
import EditNoteModal from 'components/EditNoteModal';
import Spinner from 'components/Spinner';

const NotesList = () => {
  const { data: notes = [], status } = useNotes();
  const [deleteNote, deleteNoteInfo] = useDeleteNote();

  const [createModalIsVisible, setCreateModalIsVisible] = useState(false);
  const [editModalIsVisible, setEditModalIsVisible] = useState(false);
  const showCreateModal = () => setCreateModalIsVisible(true);
  const showEditModal = () => setEditModalIsVisible(true);

  const [selectedNote, setSelectedNote] = useState();
  const selectNoteAndEdit = (n) => {
    setSelectedNote(n);
    showEditModal();
  };

  const selectNoteAndDelete = async (n) => {
    await deleteNote(n.id);
  };

  const hideModals = () => {
    setSelectedNote(undefined);
    setCreateModalIsVisible(false);
    setEditModalIsVisible(false);
  };

  return status === 'loading' ? (
    <Spinner />
  ) : (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        {notes.length ? (
          notes.map((n) => (
            <Note
              key={n.id}
              note={n}
              onEditClick={() => selectNoteAndEdit(n)}
              onDeleteClick={() => selectNoteAndDelete(n)}
            />
          ))
        ) : (
          <Empty
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          />
        )}
      </div>

      <Button
        size="large"
        style={{
          color: COLORS.white,
          backgroundColor: COLORS.redReactQuery,
          maxWidth: '15vw',
        }}
        onClick={showCreateModal}
      >
        Add new note
      </Button>

      <CreateNoteModal
        visible={createModalIsVisible}
        onCreate={hideModals}
        onCancel={hideModals}
      />
      <EditNoteModal
        visible={editModalIsVisible}
        note={selectedNote}
        onEdit={hideModals}
        onCancel={hideModals}
      />
    </>
  );
};

export default NotesList;
