const basePath = "//file.mo7.cc/music/";

interface GetMusicOptions {
  name: string;
  artist: string;
}

interface MusicInfo {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc: string;
}

const getMusicInfo = (opt: GetMusicOptions): MusicInfo => {
  const musicPath = `${basePath}${opt.name}-${opt.artist}`;

  return {
    name: opt.name,
    artist: opt.artist,
    url: `${musicPath}/audio.mp3`,
    cover: `${musicPath}/cover.webp`,
    lrc: `${musicPath}/lyrics.lrc`,
  };
};

// 全局音乐列表
export const globalMusicList: MusicInfo[] = [];

globalMusicList.push(
  getMusicInfo({
    name: "光年之外",
    artist: "G.E.M.邓紫棋",
  })
);
globalMusicList.push(
  getMusicInfo({
    name: "泡沫",
    artist: "G.E.M.邓紫棋",
  })
);
globalMusicList.push(
  getMusicInfo({
    name: "喜欢你",
    artist: "G.E.M.邓紫棋",
  })
);
/* 
https://tools.liumingye.cn/music/#/artist/k7jl
*/
