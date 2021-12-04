// @ts-nocheck
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import hljs from 'highlight.js';

import uploadService from '@/services/uploadService';

import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/androidstudio.css';

hljs.configure({
  languages: ['javascript', 'html', 'css'],
});

function QuillEditor({
  value = '',
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (contentValue: string) => {
    onChange(contentValue);
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={QuillEditor.modules}
      onChange={handleChange}
    />
  );
}

QuillEditor.modules = {
  syntax: {
    highlight: (text: any) => hljs.highlightAuto(text).value,
  },
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button
    ],
    handlers: {
      image: function (): any {
        const input: any = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();

        // Listen upload local image and save to server
        input.onchange = async () => {
          const file = input?.files[0];

          // file type is only image.
          if (/^image\//.test(file.type)) {
            const response = await uploadService.uploadImage(file);

            // push image url to rich editor.
            const editor = this.quill;
            const range = editor.getSelection();
            editor.insertEmbed(range.index, 'image', response?.data?.url);
          } else {
            console.warn('You could only upload images.');
          }
        };
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

export default QuillEditor;
