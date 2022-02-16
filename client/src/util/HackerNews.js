import axios, { AxiosResponse } from 'axios';
import * as t from './types';

export const getBestStories = async () => {
  try {
    const IDs = await getStoryIDs('top');
    const stories = await getStories(IDs);
    return stories;
  } catch (error) {
    console.error(`There was an issue fetching from HackerNews - ${error}`);
  }
};

const getStoryIDs = async (storyType) => {
  try {
    const res = await axios.get(
      `https://hacker-news.firebaseio.com/v0/${storyType}stories.json`
    );
    return res.data;
  } catch (error) {
    console.error(`There was an issue fetching from HackerNews - ${error}`);
  }
};

const getStories = async (IDs) => {
  try {
    const stories = await Promise.all(
      IDs.map((id) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      )
    );
    return stories;
  } catch (error) {
    console.error(`There was an issue fetching from HackerNews - ${error}`);
  }
};
