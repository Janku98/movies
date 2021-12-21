import React from 'react';
import TMDBImage from './TMDBImage';
import './styles/MovieMiniature.css';
import Modal from './Modal';
import { useModal } from './hooks/useModal';

export default function MovieMiniature(props) {
  
    const [isOpen, openModal, closeModal]=useModal(false);

    const handleClick = () =>{
      const {movie, onSelect} = props;
      onSelect(movie);
      openModal()
    };
  
    const {movie: {title, vote_average, poster_path, original_language, original_title, overview, release_date, }} = props;

    return(
      <div>
        <div onClick={handleClick} className="imgposter-div">
          <TMDBImage alt="Movie Poster" src={poster_path} className="imgposter"/>
        </div>
        
        <div >
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <div>
                <div className="modalTitle">
                  <h1>{title}</h1><h6>({original_title})</h6> 
                </div>
                
                <div>
                  <p>{overview}</p>
                </div>

                <div className="modalSubTitle">
                  <h6>Release Date: {release_date}</h6>
                  <h6>Original Language: {original_language}</h6>
                  <h6>vote Average: {vote_average}</h6>
                </div>

            </div>
            <div>
              <TMDBImage alt="Movie Poster" src={poster_path} className="modal-imgposter"/>
            </div>
          </Modal>
        </div>
          
      </div>
    )
  };