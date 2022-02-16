import * as HN from './HackerNews';
import { getBestStories } from './HackerNews';

export const getPosts = async () => {
  return await getBestStories();
};
