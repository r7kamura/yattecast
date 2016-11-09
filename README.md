# Yattecast

Podcastを一瞬ではじめられるテンプレート

![image](/images/screenshot.png)

## 特徴

- 記事と音源を配置するだけでPodcastを公開できます
- GitHub Pagesを利用して無料でサイトを運用できます
- https://yatteiki.fm/ などで利用されています

## 使い方

1. フォークして
2. `_config.yml` を書き換えて
3. `_posts/` 以下に記事を置いて
4. `_audio/` 以下に音源を置いて
5. PushすればOK

### プレビュー

Rubyが動く環境を用意できる場合は、以下のコマンドでプレビュー用のサーバを起動できます。

```bash
bundle install
bundle exec jekyll serve
```

### GitHub Pages

リポジトリの名前を `username.github.io` というパターン (例: [yatteikifm.github.io](https://github.com/yatteikifm/yatteikifm.github.io)) にすると、masterブランチにPushしたものがGitHub Pagesで公開されます。それ以外のパターンのリポジトリ名を利用する場合は、gh-pagesブランチにPushしたものがGitHub Pagesで公開されます。

### GitHubの容量制限

GitHubでは通常、1ファイルあたり最大100MBまのファイルしか配置できません。これは64kbpsのmp3ファイル約3時間分の大きさにあたります。
