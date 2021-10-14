// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import PrismDecorator from 'draft-js-prism';
import Prism from 'prismjs';

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
  const decorator = new PrismDecorator({
    prism: Prism,
  });

  useEffect(() => {
    const { contentBlocks, entityMap } = getBlocksFromHtml(value);

    setEditorState(() =>
      EditorState.createWithContent(
        ContentState.createFromBlockArray(contentBlocks, entityMap),
        decorator,
      ),
    );
  }, []);

  function debounce(content: any) {
    let timeID: any;
    clearTimeout(timeID);

    timeID = setTimeout(() => {
      onChange(draftToHtml(convertToRaw(content.getCurrentContent())));
    }, 3000);
  }

  const handleEditorStateChange = useCallback((v: any) => {
    setEditorState(v);
    debounce(v);
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
