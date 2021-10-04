import htmlToDraft from 'html-to-draftjs';

function getBlocksFromHtml(editorContent: any) {
  const blocksFromHtml = htmlToDraft(editorContent);
  const { contentBlocks, entityMap } = blocksFromHtml;

  return { contentBlocks, entityMap };
}

export { getBlocksFromHtml };
