import Layout from "../components/Layout";
import Link from "next/link";
import TutorialCard from "../components/Tutorial/TutorialCard";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { motion } from "framer-motion";

const FETCH_USER_PLAYLISTS = gql`
  query GetUserPlaylists {
    user_playlists(where: { user_id: { _eq: 2 } }) {
      playlist {
        id
        title
        description
        thumbnail
        playlist_id
        channel
      }
    }
  }
`;

function Subscriptions(user) {
  const { loading, error, data } = useQuery(FETCH_USER_PLAYLISTS);

  return (
    <Layout user={user}>
      {loading ? (
        "Loading your library"
      ) : data.user_playlists.length == 0 ? (
        <div>
          <h3 className="page-header is-size-3">
            Add your first <Link href="/topics">tutorial!</Link>
          </h3>
        </div>
      ) : (
        <ul className="subscriptions-list">
          {data.user_playlists.map(up => (
            <li key={up.playlist.id}>
              <TutorialCard tutorial={up} />
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export default Subscriptions;
