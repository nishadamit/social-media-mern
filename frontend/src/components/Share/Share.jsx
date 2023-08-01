import React,{ useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./Share.css";
import { getUserDetails } from "../../utils/user";
import API from "../../constants/api";

const Share = () => {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState('');
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = getUserDetails();

  const handleOnSubmit = async(e) =>{
       e.preventDefault();
       const data = {
           userId: user?._id,
           desc,
           img: "post/1.jpeg"
       }

       try {
        const response =  await API.post('/posts/create', data);
        console.log(response);
       } catch (error) {
        console.error(error)
       }
  }
  return (
    <div className="share-container">
      <div className="share-container-wrapper">
        <div className="share-top">
          <img src={ user?.profilePicture? user?.profilePicture : `${PF}/person/noAvatar.png`} alt="" className="round-image-3" />
          <input
            className="share-top-input-box"
            placeholder={`What's on your mind, ${user?.username}?`}
            value={desc}
            onChange={e => setDesc(e?.target?.value)}
          />
        </div>

        <hr className="share-horizontal-bar" />
        <form className="share-bottom" onSubmit={handleOnSubmit}>
          <div className="share-icon-list">
            <label htmlFor="file" className="share-icon-container">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-icon-text">Photo or Video</span>
              <input 
                  style={{display: 'none'}}
                  id="file"
                  type="file" 
                  accept=".png,.jpeg"
                  onChange={e => setFile(e?.target?.files[0])}
              />
            </label>
            <div className="share-icon-container">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-icon-text">Tag</span>
            </div>
            <div className="share-icon-container">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-icon-text">Location</span>
            </div>
            <div className="share-icon-container">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-icon-text">Feelings</span>
            </div>
          </div>
          <button className="share-button" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
};

export default Share;
