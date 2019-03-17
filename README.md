# noracast

[https://noracast.jp](https://noracast.jp)

# 音源ファイルの作り方

1. GarageBandで編集して書き出し
2. [Podcast Chapters](https://chaptersapp.com/)でチャプター付与（AACの場合は[Forecast](https://overcast.fm/forecast)が使える）
3. モノラル変換
  ```sh
  ffmpeg -i stereo.mp3 -ac 1 mono.mp3
  ```
4. アップロード
  ```sh
  gsutil cp mono.mp3 gs://noracast
  ```
  
順番的に、最後にffmpegを通すのが良さそう。 → [Ref](https://gist.github.com/naokazuterada/5cb8798881a146faca790a2ff86415c7)
