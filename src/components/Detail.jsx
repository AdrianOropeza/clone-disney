import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect, useParams } from 'react-router-dom';
import db from '../firebase';

const Deatil = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        //Movie info
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                //save movie data
                setMovie(doc.data());
            }else{
                //redirigiendo a home
                
            }
        })
    },[])

    return ( 
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt={movie.title} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt="disney" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="Grupo" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                {movie.subTitle}
            </Subtitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
     );
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;
 
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button`
    border: none;
    border-radius: 2px;
    font-size: 15px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    padding: 0px 24px;
    height: 56px;
    background-color: rgb(249, 249, 249);
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    border: 1px solid rgb(249, 249, 249);
    background: rgb(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor:pointer;

    span {
        font-size: 30px;
        color: #fff;

    }

`;

const GroupWatchButton = styled(AddButton)`

    background: rgb(0,0,0);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    opacity: 0.7;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`;
export default Deatil;