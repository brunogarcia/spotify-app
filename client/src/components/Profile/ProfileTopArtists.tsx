import useTopArtists from "../../hooks/useTopArtists";
import { SectionWrapper, ArtistsGrid } from '../../components';
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";

const payload: SpotifyPayload = {
  limit: 10,
  time_range: SpotifyTimeRange.SHORT_TERM,
};

const ProfileTopArtists = () => {
  const { topArtists } = useTopArtists(payload);

  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      { topArtists && topArtists.items && <ArtistsGrid artists={topArtists.items} />}
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
