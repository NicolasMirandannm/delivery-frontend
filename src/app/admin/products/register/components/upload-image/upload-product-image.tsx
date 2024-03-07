'use client';
import '@/app/utils/utils.css'
import { useState } from 'react';
import { UploadFile, UploadProps, GetProp, Upload, Modal, Image, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export function UploadProductImage() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);


  const uploadButton = (
    <Button type="primary" style={{ cursor: 'pointer' }}>
      <div>
        <UploadOutlined /> Clique para fazer upload
      </div>
    </Button>
  );
  return (
    <>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
        onPreview={handlePreview}
        onChange={handleChange}
      >
     {fileList.length < 1 && uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={'Imagem do produto'} onCancel={handleCancel}>
        <img alt={previewTitle} style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
}