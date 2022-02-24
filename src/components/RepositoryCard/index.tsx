import { useRepositories } from 'context/RepositoriesContext';
import { Repository } from 'libs/types';
import { Star, PlusCircle, Trash } from 'react-feather';
import * as S from './styles';

type Props = Repository;

const RepositoryCard = ({
  id,
  html_url,
  name,
  description,
  stargazers_count,
}: Props): JSX.Element => {
  const { favorites, addFavorites, removeFavorites } = useRepositories();

  const favoriteIndex = favorites.indexOf(id);
  const lastDight = id % 10;

  return (
    <S.RepositoryCard lastDight={lastDight}>
      <S.Name href={html_url} target="_blank" rel="noopener noreferrer">
        <h2>{name}</h2>
      </S.Name>
      <div>{description}</div>

      <S.Actions>
        <S.StarsCounter>
          <Star color="yellow" /> <span>{stargazers_count}</span>
        </S.StarsCounter>

        {favoriteIndex < 0 && (
          <button onClick={() => addFavorites(id)}>
            <PlusCircle color="white" />
          </button>
        )}

        {favoriteIndex >= 0 && (
          <button onClick={() => removeFavorites(id)}>
            <Trash color="white" />
          </button>
        )}
      </S.Actions>
    </S.RepositoryCard>
  );
};

export default RepositoryCard;
