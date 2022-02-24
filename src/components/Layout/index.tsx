import Link from 'next/link';
import { useRouter } from 'next/router';
import dates from 'libs/dates';
import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const links = [
  { href: '/', name: 'go to all repositories' },
  { href: '/favorites', name: 'go to favorites' },
];

const Layout = ({ children }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <img src="https://i.imgur.com/kfzHmYa.png" />
        </S.LogoWrapper>
        <S.Title>Trending Repositories Created in the Last Week</S.Title>
        <S.TimeRange>
          {dates.formattedWeekAgoDate} - {dates.formattedTodaysDate}
        </S.TimeRange>
        <S.Navigation>
          {links
            .filter((link) => link.href !== asPath)
            .map((link) => (
              <Link href={link.href} key={link.href}>
                <a>{link.name}</a>
              </Link>
            ))}
        </S.Navigation>
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer></S.Footer>
    </>
  );
};

export default Layout;
