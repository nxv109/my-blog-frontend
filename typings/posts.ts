export interface IPostItems {
  _id: string;
  title: string;
  summary: string;
  content: string;
  slug: string;
  category: Record<string, any>;
  article_thumbnail: string;
  tags: string[];
  created_by: Record<string, any>;
  create_at: string;
}
