import React, { useState, useRef, useEffect } from 'react';
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import uploadService from '@/services/uploadService';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function MyEditor({
  value = '',
  onChange,
}: {
  value?: string;
  onChange: (value: string, name: string) => void;
}) {
  const blocksFromHtml = htmlToDraft(value);
  const { contentBlocks, entityMap } = blocksFromHtml;

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(contentBlocks, entityMap),
    ),
  );
  const editorRef = useRef(null);

  useEffect(() => {
    onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent())),
      'content',
    );
  }, [draftToHtml(convertToRaw(editorState.getCurrentContent()))]);

  return (
    <Editor
      wrapperClassName="editor-wrapper"
      editorClassName="editor-height"
      ref={editorRef}
      editorState={editorState}
      onEditorStateChange={setEditorState}
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
