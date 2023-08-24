import "./Search.css";

// Hooks
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useResetComponentMessage} from '../../hooks/useResetComponentMessage';
import { useQuery } from "../../hooks/useQuery";

// components
import LikeContainer from "../../components/LikeContainer/LikeContainer";
import PhotoItem from "../../components/Photo/PhotoItem";
import { Link } from "react-router-dom";

// redux
import { searchPhotos, like } from "../../slices/photoSlice";

const Search = () => {
    const query = useQuery();
    const search = query.get("q");
  
    const dispatch = useDispatch();
  
    const resetMessage = useResetComponentMessage(dispatch);
  
    const { user } = useSelector((state) => state.auth);
    const { photos, loading } = useSelector((state) => state.photo);
  
    // Load all photos
    useEffect(() => {
      dispatch(searchPhotos(search));
    }, [dispatch, search]);
  
    const handleLike = (photo = null) => {
      dispatch(like(photo._id));
  
      resetMessage();
    };
  
    if (loading) {
      return <p>Carregando...</p>;
    }
  
    return (
      <div id="search">
        <h2>Você está buscando por: {search}</h2>
        {photos &&
          photos.map((photo) => (
            <div key={photo._id}>
              <PhotoItem photo={photo} />
              <LikeContainer photo={photo} user={user} handleLike={handleLike} />
              <Link className="btn" to={`/photos/${photo._id}`}>
                Ver mais
              </Link>
            </div>
          ))}
      </div>
    );
  };
  

export default Search