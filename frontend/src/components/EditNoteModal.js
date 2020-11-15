import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';
import useEditNote from 'hooks/editNote';

const EditNoteModal = ({ visible, note, onEdit, onCancel }) => {
  const [form] = Form.useForm();
  const [editNote, editNoteStatus] = useEditNote();

  const handleEdit = async () => {
    const values = form.getFieldsValue();
    editNote({ ...values, id: note.id });
    onEdit();
  };

  useEffect(() => {
    if (note) {
      form.setFieldsValue(note);
    }
  }, [note]);

  return (
    <Modal
      visible={visible}
      title="Edit this note!"
      onOk={handleEdit}
      onCancel={onCancel}
      afterClose={form.resetFields}
    >
      <Form form={form}>
        <Form.Item
          name="title"
          label={'Title'}
          rules={[{ required: true, message: 'please insert a title' }]}
        >
          <Input placeholder="Shopping list"></Input>
        </Form.Item>

        <Form.Item
          name="text"
          label={'Text'}
          rules={[{ required: true, message: 'please insert some text' }]}
        >
          <Input placeholder="Milk, eggs, fleur"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

EditNoteModal.propTypes = {
  visible: PropTypes.bool,
  note: PropTypes.object,
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditNoteModal;
