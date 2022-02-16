import Link from 'next/link';

import uploadService from '@/services/uploadService';
import { IPostItems } from '@/typings/posts';
import { ITags } from '@/typings/tags';

import * as S from '@/styles/pages/admin';

interface renderPostsIProps {
  handleDelete: (id: string) => void;
}

function renderPosts({ handleDelete }: renderPostsIProps) {
  return [
    {
      render: (post: IPostItems) => {
        return <>{post.title}</>;
      },
    },
    {
      render: (post: IPostItems) => {
        return (
          <S.ActionBtn $type="edit">
            <Link href={`/admin/posts/edit/${post._id}`}>
              <a>
                <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwMXB0IiB2aWV3Qm94PSIwIC0xIDQwMS41NDExIDQwMSIgd2lkdGg9IjQwMXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zODEuMjg5MDYyIDMyLjI0MjE4OGMxMy42NzE4NzYgMTMuNjY0MDYyIDEzLjY3MTg3NiAzNS44MjQyMTggMCA0OS40ODgyODFsLTE3LjY3OTY4NyAxNy42Nzk2ODctNjEuMjMwNDY5LTYxLjIzMDQ2OCAxNy42Nzk2ODgtMTcuNjc5Njg4YzEzLjY3MTg3NS0xMy42Njc5NjkgMzUuODMyMDMxLTEzLjY2Nzk2OSA0OS41IDB6bTAgMCIgZmlsbD0iIzAwYWNlYSIvPjxwYXRoIGQ9Im0zNjMuNjA5Mzc1IDk5LjQxMDE1Ni0xNjAuMTQ4NDM3IDE2MC4xNjAxNTZoLS4wMTE3MTlsLTYxLjIzMDQ2OS02MS4yMzA0NjggMTYwLjE2MDE1Ni0xNjAuMTYwMTU2em0wIDAiIGZpbGw9IiMwMGVmZDEiLz48cGF0aCBkPSJtMTQyLjIxODc1IDE5OC4zMzk4NDQgNjEuMjMwNDY5IDYxLjIzMDQ2OC0uNTcwMzEzLjU3MDMxMy04NC42ODc1IDIzLjQ2MDkzNyAyMy40NTcwMzItODQuNjkxNDA2em0wIDAiIGZpbGw9IiNmZWRiNDEiLz48ZyBmaWxsPSIjMDgzODYzIj48cGF0aCBkPSJtMzcwLjU4OTg0NCAyNTAuOTYwOTM4Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYyLTEwIDEwdjg4Ljc4OTA2MmMtLjAxOTUzMiAxNi41NjI1LTEzLjQzNzUgMjkuOTgwNDY5LTMwIDMwaC0yODAuNTg5ODQ0Yy0xNi41NjI1LS4wMTk1MzEtMjkuOTgwNDY5LTEzLjQzNzUtMzAtMzB2LTI2MC41ODk4NDRjLjAxOTUzMS0xNi41NTg1OTQgMTMuNDM3NS0yOS45ODA0NjggMzAtMzBoODguNzg5MDYyYzUuNTIzNDM4IDAgMTAtNC40NzY1NjIgMTAtMTAgMC01LjUyMzQzNy00LjQ3NjU2Mi0xMC0xMC0xMGgtODguNzg5MDYyYy0yNy42MDE1NjIuMDMxMjUtNDkuOTY4NzUgMjIuMzk4NDM4LTUwIDUwdjI2MC41ODk4NDRjLjAzMTI1IDI3LjYwMTU2MiAyMi4zOTg0MzggNDkuOTY4NzUgNTAgNTBoMjgwLjU4OTg0NGMyNy42MDE1NjItLjAzMTI1IDQ5Ljk2ODc1LTIyLjM5ODQzOCA1MC01MHYtODguNzg5MDYyYzAtNS41MjM0MzgtNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIvPjxwYXRoIGQ9Im0zNzYuNjMyODEyIDEzLjQyOTY4OGMtMTcuNTg5ODQzLTE3LjU0Njg3Ni00Ni4wNTg1OTMtMTcuNTQ2ODc2LTYzLjY0NDUzMSAwbC0xNzguNDEwMTU2IDE3OC40MTAxNTZjLTEuMjE4NzUgMS4yMjI2NTYtMi4xMDU0NjkgMi43MzgyODEtMi41NjY0MDYgNC4zOTg0MzdsLTIzLjQ1NzAzMSA4NC42OTE0MDdjLS45NjQ4NDQgMy40NzI2NTYuMDE1NjI0IDcuMTkxNDA2IDIuNTYyNSA5Ljc0MjE4NyAyLjU1MDc4MSAyLjU0Njg3NSA2LjI2OTUzMSAzLjUyNzM0NCA5Ljc0MjE4NyAyLjU2NjQwNmw4NC42OTE0MDYtMjMuNDYwOTM3YzEuNjY0MDYzLS40NjA5MzggMy4xODM1OTQtMS4zNDc2NTYgNC40MDYyNS0yLjU3MDMxM2wuNTY2NDA3LS41NzAzMTIgMTc3LjgzNTkzNy0xNzcuODM1OTM4YzE3LjU3NDIxOS0xNy41NzAzMTIgMTcuNTc0MjE5LTQ2LjA1ODU5MyAwLTYzLjYyODkwNnptLTIyOS42NzU3ODEgMjAzLjc4OTA2MiAzNy42MTMyODEgMzcuNjE3MTg4LTUyLjAzMTI1IDE0LjQxNDA2MnptNTYuNSA0Mi4zNTU0Njl2LS4wMDc4MTNsNi41MTk1MzEgNi41MTk1MzJ6bTAtMTQuMTQwNjI1LTQ3LjA5Mzc1LTQ3LjA5Mzc1IDE0Ni4wMTU2MjUtMTQ2LjAxNTYyNSA0Ny4wODk4NDQgNDcuMDg1OTM3em0xNzAuNzYxNzE5LTE3MC43NzM0MzgtMTAuNjA5Mzc1IDEwLjYwOTM3NS00Ny4wODU5MzctNDcuMDg5ODQzIDEwLjYwOTM3NC0xMC42MDkzNzZjOS43NjU2MjYtOS43NDYwOTMgMjUuNTgyMDMyLTkuNzQ2MDkzIDM1LjM1MTU2MyAwbDExLjczNDM3NSAxMS43NDYwOTRjOS43NjU2MjUgOS43NTc4MTMgOS43NjU2MjUgMjUuNTg1OTM4IDAgMzUuMzQzNzV6bTAgMCIvPjwvZz48L3N2Zz4=" />
              </a>
            </Link>
          </S.ActionBtn>
        );
      },
    },
    {
      render: (post: IPostItems) => {
        return (
          <S.ActionBtn $type="delete" onClick={() => handleDelete(post._id)}>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNDg1QTsiIGQ9Ik00NTIuOTIzLDk4LjQ2MmgtOTguNDYyQzM1NC40NjIsNDQuMDgxLDMxMC4zOCwwLDI1Niwwcy05OC40NjIsNDQuMDgxLTk4LjQ2Miw5OC40NjJINTkuMDc3DQoJYy0xMy41OTgsMC0yNC42MTUsMTEuMDE4LTI0LjYxNSwyNC42MTVzMTEuMDE4LDI0LjYxNSwyNC42MTUsMjQuNjE1aDkuODQ2VjQ0OGMwLjA1OSwzNS4zMjgsMjguNjcyLDYzLjk0MSw2NCw2NGgyNDYuMTU0DQoJYzM1LjMyOC0wLjA1OSw2My45NDEtMjguNjcyLDY0LTY0VjE0Ny42OTJoOS44NDZjMTMuNTk4LDAsMjQuNjE1LTExLjAxOCwyNC42MTUtMjQuNjE1UzQ2Ni41MjEsOTguNDYyLDQ1Mi45MjMsOTguNDYyeiBNMjU2LDQ5LjIzMQ0KCWMyNy4xODUsMCw0OS4yMzEsMjIuMDQ2LDQ5LjIzMSw0OS4yMzFoLTk4LjQ2MkMyMDYuNzY5LDcxLjI3NiwyMjguODE1LDQ5LjIzMSwyNTYsNDkuMjMxeiBNMzkzLjg0Niw0NDgNCgljMCw4LjE1My02LjYxNywxNC43NjktMTQuNzY5LDE0Ljc2OUgxMzIuOTIzYy04LjE1MywwLTE0Ljc2OS02LjYxNy0xNC43NjktMTQuNzY5VjE0Ny42OTJoMjc1LjY5MlY0NDh6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCQkMwOyIgZD0iTTIwMS44NDYsMzc5LjA3N2MtMTMuNTk4LDAtMjQuNjE1LTExLjAxOC0yNC42MTUtMjQuNjE1VjI1NmMwLTEzLjU5OCwxMS4wMTgtMjQuNjE1LDI0LjYxNS0yNC42MTUNCgkJczI0LjYxNSwxMS4wMTgsMjQuNjE1LDI0LjYxNXY5OC40NjJDMjI2LjQ2MiwzNjguMDU5LDIxNS40NDQsMzc5LjA3NywyMDEuODQ2LDM3OS4wNzd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQkJDMDsiIGQ9Ik0zMTAuMTU0LDM3OS4wNzdjLTEzLjU5OCwwLTI0LjYxNS0xMS4wMTgtMjQuNjE1LTI0LjYxNVYyNTZjMC0xMy41OTgsMTEuMDE4LTI0LjYxNSwyNC42MTUtMjQuNjE1DQoJCWMxMy41OTgsMCwyNC42MTUsMTEuMDE4LDI0LjYxNSwyNC42MTV2OTguNDYyQzMzNC43NjksMzY4LjA1OSwzMjMuNzUxLDM3OS4wNzcsMzEwLjE1NCwzNzkuMDc3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
          </S.ActionBtn>
        );
      },
    },
  ];
}

const headerList = [
  {
    width: '600',
    render: () => {
      return <p>Title</p>;
    },
  },
  {
    width: '10',
    render: () => {
      return <p>Edit</p>;
    },
  },
  {
    width: '10',
    render: () => {
      return <p>Delete</p>;
    },
  },
];

function tagObjectToArray(tags: ITags[]) {
  return tags.map(tag => tag.name);
}

function tagNotExistInDB(tags: ITags[], values: string[]) {
  const tagList = tagObjectToArray(tags);

  if (Array.isArray(values)) {
    return values.filter((v: string) => !tagList.includes(v));
  }

  return [];
}

/**
 * Do anything after time
 * @param content : ;
 */

interface debounceIProps {
  time: number;
  callback: any;
}

function debounce({ callback, time = 1000 }: debounceIProps) {
  clearTimeout(callback.id);

  callback.id = setTimeout(() => {
    callback();
  }, time);
}

async function handleUploadFile(file: Blob | string) {
  const response = await uploadService.uploadImage(file);

  return response?.data?.display_url || '';
}

function getPostID(text: string) {
  if (!text) return '';
  const textSplit = text.split('-');

  return textSplit[textSplit.length - 1];
}

export {
  renderPosts,
  headerList,
  tagNotExistInDB,
  debounce,
  handleUploadFile,
  getPostID,
};
