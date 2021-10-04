# 【Monaca】ニフクラ mobile backend を体験しよう！
![画像1](/readme-img/001.png)

<!-- PJ Update 2020/12 -->
<!-- JS SDK Ver. 3.1.1-->


* 本サンプルは不具合がある場合、issue等から報告いただくようにお願いいたします
* 更新日：2020/12

## 概要
* Monacaを利用して、[ニフクラ mobile backend](https://mbaas.nifcloud.com/)へデータ登録を行うサンプルアプリです
 * 「Start Demo」ボタンをタップするとクラウドにデータが上がります★
* 簡単な操作ですぐに [ニフクラ mobile backend](https://mbaas.nifcloud.com/)を体験いただけます

## ニフクラ mobile backendって何？？
スマートフォンアプリのバックエンド機能（プッシュ通知・データストア・会員管理・ファイルストア・SNS連携・位置情報検索・スクリプト）が**開発不要**、しかも基本**無料**(注1)で使えるクラウドサービス！今回はデータストアを体験します

注1：詳しくは[こちら](https://mbaas.nifcloud.com/price.htm)をご覧ください

![画像2](/readme-img/002.png)

## 動作環境

Javascript SDK v3.1.1は導入済み

### iOS

* Mac OS X 10.15.6 (Catalina)
* iPhoneX iOS 13.5.1

### Android

* Mac OS X 10.15.6 (Catalina)
* Simulator: Pixel 2 Android OS Version 10

※上記内容で動作確認をしています。


## 手順
### 1. [ニフクラ mobile backend](https://mbaas.nifcloud.com/)の会員登録とログイン→アプリ作成

* 上記リンクから会員登録（無料）をします。登録ができたらログインをすると下図のように「アプリの新規作成」画面が出るのでアプリを作成します

![画像3](/readme-img/003.png)

* アプリ作成されると下図のような画面になります
* この２種類のAPIキー（アプリケーションキーとクライアントキー）はXcodeで作成するiOSアプリに[ニフクラ mobile backend](https://mbaas.nifcloud.com/)を紐付けるために使用します

![画像4](/readme-img/004.png)

* この後動作確認でデータが保存される場所も確認しておきましょう

![画像5](/readme-img/005.png)

### 2. Monacaでプロジェクトインポートしてアプリを起動

* [Monaca](https://ja.monaca.io/)にログインします
* 左上の「インポート」をクリックします
* 「インポート方法」で「URL」をクリックします

![画像6_01](/readme-img/006_01.png)

* 「URL」に下記URLをコピーして貼り付け、「次」をクリックします
  * プロジェクトURL： `https://github.com/NIFCLOUD-mbaas/monaca_data_registration.git`
* 「プロジェクト名」を入力し、「プロジェクトのインポート」をクリックします
  * 　プロジェクト名の入力例）「`DBDEMO`」

![画像6_02](/readme-img/006_02.png)

* 作成されたプロジェクトをクリックすると右側に表示される「クラウドIDEで開く」をクリックします

![画像6_03](/readme-img/006_03.png)

* プロジェクトが開き、プレビュー画面が表示されます
* プレビュー画面あるいは[Monacaデバッガー](https://ja.monaca.io/debugger.html)で遊んでみましょう！

※ 動作確認は、プレビュー画面・Monacaデバッガーいずれも__iPhone6__以上の使用を推奨します

### 3. APIキーの設定

* プロジェクトが開いたら、index.htmlを編集します
* 先程[ニフクラ mobile backend](https://mbaas.nifcloud.com/)の管理画面上で確認したAPIキーを貼り付けます

![画像7](/readme-img/007.png)

* それぞれ`YOUR_NCMB_APPLICATION_KEY`と`YOUR_NCMB_CLIENT_KEY`の部分を書き換えます
 * このとき、ダブルクォーテーション（`"`）を消さないように注意してください！
* 書き換え終わったら保存ボタンで保存します

### 4. Monacaデバッガーでの動作確認
* スマートフォン端末でMonacaデバッガーを立ち上げてログインします。
* 最初に設定した、アプリ名（例：DBDEMO）を選択してアプリを起動させてください。

![画像8](/readme-img/008.png)

* 起動したら「Start Demo」ボタンをタップします
* 動作結果が画面に表示されます
 * 保存に成功した場合：「`New object created with objectId: ******`」
 * 保存に失敗した場合：「`Failed to create new object, with error code: ******`」
* objectIdはデータを保存したときに自動で割り振られるIDです
* エラーが発生した場合は、[こちら](https://mbaas.nifcloud.com/doc/current/rest/common/error.html)よりエラー内容を確認いただけます
![画像1](/readme-img/001.png)

* 保存に成功したら、[ニフクラ mobile backend](https://mbaas.nifcloud.com/)の管理画面から「データストア」を確認してみましょう！
* `TestClass`という保存用クラスが作成され、その中にデータが確認できます

## 解説
サンプルプロジェクトに実装済みの内容のご紹介

#### SDKのインポートと初期設定
 * SDKの詳しい導入方法は、mBaaS の[ドキュメント（クイックスタート）](https://mbaas.nifcloud.com/doc/current/introduction/div_quickstart_javascript_monaca.html)をご用意していますので、ご活用ください
 * SDKが最新になっていない場合は、「設定」＞「JS/CSSコンポーネントの追加と削除」から「ncmb」を削除（remove）してから上記ドキュメントを参考に、SDKを入れ直してください

#### ロジック
 * `index.html`にデザインとロジックの両方を書いています
 * `testClass`オブジェクトに対してkey, value形式で値をセット（`set(key, value)`）し、`save()`メソッドを実行すると、非同期にてデータが保存されます

```javascript
// API key.
var applicationKey    = "YOUR_NCMB_APPLICATION_KEY";
var clientKey = "YOUR_NCMB_CLIENT_KEY";
// SDK initialization.
var ncmb = new NCMB(applicationKey, clientKey);

function startDemo() {
    var TestClass = ncmb.DataStore("TestClass");
    var testClass = new TestClass();
    var key   = "message";
    var value = "Hello, NCMB!";
    testClass.set(key, value);
    testClass.save()
         .then(function(testClass) {
            // Save success.
            alert("New object created with objectId: " + testClass.objectId);
        })
        .catch(function(error) {
            // Save failed.
            alert("Failed to create new object, with error code: " + error.text);
        });
}
```

## 参考
* mBaaS(monaca)の[ドキュメント](https://mbaas.nifcloud.com/doc/current/#/Monaca)
* 同じ内容の【iOS・Android】版もご用意しています
  * [iOS](https://github.com/NIFCLOUD-mbaas/iOS-Objective-C_DB_DEMO)
  * [Android](https://github.com/NIFCLOUD-mbaas/android_data_demo)
