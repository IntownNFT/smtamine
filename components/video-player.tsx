"use client"
import YouTube from 'react-youtube';
import { Card } from "@/components/ui/card";

interface VideoPlayerProps {
  videoSrc?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      controls: 1,
      showinfo: 0,
      fs: 1,
    },
  };

  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden">
      <div className="aspect-video relative">
        <YouTube
          videoId="Mku4Kjgcl9s"
          opts={opts}
          className="absolute inset-0"
          iframeClassName="w-full h-full"
        />
      </div>
    </Card>
  );
}