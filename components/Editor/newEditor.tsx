// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import uploadService from '@/services/uploadService';

import { getBlocksFromHtml } from './utils';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'prismjs/themes/prism-tomorrow.css';

export default function MyEditor({
  value = '',
  onChange,
}: {
  value?: string;
  onChange: (value: string, name: string) => void;
}) {
  const [editorState, setEditorState] = useState<any>('');
  const editorRef = useRef(null);

  useEffect(() => {
    const { contentBlocks, entityMap } = getBlocksFromHtml(value);

    setEditorState(() =>
      EditorState.createWithContent(
        ContentState.createFromBlockArray(contentBlocks, entityMap),
      ),
    );
  }, []);

  const handleChangeContent = (content: any) => {
    onChange(draftToHtml(convertToRaw(content.getCurrentContent())));
  };

  function debounce(callback: any, content: any) {
    clearTimeout(callback.id);

    callback.id = setTimeout(() => {
      callback(content);
    }, 1000);
  }

  const handleEditorStateChange = useCallback((v: any) => {
    setEditorState(v);
    debounce(handleChangeContent, v);
  }, []);

  return (
    <Editor
      wrapperClassName="editor-wrapper"
      editorClassName="editor-height"
      ref={editorRef}
      editorState={editorState}
      onEditorStateChange={handleEditorStateChange}
      toolbar={{
        image: {
          uploadCallback: uploadService.uploadImage,
          inputAccept: true,
          alt: { present: true, mandatory: true },
        },
      }}
      placeholder="Write something!"
    />
  );
}
