import PropTypes from 'prop-types';
import useNote from 'hooks/note';
import Spinner from 'components/Spinner';
import Link from 'components/Link';

const NoteView = ({ noteId }) => {
  const { data: note = {}, status } = useNote(noteId);
  return status === 'loading' ? (
    <Spinner />
  ) : (
    <div
      style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}
    >
      <Link title={<strong>Back</strong>} link="/" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <strong>{note.title}</strong>
        <div>{note.text}</div>
      </div>
    </div>
  );
};

NoteView.propTypes = {
  noteId: PropTypes.string,
};

export default NoteView;
