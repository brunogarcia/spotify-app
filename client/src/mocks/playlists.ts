import { SpotifyPlaylist } from "../types/spotify.model";
import getMockTracks from "./tracks";

export default function getMockPlaylists(): SpotifyPlaylist[] {
  return [
    {
      collaborative: true,
      description: "test",
      external_urls: {
        spotify: "test"
      },
      followers: {
        href: "test",
        total: 100
      },
      href: "test",
      id: "001",
      images: [{
        height: 100,
        url: "test",
        width: 100,
      }],
      name: "test 001",
      owner: {
        external_urls: {
          spotify: "test"
        },
        followers: {
          href: "test",
          total: 100
        },
        href: "test",
        id: "011",
        type: "test",
        uri: "test",
        display_name: "test 011",
      },
      public: true,
      snapshot_id: "test",
      tracks: getMockTracks(),
      type: "test",
      uri: "test",
    }
  ];
}