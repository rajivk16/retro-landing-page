import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const sound = new Howl({
    src: ['/audio/your-audio-file.mp3'],
    loop: true
  });

  const togglePlay = () => {
    if (playing) {
      sound.pause();
    } else {
      sound.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    return () => {
      sound.unload();
    };
  }, []);

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 left-4 p-2 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg font-retro text-lg"
    >
      {playing ? <SpeakerXMarkIcon className="h-6 w-6 text-white" /> : <SpeakerWaveIcon className="h-6 w-6 text-white" />}
    </button>
  );
};

export default AudioPlayer;
