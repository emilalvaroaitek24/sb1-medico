import { Button } from "@/components/ui/button";
import { Mic, CircleStopIcon as Stop, Send } from 'lucide-react';

interface RecordingControlsProps {
  isRecording: boolean;
  hasAudioBlob: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onSubmitTranscription: () => void;
}

export function RecordingControls({
  isRecording,
  hasAudioBlob,
  onStartRecording,
  onStopRecording,
  onSubmitTranscription
}: RecordingControlsProps) {
  return (
    <div className="space-y-4">
      {!isRecording ? (
        <Button onClick={onStartRecording} className="w-full">
          <Mic className="mr-2 h-4 w-4" /> Start Recording
        </Button>
      ) : (
        <Button onClick={onStopRecording} variant="destructive" className="w-full">
          <Stop className="mr-2 h-4 w-4" /> Stop Recording
        </Button>
      )}

      {hasAudioBlob && (
        <Button onClick={onSubmitTranscription} className="w-full bg-blue-500 hover:bg-blue-600">
          <Send className="mr-2 h-4 w-4" /> Submit for Transcription
        </Button>
      )}
    </div>
  );
}