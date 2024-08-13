'use client';

import { useRef, useState } from "react";

export default function Home() {
  const initialTranscript = [
    { word: 'Hello', start_time: 0, duration: 500 },
    { word: 'world', start_time: 500, duration: 700 },
    { word: 'This', start_time: 1200, duration: 300 },
    { word: 'is', start_time: 1500, duration: 200 },
    { word: 'a', start_time: 1700, duration: 100 },
    { word: 'test', start_time: 1800, duration: 400 },
    { word: 'transcript', start_time: 2200, duration: 600 },
    { word: 'for', start_time: 2800, duration: 200 },
    { word: 'playback', start_time: 3000, duration: 500 },
    { word: 'and', start_time: 3500, duration: 250 },
    { word: 'editing', start_time: 3750, duration: 800 },
    { word: 'features.', start_time: 4550, duration: 650 },
  ];

  const dialogRef = useRef<HTMLDivElement>(null);
  let [selected, setSelected] = useState(-1);
  const [transcript, setTranscript] = useState(initialTranscript);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const playPauseRef = useRef<HTMLButtonElement>(null);
  const stopRef = useRef<HTMLButtonElement>(null);
  let playing = false;
  const setPlaying = (value: boolean) => {
    playing = value;
    if (playPauseRef.current) {
      playPauseRef.current.innerText = (value ? "Stop" : "Play");
    }
  }
  let active = -1;
  let timeouts: NodeJS.Timeout[] = [];

  const refs = transcript.map(() => useRef<HTMLSpanElement>(null));

  let words = transcript.map((word, index) => (
    <span
      key={index}
      ref={refs[index]}
      onClick={() => {
        setSelected(index);
      }}
      onDoubleClick={(e) => {
        setShowDialog(true);
        let { x, y, height } = (e.target as HTMLSpanElement).getBoundingClientRect();
        y += height;
        if (dialogRef.current) {
          dialogRef.current.style.left = `${x}px`;
          dialogRef.current.style.top = `${y}px`;
        }
        setDialogText(word.word);
      }}
      className={`inline-block p-0.5 hover:bg-gray-700 rounded border border-transparent ${selected == index && "!border-orange-300"}`}>{word.word}</span>
  ))

  const playback = (index: number) => {
    if (index >= transcript.length || !playing) {
      setPlaying(false);
      timeouts = [];
      active = -1;
      return;
    }

    let wordRef = refs[index].current;
    if (!wordRef) return;
    wordRef.classList.add('bg-orange-400');
    active = index;

    setTimeout(() => {
      wordRef.classList.remove('bg-orange-400');
      if (index == transcript.length - 1) {
        setPlaying(false);
      }
    }, transcript[index].duration);

    if (index == transcript.length - 1) return;
    timeouts.push(setTimeout(() => {
      playback(index + 1);
    }, transcript[index + 1].start_time - transcript[index].start_time));
  }

  const clearTimeouts = () => {
    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];
  }

  return (
    <main className="m-10 flex flex-col items-center gap-10">
      <h1 className="font-bold text-2xl">Transcript Editor</h1>
      <div className="bg-[#2d2d2d] p-5 w-[60%] h-96">
        <div className="textarea border border-gray-400 p-5 rounded h-full cursor-default select-none">
          {words}
        </div>
      </div>
      <div className="flex gap-4 justify-between w-[60%]">
        <div>
          <button
            className="font-semibold bg-orange-500 m-1 py-1 p-2 rounded"
            onClick={() => {
              if (active > -1) refs[active].current?.classList.remove('bg-orange-400');
              clearTimeouts();
              setPlaying(true);
              playback(0);
            }}
          >Start from Beginning</button>
          <button
            className="font-semibold bg-orange-500 m-1 py-1 p-2 rounded disabled:opacity-50"
            disabled={selected == -1}
            onClick={() => {
              if (active > -1) refs[active].current?.classList.remove('bg-orange-400');
              clearTimeouts();
              setPlaying(true);
              playback(selected);
            }}
          >Start from Selected</button>
        </div>
        <button
          className="font-semibold bg-orange-700 m-1 py-1 p-2 rounded disabled:opacity-50"
          // disabled={!playing}
          ref={stopRef}
          onClick={() => {
            if (active > -1) refs[active].current?.classList.remove('bg-orange-400');
            setPlaying(false)
          }}
        >Stop</button>
      </div>
      {<div className={`dialog flex flex-col items-end bg-[#1f1f1f] p-3 rounded-lg fixed text-sm ${!showDialog && "hidden"}`} ref={dialogRef}>
        <input
          type="text"
          value={dialogText}
          className="bg-transparent outline-none border border-gray-300 p-2 rounded-lg"
          onChange={(e) => {
            setDialogText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              if (dialogText == '') return;
              setTranscript(transcript.map((item, index) => {
                if (index == selected) {
                  return { ...item, word: dialogText };
                }
                return item;
              }))
              setShowDialog(false);
            }
          }}
        />
        <div>
          <button
            className="font-semibold bg-[#333333] m-1 py-1 p-2 rounded"
            onClick={() => {
              setShowDialog(false);
            }}
          >
            Cancel
          </button>
          <button
            className="font-semibold bg-orange-400 m-1 py-1 p-2 rounded disabled:opacity-50"
            disabled={dialogText == ''}
            onClick={() => {
              if (dialogText == '') return;
              setTranscript(transcript.map((item, index) => {
                if (index == selected) {
                  return { ...item, word: dialogText };
                }
                return item;
              }))
              setShowDialog(false);
            }}
          >
            Save
          </button>
        </div>
      </div>}
    </main>
  );
}
