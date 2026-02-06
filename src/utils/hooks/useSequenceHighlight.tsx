// import { useCallback, useRef } from 'react';
// import { useAppDispatch } from '../../store/hooks';
// import {
//   setActiveCharacter,
//   setIsPlayingHighlight,
// } from '../../store/slices/gameDataSlice';
// import { useSelector } from 'react-redux';
// import { selectIsPlayingHighlight } from '../../store/selectors/gameData.selectors';

// type SequenceHighlightProp = string[] | [];

// export const useSequenceHighlight = () => {
//   const isPlayingHighlight = useSelector(selectIsPlayingHighlight);
//   const isCancelledRef = useRef(false);

//   const dispatch = useAppDispatch();

//   const delay = (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   const play = useCallback(
//     async (sequence: SequenceHighlightProp) => {
//       if (isPlayingHighlight || !sequence.length) return;

//       isCancelledRef.current = false;
//       dispatch(setIsPlayingHighlight(true));

//       for (const char of sequence) {
//         if (isCancelledRef.current) break;

//         dispatch(setActiveCharacter(char));
//         await delay(600);
//         dispatch(setActiveCharacter(null));
//         await delay(200);
//       }

//       dispatch(setIsPlayingHighlight(false));
//     },
//     [isPlayingHighlight, dispatch]
//   );

//   const stop = useCallback(() => {
//     isCancelledRef.current = true;
//     dispatch(setActiveCharacter(null));
//     dispatch(setIsPlayingHighlight(false));
//   }, [dispatch]);

//   return {
//     play,
//     stop,
//   };
// };

// export default useSequenceHighlight;
