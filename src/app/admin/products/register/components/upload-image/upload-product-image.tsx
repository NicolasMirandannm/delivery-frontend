'use client';
import '@/app/utils/utils.css'
import { useState } from 'react';
import { Button, GetProp, message, Modal, Upload, UploadFile, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export function UploadProductImage({ handleOnSelectImage }: {
  handleOnSelectImage: Function
}) {
  const [messageApi, contextHolder] = message.useMessage();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [imageFile, setImageFile] = useState<File>();

  const handleImageChange = (e: any) => {
    const file = e.file as File;
    if (!file.type || !e.fileList.length)
      setImageFile(undefined)
    else if (file.type.startsWith('image/')) {
      setImageFile(file);
      handleOnSelectImage(file);
    } else {
      messageApi.error('O arquivo selecionado precisa ser uma imagem');
    }

  }

  const handleCancel = () => {
    setPreviewOpen(false)
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const uploadButton = (
    <Button type="primary" style={{ cursor: 'pointer' }}>
      <div>
        <UploadOutlined /> Clique para fazer upload
      </div>
    </Button>
  );

  return (
    <>
      { contextHolder }
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
        fileList={imageFile as any ? [imageFile as any] : []}
        onPreview={handlePreview}
        onChange={handleImageChange}
      >
        {imageFile == null && uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={'Imagem do produto'} onCancel={handleCancel}>
        <img alt={previewTitle} style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
}