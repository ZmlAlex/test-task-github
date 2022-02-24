import type { NextPage } from 'next';
import Layout from 'components/Layout';
import List from 'components/List';
import RepositoryCard from 'components/RepositoryCard';
import { useRepositories } from 'context/RepositoriesContext';

const Favorites: NextPage = () => {
  const { repositories, favorites } = useRepositories();

  return (
    <Layout>
      <List>
        {repositories
          .filter((repository) => favorites?.includes(repository.id))
          .map((repository) => (
            <RepositoryCard key={repository.id} {...repository} />
          ))}
      </List>
    </Layout>
  );
};

export default Favorites;
