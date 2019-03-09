# noracast

[https://noracast.jp](https://noracast.jp)

# 音源ファイルの作り方

1. GarageBandで編集して書き出し
2. モノラル変換
  ```sh
  ffmpeg -i stereo.mp3 -ac 1 mono.mp3
  ```
3. [Podcast Chapters](https://chaptersapp.com/)でチャプター付与
4. アップロード
  ```sh
  gsutil cp mono.mp3 gs://noracast
  ```