import { usePlaylists } from "../../hooks";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  PlaylistsGrid,
} from '../../components';

const ProfilePlaylists = () => {
  const { isLoading, error, playlists } = usePlaylists({ limit: 10 });

  return (
    <SectionWrapper title="Playlists" seeAllLink="/playlists">
      {
        isLoading ? <LoaderList /> :
        error ? <ErrorMessage message={"No playlists available"} /> :
        playlists && <PlaylistsGrid playlists={playlists.items} />
      }
    </SectionWrapper>
  );
};

export default ProfilePlaylists;
