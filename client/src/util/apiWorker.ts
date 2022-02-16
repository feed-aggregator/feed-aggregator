import * as HN from './HackerNews';
import { getBestStories } from './HackerNews';

export const getPosts = async () => {
  return getBestStories()?.then((stories) => stories);
};
