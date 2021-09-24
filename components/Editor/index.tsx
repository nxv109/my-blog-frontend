import React, { useState, useRef, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
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
  const [editorState, setEditorState] = useState<any>('');
  const editorRef = useRef(null);

  useEffect(() => {
    if (value) {
      const blocksFromHtml = htmlToDraft(value);
      const { contentBlocks, entityMap } = blocksFromHtml;

      setEditorState(() =>
        EditorState.createWithContent(
          ContentState.createFromBlockArray(contentBlocks, entityMap),
        ),
      );
    }
  }, []);

  function debounce(content: any) {
    let timeID: any;
    clearTimeout(timeID);

    timeID = setTimeout(() => {
      onChange(
        draftToHtml(convertToRaw(content.getCurrentContent())),
        'content',
      );
    }, 3000);
  }

  const handleEditorStateChange = (v: any) => {
    setEditorState(v);
    debounce(v);
  };

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
