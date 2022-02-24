import type { NextPage } from 'next';
import Layout from 'components/Layout';
import List from 'components/List';
import RepositoryCard from 'components/RepositoryCard';
import { useRepositories } from 'context/RepositoriesContext';

const Index: NextPage = () => {
  const { repositories } = useRepositories();

  return (
    <Layout>
      <List>
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} {...repository} />
        ))}
      </List>
    </Layout>
  );
};

export default Index;
