import axios, { AxiosResponse } from 'axios';
import * as t from './types';

export const getBestStories = async () => {
  try {
    const IDs = await getStoryIDs();
    const stories = await getStories(IDs);
    return stories;
  } catch (error) {
    console.error(`There was an issue fetching from HackerNews - ${error}`);
  }
};

export const getStoryIDs: number[] = async () => {
  try {
    const res = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    return res.data;
  } catch (error) {
    console.error(`There was an issue fetching from HackerNews - ${error}`);
  }
};

export const getStories: t.HNPost = async (IDs: number[]) => {
  try {
    const stories = await Promise.all<number>(
      IDs.map((id: number) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      )
    );
    return stories;
  } catch (error) {
    console.error(`There was an issue fetching from HackerNews - ${error}`);
  }
};
