import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components/macro";

import movie from "./assets/movie.mp4";
import clip from "./assets/clip.mp4";

import { useReducer, useRef, useEffect } from "react";

const initialState = {
  isPlaying: false,
  isLoading: true
};

const FINISH_LOADING = "FINISH_LOADING";
const TOGGLE_PLAY = "TOGGLE_PLAY";

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return { isPlaying: !state.isPlaying };
    case FINISH_LOADING:
      return { isLoading: false };
    default:
      throw new Error();
  }
}

function ReactionPlayer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const movieRef = useRef(null);

  const onPlayClick = () => {
    dispatch({ type: TOGGLE_PLAY });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(
  //       "LOADED: ",
  //       movieRef.current.getSecondsLoaded(),
  //       " out of ",
  //       movieRef.current.getDuration()
  //     );
  //   }, 10);
  //   return () => clearInterval(interval);
  // }, []);

  const onReady = () => {
    console.log("FINISH_LOADING");
    dispatch({ type: FINISH_LOADING });
  };

  return (
    <SC.ReactionPlayer {...props}>
      <SC.MediaWrapper onClick={onPlayClick}>
        <SC.MovieWrapper>
          <ReactPlayer
            url={[
              {
                src:
                  "https://purplelab.app/video-service/getVideo/admin/fbcaeced65e3078fed3d22756b536761/fbcaeced65e3078fed3d22756b536761",
                type: "video/mp4"
              }
            ]}
            playing={state.isPlaying}
            width="100%"
            height="100%"
            ref={movieRef}
            onReady={onReady}
          ></ReactPlayer>
        </SC.MovieWrapper>

        <SC.CamWrapper>
          <ReactPlayer
            url={[
              {
                src: clip,
                type: "video/mp4"
              }
            ]}
            playing={state.isPlaying}
            width="100%"
            height="100%"
          ></ReactPlayer>
        </SC.CamWrapper>

        <SC.CamWrapper>
          <ReactPlayer
            url={[
              {
                src: clip,
                type: "video/mp4"
              }
            ]}
            playing={state.isPlaying}
            width="100%"
            height="100%"
          ></ReactPlayer>
        </SC.CamWrapper>

        <SC.CamWrapper>
          <ReactPlayer
            url={[
              {
                src: clip,
                type: "video/mp4"
              }
            ]}
            playing={state.isPlaying}
            width="100%"
            height="100%"
          ></ReactPlayer>
        </SC.CamWrapper>

        <SC.CamWrapper>
          <ReactPlayer
            url={[
              {
                src: clip,
                type: "video/mp4"
              }
            ]}
            playing={state.isPlaying}
            width="100%"
            height="100%"
          ></ReactPlayer>
        </SC.CamWrapper>

        <SC.CamWrapper>
          <ReactPlayer
            url={[
              {
                src: clip,
                type: "video/mp4"
              }
            ]}
            playing={state.isPlaying}
            width="100%"
            height="100%"
          ></ReactPlayer>
        </SC.CamWrapper>
      </SC.MediaWrapper>

      {!state.isPlaying && (
        <SC.PlayButton onClick={onPlayClick}>Play</SC.PlayButton>
      )}

      {state.isLoading && "LOADING"}
    </SC.ReactionPlayer>
  );
}

const SC = {
  ReactionPlayer: styled.div`
    display: inline-block;
    position: relative;
  `,
  MediaWrapper: styled.div`
    display: grid;
    justify-content: start;
    grid-template-areas:
      "movie movie 1"
      "movie movie 2"
      "3 4 5";
  `,
  MovieWrapper: styled.div`
    width: 40rem;
    height: 22.5rem;
    grid-area: movie;
  `,
  CamWrapper: styled.div`
    width: 20rem;
    height: 11.25rem;
  `,
  PlayButton: styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  `
};

export default ReactionPlayer;
