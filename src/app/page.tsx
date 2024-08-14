'use client';

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const initialTranscript = [
    { word: 'This', start_time: 0, duration: 400 },
    { word: 'is', start_time: 400, duration: 200 },
    { word: 'a', start_time: 600, duration: 100 },
    { word: 'test', start_time: 700, duration: 500 },
    { word: 'transcript', start_time: 1200, duration: 800 },
    { word: 'designed', start_time: 2000, duration: 600 },
    { word: 'to', start_time: 2600, duration: 200 },
    { word: 'help', start_time: 2800, duration: 300 },
    { word: 'test', start_time: 3100, duration: 400 },
    { word: 'the', start_time: 3500, duration: 200 },
    { word: 'playback', start_time: 3700, duration: 700 },
    { word: 'and', start_time: 4400, duration: 300 },
    { word: 'editing', start_time: 4700, duration: 600 },
    { word: 'features', start_time: 5300, duration: 500 },
    { word: 'of', start_time: 5800, duration: 200 },
    { word: 'the', start_time: 6000, duration: 150 },
    { word: 'transcript', start_time: 6150, duration: 700 },
    { word: 'editor', start_time: 6850, duration: 600 },
    { word: 'application.', start_time: 7450, duration: 900 },
    { word: 'This', start_time: 8350, duration: 400 },
    { word: 'script', start_time: 8750, duration: 500 },
    { word: 'contains', start_time: 9250, duration: 600 },
    { word: 'multiple', start_time: 9850, duration: 700 },
    { word: 'words', start_time: 10550, duration: 500 },
    { word: 'with', start_time: 11050, duration: 300 },
    { word: 'various', start_time: 11350, duration: 500 },
    { word: 'start', start_time: 11850, duration: 400 },
    { word: 'times', start_time: 12250, duration: 400 },
    { word: 'and', start_time: 12650, duration: 300 },
    { word: 'durations', start_time: 12950, duration: 700 },
    { word: 'to', start_time: 13650, duration: 200 },
    { word: 'mimic', start_time: 13850, duration: 500 },
    { word: 'a', start_time: 14350, duration: 100 },
    { word: 'realistic', start_time: 14450, duration: 800 },
    { word: 'transcript', start_time: 15250, duration: 700 },
    { word: 'scenario.', start_time: 15950, duration: 900 },
    { word: 'Testing', start_time: 16850, duration: 600 },
    { word: 'involves', start_time: 17450, duration: 700 },
    { word: 'starting', start_time: 18150, duration: 600 },
    { word: 'the', start_time: 18750, duration: 200 },
    { word: 'playback', start_time: 18950, duration: 700 },
    { word: 'from', start_time: 19650, duration: 400 },
    { word: 'different', start_time: 20050, duration: 600 },
    { word: 'points', start_time: 20650, duration: 500 },
    { word: 'and', start_time: 21150, duration: 300 },
    { word: 'verifying', start_time: 21450, duration: 700 },
    { word: 'that', start_time: 22150, duration: 200 },
    { word: 'words', start_time: 22350, duration: 500 },
    { word: 'are', start_time: 22850, duration: 200 },
    { word: 'highlighted', start_time: 23050, duration: 800 },
    { word: 'correctly', start_time: 23850, duration: 700 },
    { word: 'and', start_time: 24550, duration: 300 },
    { word: 'the', start_time: 24850, duration: 200 },
    { word: 'timing', start_time: 25050, duration: 500 },
    { word: 'is', start_time: 25550, duration: 200 },
    { word: 'accurate.', start_time: 25750, duration: 800 },
    { word: 'Ensure', start_time: 26550, duration: 600 },
    { word: 'that', start_time: 27150, duration: 200 },
    { word: 'the', start_time: 27350, duration: 200 },
    { word: 'stop', start_time: 27550, duration: 400 },
    { word: 'button', start_time: 27950, duration: 500 },
    { word: 'works', start_time: 28450, duration: 400 },
    { word: 'as', start_time: 28850, duration: 200 },
    { word: 'expected', start_time: 29050, duration: 600 },
    { word: 'by', start_time: 29650, duration: 200 },
    { word: 'interrupting', start_time: 29850, duration: 800 },
    { word: 'the', start_time: 30650, duration: 200 },
    { word: 'playback', start_time: 30850, duration: 700 },
    { word: 'and', start_time: 31550, duration: 300 },
    { word: 'clearing', start_time: 31850, duration: 600 },
    { word: 'any', start_time: 32450, duration: 300 },
    { word: 'highlighted', start_time: 32750, duration: 700 },
    { word: 'The', start_time: 34050, duration: 200 },
    { word: 'application', start_time: 34250, duration: 800 },
    { word: 'should', start_time: 35050, duration: 500 },
    { word: 'handle', start_time: 35550, duration: 400 },
    { word: 'long', start_time: 35950, duration: 300 },
    { word: 'transcripts', start_time: 36250, duration: 700 },
    { word: 'without', start_time: 36950, duration: 500 },
    { word: 'any', start_time: 37450, duration: 300 },
    { word: 'performance', start_time: 37750, duration: 800 },
    { word: 'issues.', start_time: 38550, duration: 600 },
    { word: 'It', start_time: 39150, duration: 200 },
    { word: 'is', start_time: 39350, duration: 200 },
    { word: 'important', start_time: 39550, duration: 700 },
    { word: 'to', start_time: 40250, duration: 200 },
    { word: 'test', start_time: 40450, duration: 400 },
    { word: 'the', start_time: 40850, duration: 200 },
    { word: 'application', start_time: 41050, duration: 800 },
    { word: 'under', start_time: 41850, duration: 400 },
    { word: 'various', start_time: 42250, duration: 500 },
    { word: 'conditions', start_time: 42750, duration: 700 },
    { word: 'to', start_time: 43450, duration: 200 },
    { word: 'ensure', start_time: 43650, duration: 500 },
    { word: 'reliability.', start_time: 44150, duration: 800 },
    { word: 'This', start_time: 44950, duration: 400 },
    { word: 'includes', start_time: 45350, duration: 600 },
    { word: 'testing', start_time: 45950, duration: 500 },
    { word: 'with', start_time: 46450, duration: 300 },
    { word: 'different', start_time: 46750, duration: 600 },
    { word: 'types', start_time: 47350, duration: 400 },
    { word: 'of', start_time: 47750, duration: 200 },
    { word: 'transcripts', start_time: 47950, duration: 700 },
    { word: 'and', start_time: 48650, duration: 300 },
    { word: 'various', start_time: 48950, duration: 500 },
    { word: 'lengths.', start_time: 49450, duration: 600 },
    { word: 'Additionally,', start_time: 50050, duration: 900 },
    { word: 'the', start_time: 50950, duration: 200 },
    { word: 'user', start_time: 51150, duration: 300 },
    { word: 'interface', start_time: 51450, duration: 700 },
    { word: 'should', start_time: 52150, duration: 500 },
    { word: 'be', start_time: 52650, duration: 200 },
    { word: 'intuitive', start_time: 52850, duration: 700 },
    { word: 'and', start_time: 53550, duration: 300 },
    { word: 'easy', start_time: 53850, duration: 300 },
    { word: 'to', start_time: 54150, duration: 200 },
    { word: 'use.', start_time: 54350, duration: 400 },
    { word: 'User', start_time: 54750, duration: 400 },
    { word: 'feedback', start_time: 55150, duration: 600 },
    { word: 'is', start_time: 55750, duration: 200 },
    { word: 'crucial', start_time: 55950, duration: 500 },
    { word: 'for', start_time: 56450, duration: 300 },
    { word: 'improving', start_time: 56750, duration: 600 },
    { word: 'the', start_time: 57350, duration: 200 },
    { word: 'application.', start_time: 57550, duration: 800 },
    { word: 'Regular', start_time: 58350, duration: 600 },
    { word: 'updates', start_time: 58950, duration: 500 },
    { word: 'and', start_time: 59450, duration: 300 },
    { word: 'bug', start_time: 59750, duration: 300 },
    { word: 'fixes', start_time: 60050, duration: 400 },
    { word: 'are', start_time: 60450, duration: 200 },
    { word: 'necessary', start_time: 60650, duration: 700 },
    { word: 'to', start_time: 61350, duration: 200 },
    { word: 'maintain', start_time: 61550, duration: 600 },
    { word: 'a', start_time: 62150, duration: 100 },
    { word: 'high', start_time: 62250, duration: 300 },
    { word: 'level', start_time: 62550, duration: 400 },
    { word: 'of', start_time: 62950, duration: 200 },
    { word: 'performance.', start_time: 63150, duration: 800 },
    { word: 'The', start_time: 63950, duration: 200 },
    { word: 'development', start_time: 64150, duration: 800 },
    { word: 'team', start_time: 64950, duration: 400 },
    { word: 'should', start_time: 65350, duration: 500 },
    { word: 'focus', start_time: 65850, duration: 400 },
    { word: 'on', start_time: 66250, duration: 200 },
    { word: 'user', start_time: 66450, duration: 300 },
    { word: 'experience', start_time: 66750, duration: 700 },
    { word: 'and', start_time: 67450, duration: 300 },
    { word: 'usability.', start_time: 67750, duration: 800 },
    { word: 'This', start_time: 68550, duration: 400 },
    { word: 'will', start_time: 68950, duration: 300 },
    { word: 'ensure', start_time: 69250, duration: 500 },
    { word: 'that', start_time: 69750, duration: 200 },
    { word: 'the', start_time: 69950, duration: 200 },
    { word: 'application', start_time: 70150, duration: 800 },
    { word: 'meets', start_time: 70950, duration: 400 },
    { word: 'the', start_time: 71350, duration: 200 },
    { word: 'needs', start_time: 71550, duration: 400 },
    { word: 'of', start_time: 71950, duration: 200 },
    { word: 'its', start_time: 72150, duration: 200 },
    { word: 'users.', start_time: 72350, duration: 500 },
  ];

  const dialogRef = useRef<HTMLDivElement>(null);
  let [selected, setSelected] = useState(-1);
  const [transcript, setTranscript] = useState(initialTranscript);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const stopRef = useRef<HTMLButtonElement>(null);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  let playing = false;
  let active = -1;
  let timeouts: NodeJS.Timeout[] = [];

  useEffect(() => {
    return () => {
      if (active > -1) refs.current[active]?.classList.remove('bg-orange-400');
      clearTimeouts();
    }
  }, [selected])

  let words = transcript.map((word, index) => (
    <span
      key={index}
      ref={(el) => {if (el) refs.current[index] = el}}
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
      playing = false
      timeouts = [];
      active = -1;
      return;
    }

    let wordRef = refs.current[index];
    if (!wordRef) return;
    wordRef.classList.add('bg-orange-400');
    active = index;
    wordRef.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      wordRef.classList.remove('bg-orange-400');
      if (index == transcript.length - 1) {
        playing = false
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
        <div className="textarea border border-gray-400 p-5 rounded h-full cursor-default select-none overflow-scroll">
          {words}
        </div>
      </div>
      <div className="flex gap-4 justify-between w-[60%]">
        <div>
          <button
            className="font-semibold bg-orange-500 m-1 py-1 p-2 rounded"
            onClick={() => {
              if (active > -1) refs.current[active]?.classList.remove('bg-orange-400');
              clearTimeouts();
              playing = true
              playback(0);
            }}
          >Start from Beginning</button>
          <button
            className="font-semibold bg-orange-500 m-1 py-1 p-2 rounded disabled:opacity-50"
            disabled={selected == -1}
            onClick={() => {
              if (active > -1) refs.current[active]?.classList.remove('bg-orange-400');
              clearTimeouts();
              playing = true
              playback(selected);
            }}
          >Start from Selected</button>
        </div>
        <button
          className="font-semibold bg-orange-700 m-1 py-1 p-2 rounded disabled:opacity-50"
          ref={stopRef}
          onClick={() => {
            clearTimeouts();
            if (active > -1) refs.current[active]?.classList.remove('bg-orange-400');
            playing = false
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
