import { Repository } from 'libs/types';
import React, {
  useEffect,
  useContext,
  createContext,
  useState,
  ReactElement,
} from 'react';
import { useQuery } from 'react-query';
import githubService from 'services/github.service';
import Loader from 'components/Loader';

type Props = {
  children: ReactElement;
};

interface RepositoriesContext {
  favorites: number[];
  repositories: Repository[];
  addFavorites: (id: number) => void;
  removeFavorites: (id: number) => void;
}

// create context
const RepositoriesContext = createContext<RepositoriesContext | undefined>(undefined);

/**
 * create a component that will keep track of user's auth state
 * then wrap _app.js so that entire app knows about repositories
 */

const RepositoriesProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const { data, status } = useQuery('repositories', githubService.getRepositories);

  useEffect(() => {
    const initialValue = Object.keys(localStorage)
      .filter((item) => item.includes('github'))
      .map((item) => JSON.parse(localStorage[item]));

    setFavorites(initialValue);
  }, []);

  const addFavorites = (id: number) => {
    setFavorites((prev) => [...prev, id]);
    window.localStorage.setItem(`github-${id}`, JSON.stringify(id));
  };

  const removeFavorites = (id: number) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== id);

    setFavorites(updatedFavorites);
    window.localStorage.removeItem(`github-${id}`);
  };

  return (
    <RepositoriesContext.Provider
      value={{ repositories: data?.items, favorites, addFavorites, removeFavorites }}
    >
      {status === 'error' && (
        <div>oops, something went wrong, try to reload the page</div>
      )}
      {status === 'loading' && <Loader />}
      {status === 'success' && children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);

  if (context === undefined) {
    throw new Error('useRepositories must be used within a RepositoriesProvider');
  }

  return context;
};

export default RepositoriesProvider;
