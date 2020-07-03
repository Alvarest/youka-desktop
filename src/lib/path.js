const os = require("os");
const platform = os.platform();
const join = require("path").join;
const HOME_PATH = require("os").homedir();
const BINARIES_PATH = join(HOME_PATH, ".youka", "binaries");
const DOWNLOAD_PATH = join(HOME_PATH, ".youka", "downloads");
const CACHE_PATH = join(HOME_PATH, ".youka", "cache");
const ROOT = join(HOME_PATH, ".youka", "youtube");

const ytdlNames = {
  win32: "youtube-dl.exe",
  darwin: "youtube-dl",
  linux: "youtube-dl",
};
const YOUTUBE_DL_PATH = join(BINARIES_PATH, ytdlNames[platform]);

const ffmpegNames = {
  win32: "ffmpeg.exe",
  darwin: "ffmpeg",
  linux: "ffmpeg",
};
const FFMPEG_PATH = join(BINARIES_PATH, ffmpegNames[platform]);

const MSVCR_NAME = "msvcr100.dll";
const MSVCR_PATH = join(BINARIES_PATH, MSVCR_NAME);

const soundStretchNames = {
  win32: "soundstretch.exe",
  darwin: "soundstretch",
  linux: "soundstretch",
};
const SOUND_STRETCH_PATH = join(BINARIES_PATH, soundStretchNames[platform]);

module.exports = {
  MSVCR_PATH,
  HOME_PATH,
  ROOT,
  BINARIES_PATH,
  FFMPEG_PATH,
  YOUTUBE_DL_PATH,
  DOWNLOAD_PATH,
  SOUND_STRETCH_PATH,
  CACHE_PATH,
};
