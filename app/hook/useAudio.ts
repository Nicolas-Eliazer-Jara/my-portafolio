export const useAudio = (src: string) => {
    const play = () => new Audio(src).play();
    return play;
  };
  