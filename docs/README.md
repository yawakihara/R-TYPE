# R-TYPE // REQUIEM

**Blenderで制作した3D機体と生体兵器、着脱式フォース、波動砲、8つの独自戦場を備えるブラウザーSTGです。**

[ゲームを開く](https://yawakihara.github.io/R-TYPE/) · [ソースコード](https://github.com/yawakihara/R-TYPE)

![タイトル画面](screenshots/title.jpg)

R-TYPEのゲームデザインに敬意を表した非公式のファン作品です。原作の完全移植ではありません。原作の画像・音源・モデル・コード・ROMは取り込まず、モデルと楽曲を本作用に制作しています。

## 遊ぶ

タイトルの「SORTIE」から難易度を選んで発進します。「FLIGHT TRAINING」では全ステージを自由に選べます。初めての場合はCADETがおすすめです。

- 矢印 / WASD：移動
- C：押している間、連射
- Z / Space / J：押すと通常弾、長押しして離すと波動砲。約1.65秒で最大出力
- X / K：フォースの射出・回収
- Shift：速度を切り替える。Sアイテムで上限アップ
- Q：DRIVEが満タンなら時間減速を発動。クラシック設定では無効
- T：自動連射を切り替える。溜め撃ち中は連射を止める
- Esc / P：ポーズ、F：全画面、M：ミュート

ゲームパッドは左スティック・十字キー、A＝波動砲、B＝フォース、X＝連射、Y＝DRIVE、RB＝速度、START＝ポーズです。タッチ操作にも対応しています。

## 攻略の仕組み

一撃死と地形接触死、チェックポイント復帰を基本とします。ARCADEでは残機3、ミスで装備を失います。CADETは残機5、敵弾を遅くし、装備を保持します。ACEは弾速・攻撃密度が増え、撃ち返し弾があります。

白い補給機を壊してクリスタルを取得するとフォースが到着します。機首側から接触すれば前方、機尾側からなら後方へ合体します。通常弾を防ぎ、射出したフォースは敵に接触してダメージを与え、地形を通過できます。

赤＝螺旋状の対空レーザー、青＝上下の地形で反射するレーザー、黄＝床や天井を這う対地レーザー。3段階まで成長します。Bは防御用ビット、Mは追尾ミサイル、Sは速度強化です。

ボスの核には開閉があります。上下の砲台は個別に破壊できます。予兆線が出るビームは、発射前に射線から逃げてください。最終ボスの核はフォースの直接接触だけが有効です。

50,000点、150,000点、以降150,000点ごとに残機が増えます。敵撃破とすれすれ回避でDRIVEを蓄積し、満タンなら約4.5秒の時間減速と高速チャージを使えます。

## 8つの戦場

1. **DERELICT GATE / 廃墟の向こうへ**：軌道施設の残骸。装甲殻DOORKEEPER。
2. **LIVING ABYSS / 脈打つ深淵**：生体の洞窟。増援を吐き出すGORGON。
3. **SILENT COLOSSUS / 沈黙の巨大戦艦**：戦艦の船体と砲塔を越え、中枢炉へ。
4. **IRON CATHEDRAL / 鉄の大聖堂**：工場の構造物と複数の予兆ビーム。
5. **OSSUARY / 星の墓標**：骨の回廊と、蛇状の尾で戦場を覆うOUROBOROS。
6. **NEURAL STORM / 記憶の迷宮**：神経の迷路と環状の神経弾。
7. **EVENT HORIZON / 還らざる境界**：最終防衛線。多重攻撃のTHE ARBITER。
8. **REQUIEM / 最後の鼓動**：フォースだけで破壊できる始原核ORIGIN。

![生体洞窟のボス戦](screenshots/stage2-boss.jpg)

## 表示・音響

Blender 5.2.2で制作した9種類のモデルをglTF 2.0で読み込みます。金属とセラミックのPBR材質、環境反射、複数光源、ブルーム、装甲の表面テクスチャ、破片・スパーク、奥行きのある構造物をThree.jsで描画します。編集用の[Blenderファイル](../art/requiem-assets.blend)と[制作スクリプト](../tools/make_models.py)を同梱しています。

全11曲をWeb Audioで合成します。MODERNとARCADE FMの音源切替、残響、ステレオディレイ、ドラム、専用効果音を実装しています。SOUND ARCHIVEのEXPORT / WAVから、選択曲の32秒ステレオWAVを保存できます。

波動砲は、溜めるほど低い唸り・金属の共鳴・旋回する電気ノイズがせり上がります。発射時は白い核、青い螺旋状のプラズマ、膨張する余波、残光に、放電音・重低音・飛翔音・ステレオの残響を重ねています。ポーズや画面移動では蓄積音を止めます。

[蓄積から最大出力の発射までの試聴（5秒・WAV）](audio/REQUIEM-wave-cannon-modern.wav)

[ステージ1のBGM試聴ファイル（32秒・WAV）](audio/REQUIEM-01-modern.wav)

描画品質はULTRA / HIGH / BALANCED / PERFORMANCEから選べます。低フレームレートが続く場合は描画解像度・ブルームを自動で段階的に下げます。ブラウザーの非表示・ウィンドウの遮蔽等による制限は別途影響します。

## ローカルで起動

Node.js 22以降を使用します。

```powershell
npm ci
npm test
npm run build
node tools/serve.mjs --dist
```

`http://127.0.0.1:8137`を開きます。`file://`でHTMLを直接開く方法には対応していません。実行時CDNは不要で、静的サーバーと配布物だけで動作します。

モデルの再制作は、インストール済みBlenderで実行します。

```powershell
& 'C:\Program Files\Blender Foundation\Blender 5.2\blender.exe' --background --factory-startup --python tools/make_models.py
npm run build
```

## 検証

[検証記録](VALIDATION.md)に、実施内容と未確認の範囲を分けて記載しています。

波動砲の表示・音響を再確認する場合は、`node node_modules/esbuild/bin/esbuild tests/wave-lab.mjs --bundle --format=esm --outfile=.cache/wave-lab.js`で検証ページ用JSを作り、`node tools/serve.mjs`で起動して`/tests/wave-lab.html`を開きます。製品の描画・音声クラスを使い、3段階×2音源と蓄積音の停止を検証できます。

自動テストの通しプレイは描画なし・被弾無効の練習条件で、通常の射撃・チャージ・フォース操作を使います。人が残機制限内で全ステージをクリアしたという意味ではありません。

表示確認用URLパラメーターは`?stage=1&loadout=3&free=1&qa=1`。stageは1〜8、loadoutは0〜3、free=1で接触ミスなしの練習です。`encounter=boss`はボス戦から開始します。これらは常に練習として起動し、ランキングには記録しません。

## 公開

GitHub Actionsでテスト・ビルド後、distをGitHub Pagesへ公開します。ワークフローは`.github/workflows/pages.yml`です。通常の修正はmainへのpushで反映します。

## 権利・ライブラリ

「R-TYPE」および原作に関する権利は各権利者に帰属します。本作は権利者による公式作品ではなく、関係・提携・承認を示すものではありません。

Three.jsはMIT Licenseで利用しています。ライセンス本文は配布物の`third-party/three-LICENSE.txt`に同梱します。新規コード・モデル・音楽の制作元、依存ライブラリはソースから追跡できます。
