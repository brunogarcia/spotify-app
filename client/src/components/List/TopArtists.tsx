import { useState } from "react";
import { useUserArtists } from "../../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  ArtistsGrid,
  TimeRangeButtons,
} from '..';

const TopArtists = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const { error, loading, topArtists } = useUserArtists(payload);

  return (
    <main>
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={payload.time_range}
          setActiveRange={(time_range: SpotifyTimeRange) => setPayload({
            ...payload,
            time_range
          })}
        />
        {
          loading ? <LoaderList /> :
          error ? <ErrorMessage message={"No artists available"} /> :
          topArtists && <ArtistsGrid artists={topArtists.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default TopArtists;