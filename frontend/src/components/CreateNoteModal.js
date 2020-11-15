import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';
import useCreateNote from 'hooks/createNote';

const CreateNoteModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [createNote, createNoteStatus] = useCreateNote();

  const handleCreate = async () => {
    const values = form.getFieldsValue();
    createNote(values);
    onCreate();
  };

  return (
    <Modal
      visible={visible}
      title="Create new note!"
      onOk={handleCreate}
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

CreateNoteModal.propTypes = {
  visible: PropTypes.bool,
};

export default CreateNoteModal;
