import Head from "katatema/head";
import React from "react";
import Style from "../stylesheets/main.scss";

class QuestionCard extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { hidden: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!window.getSelection || window.getSelection().isCollapsed) {
      this.setState({ hidden: !this.state.hidden });
    }
  }

  render() {
    return(
      <div className="card card-clickable" onClick={this.handleClick}>
        <div className="card-body">
          Q. {this.props.question}
        </div>
        <div className={`card-body${this.state.hidden ? " hidden" : ""}`}>
          A. {this.props.children}
        </div>
      </div>
    );
  }
}

export default class Index extends React.Component {
  render() {
    return(
      <div>
        <Head>
          <meta charSet="utf-8"/>
          <title>Yattecast - Podcastサイトをつくるためのテンプレート</title>
          <meta name="viewport" content="width=device-width"/>
          <meta name="description" content="Podcastサイトをつくるためのテンプレート"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:description" content="Podcastサイトをつくるためのテンプレート"/>
          <meta name="twitter:title" content="Yattecast"/>
          <meta property="og:description" content="Podcastサイトをつくるためのテンプレート"/>
          <meta property="og:site_name" content="Yattecast"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://r7kamura.github.io/yattecast/"/>
        </Head>
        <Style/>
        <main className="main">
          <section className="main-section">
            <div className="container">
              <h1 className="hero-heading">
                Yattecast
              </h1>
              <p className="hero-description">
                Podcastサイトをつくるためのテンプレート
              </p>
              <h2 className="hero-sub-heading">
                簡単・便利・最高
              </h2>
              <p className="hero-description">
                サイトを公開するには、録音した音源と説明文をGitHubに置くだけ。<br className="hidden-extra-small"/>
                再生用のプレーヤーやiTunes用のRSSフィードなども自動で用意されます。
              </p>
              <div className="hero-button-wrapper">
                <a href="https://github.com/r7kamura/yattecast" className="button button-default">
                  GitHubでforkして使う
                </a>
              </div>
            </div>
          </section>
          <section className="main-section">
            <div className="container">
              <img src="https://cloud.githubusercontent.com/assets/111689/20457744/38c370fe-aed5-11e6-8344-751294065161.png" alt="demo" className="demo-image"/>
              <p>
                デモサイト:
                <a href="https://yatteiki.fm" target="_blank">yatteiki.fm</a>
              </p>
            </div>
          </section>
          <section className="main-section">
            <div className="container">
              <h1 className="main-section-heading">
                Podcastに役立つ機能
              </h1>
              <div className="row">
                <div className="column-small-4 feature">
                  <div className="feature-image" style={{ backgroundImage: "url(https://cloud.githubusercontent.com/assets/111689/20546957/18104ec0-b15c-11e6-9ca5-929b61388a09.png)" }}/>
                  <h3 className="feature-heading">
                    シンプルなデザイン
                  </h3>
                  <p className="feature-description">
                    Podcastの主役はあくまで音声。コンテンツを際立たせるためにシンプルなデザインを採用しています。
                  </p>
                </div>
                <div className="column-small-4 feature">
                  <div className="feature-image" style={{ backgroundImage: "url(https://cloud.githubusercontent.com/assets/111689/20546239/4de09e4c-b157-11e6-8db1-2d5fb4adc6b2.png)" }}/>
                  <h3 className="feature-heading">
                    RSSフィード
                  </h3>
                  <p className="feature-description">
                    用意されたデータを元に、iTunesで配信するために必要なRSSフィードを自動で生成します。
                  </p>
                </div>
                <div className="column-small-4 feature">
                  <div className="feature-image" style={{ backgroundImage: "url(https://cloud.githubusercontent.com/assets/111689/20546962/30ff8d1a-b15c-11e6-9211-9a941ac14169.png)" }}/>
                  <h3 className="feature-heading">
                    細かい配慮
                  </h3>
                  <p className="feature-description">
                    倍速再生対応のプレーヤーやTwitterボタンなど、Podcastに便利な機能を予め用意しています。
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="main-section main-section-gray-background">
            <div className="container">
              <h1 className="main-section-heading">
                使い方
              </h1>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-heading">
                    1. リポジトリをfork
                  </h2>
                </div>
                <div className="card-body">
                  <a href="https://github.com/r7kamura/yattecast">r7kamura/yattecast</a> をforkし、適当な名前に変更します。<br className="hidden-extra-small"/>
                  orgname.github.io のようなパターンの名前にするのがおすすめです。
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-heading">
                    2. 設定を変更
                  </h2>
                </div>
                <div className="card-body">
                  _config.yml のサイト名や説明文などを書き換えます。
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-heading">
                    3. 音源を配置
                  </h2>
                </div>
                <div className="card-body">
                  _audioディレクトリにmp3ファイルを配置します。<br className="hidden-extra-small"/>
                  サンプルとして最初から空のmp3ファイルが置かれています。
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-heading">
                    4. 記事を配置
                  </h2>
                </div>
                <div className="card-body">
                  _postsディレクトリに記事を配置します。<br className="hidden-extra-small"/>
                  サンプルの記事ファイルが置かれているので上書きしましょう。
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-heading">
                    5. 変更をpush
                  </h2>
                </div>
                <div className="card-body">
                  以上で変更は完了です。<br className="hidden-extra-small"/>
                  git pushしてサイトを公開・更新しましょう。
                </div>
              </div>
            </div>
          </section>
          <section className="main-section">
            <div className="container">
              <h1 className="main-section-heading">
                よくある質問
              </h1>
              <QuestionCard question="mp3ファイルに容量制限はありますか？">
                GitHub Pagesでは1ファイルあたり100MB以下の容量のファイルをホスティングできます。
              </QuestionCard>
              <QuestionCard question="どのブランチにPushすればGitHub Pagesに公開できますか？">
                orgname.github.io というパターンのリポジトリではmaster、それ以外ではgh-pagesが利用できます。
              </QuestionCard>
              <QuestionCard question="手元でサイトをプレビューするにはどうすれば良いですか？">
                Rubyが動く環境を用意できる場合、bundle exec jekyll serve というコマンドでプレビュー用のサーバを起動できます。
              </QuestionCard>
              <QuestionCard question="iTunes StoreでPodcastを配信するにはどうすれば良いですか？">
                iTunes Store &gt; Poscast &gt; Podcastを送信する より RSSフィードのURL (サイトURLの末尾に /feed.xml を付けると得られます) を登録してください。
              </QuestionCard>
              <QuestionCard question="無料で利用できますか？">
                はい、商用利用の有無を問わず無料でご利用いただけます。<br className="hidden-extra-small"/>
                <a href="https://www.amazon.co.jp/gp/registry/wishlist/31WJYTS73D19K" target="_blank">ほしいものリスト</a> から何か寄付していただけると製作者が喜びます。
              </QuestionCard>
            </div>
          </section>
          <section className="main-section main-section-image-background" style={{ backgroundImage: "url(https://yatteiki.fm/images/header.jpg)" }}>
            <div className="main-section-overlay">
              <div className="container">
                <h2>
                  Podcastをはじめよう
                </h2>
                <p>
                  会話を録音して、Yattecastで公開しよう
                </p>
                <div className="hero-button-wrapper">
                  <a href="https://github.com/r7kamura/yattecast" className="button button-border">
                    GitHubでforkして使う
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <table className="footer-table">
              <tbody>
                <tr>
                  <td>製作</td>
                  <td><a href="https://github.com/r7kamura" target="_blank">r7kamura</a></td>
                </tr>
                <tr>
                  <td>画像提供</td>
                  <td><a href="https://github.com/kkosuge" target="_blank">kkosuge</a></td>
                </tr>
                <tr>
                  <td>デモ提供</td>
                  <td><a href="https://yatteiki.fm" target="_blank">yatteiki.fm</a></td>
                </tr>
                <tr>
                  <td>ソースコード</td>
                  <td><a href="https://github.com/r7kamura/yattecast" target="_blank">yattecast</a></td>
                </tr>
                <tr>
                  <td>サイト生成</td>
                  <td><a href="https://github.com/r7kamura/katatema" target="_blank">katatema</a></td>
                </tr>
                <tr>
                  <td>ライセンス</td>
                  <td><a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </footer>
      </div>
    );
  }
};
