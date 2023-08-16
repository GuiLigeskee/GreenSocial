import "./Profile.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Messages/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// hooks
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";


const Profile = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {user, loading} = useSelector((state) => state.user);
    const {user: userAuth} = useSelector((state) => state.auth);

    // New form and edit form refs
    const newPhotoForm = useRef();
    const editPhotoForm = useRef();


    // load user data
    useEffect(() => {
        dispatch(getUserDetails(id));
    }, [dispatch, id]);

    if(loading) {
        return <p>Carregando...</p>;
    }

    const submitHandle = (e) => {
        e.preventDefault();
    } 

  return (
    <div id="profile">
        <div className="profile-header">
            {user.profileImage && (
                <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
            )}
            <div className="profile-description">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </div>
        </div>
        {id === userAuth._id && (
            <>
                <div className="new-photo" ref={newPhotoForm}>
                    <h3>Compartilhe algum momento seu:</h3>
                    <form onSubmit={submitHandle}>
                        <label>
                            <span>Título da foto:</span>
                            <input type="text" placeholder="insira o título" />
                        </label>
                        <label>
                            <span>Imagem</span>
                            <input type="file" />
                        </label>
                        <input type="submit" value="Postar" />
                    </form>
                </div>
            </>
        )}
    </div>
  )
}

export default Profile