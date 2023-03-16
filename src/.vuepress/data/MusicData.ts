var basePath = '//file.mo7.cc/music/';

interface GetMusicOpt {
  name: string;
  artist: string;
}

interface MusicObj {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc: string;
}

const GetMusicObj = (opt: GetMusicOpt): MusicObj => {
  var MusicPath = `${basePath}${opt.name}-${opt.artist}`;
  return {
    name: opt.name,
    artist: opt.artist,
    url: `${MusicPath}/audio.mp3`,
    cover: `${MusicPath}/cover.webp`,
    lrc: `${MusicPath}/lyrics.lrc`,
  };
};

// 全局音乐列表
export const GlobalMusicList: Array<MusicObj> = [];

GlobalMusicList.push(
  GetMusicObj({
    name: '光年之外',
    artist: 'G.E.M.邓紫棋',
  }),
);
GlobalMusicList.push(
  GetMusicObj({
    name: '泡沫',
    artist: 'G.E.M.邓紫棋',
  }),
);
GlobalMusicList.push(
  GetMusicObj({
    name: '喜欢你',
    artist: 'G.E.M.邓紫棋',
  }),
);
/* 
https://tools.liumingye.cn/music/#/artist/k7jl
*/
