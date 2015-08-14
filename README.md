# Monaca x NIFTYCLOUD mobile backend データー登録サンプル

===

# Overview

こちらはMonacaを利用して、mbaasサーバーにデーター保存するサンプルです。

![overview](readme-img/overview.JPG "概要図") 

## Demo

MonacaでgithubのURLをインポートし、
アプリキーとクライントキーを設定し、StartDemoボタンをおすと
mobile backend画面では{"message":"Hello, NCMB!"}データーが登録されることを確認します。

![demo1](readme-img/demo1.JPG "起動画面") 
![demo2](readme-img/demo2.JPG "登録完了") 

## Description

* コードの説明

```JavaScript
        var appKey    = "YOUR_APPKEY";
        var clientKey = "YOUR_KEY";
        
        ///// Called when app launch
        $(function() {
          NCMB.initialize(appKey, clientKey);
        });
    
        function startDemo() {
            var TestClass = NCMB.Object.extend("TestClass");
            var testClass = new TestClass();
            var key   = "message";
            var value = "Hello, NCMB!"; 
            testClass.set(key, value);
            testClass.save(null, {
                success: function(savedObject) {
                    // 保存完了後に実行される
                    alert("New object created with objectId: " + savedObject.id);
                },
                error: function(savedObject, error) {
                    // エラー時に実行される
                    alert("Failed to create new object, with error code: " + error.message);
                }
            });   
        }()
```
上記のコードでキーを指定し、NCMB.initialize(appKey, clientKey), mBaaSサーバーと連携を行います。
"TestClass"という名前を設定しデータークラスを指定します。testClassオブジェクトを利用して、データーを操作します。
```
        var key   = "message";
        var value = "Hello, NCMB!"; 
        testClass.set(key, value);
```
testClassのデーターを指定し、key, valueを設定した上、save()を実行すると、非同期データーが保存されます。
success, errorではそれぞれ保存を行った時のcallbackを定義してあります。

## Requirement

* Monaca環境
* Nifty cloud mobile backend Javascript SDK version 1.2.6
ダウンロード：[Javascript SDK]()

## Installation

* Monacaで新規アプリ作成し、プロジェクトをインポートする。
  - monacaの利用登録する
    [Monaca](https://ja.monaca.io/)
![monaca](readme-img/monaca.JPG "新規プロジェクト")    
  - monacaで新規プロジェクトを作成する
![create](readme-img/monaca_new_project.JPG "新規プロジェクト")   
![create](readme-img/monaca_new_project_2.JPG "新規プロジェクト")   
* mobile backendでアプリ作成する
  - mobile backendで利用登録する
    [Nifty cloud mobile backend](http://mb.cloud.nifty.com/)
![register](readme-img/register.JPG "登録画面") 
  - mobile backendでアプリ作成する
![newapp](readme-img/newapp.JPG "新規アプリ作成") 
* monacaで作成したアプリをmobile backendサーバーと連携させる 
  - monacaでアプリキー、クライアントキーを設定し、初期化を行う
![initialize2](readme-img/appKeyClientKey.JPG "初期化")   
![initialize](readme-img/appKeyClientKey_setting.JPG "初期化") 
  - monacaで動作確認する
![demo](readme-img/demo2.JPG "動作確認") 

## Usage

サンプルコードをカスタマイズする、key, value変数を変更していただきます。
以下のドキュメントを参照し、データ保存・検索・プッシュ通知を入れることができる。
* [ドキュメント](http://mb.cloud.nifty.com/doc/current/)
* [ドキュメント・データストア](http://mb.cloud.nifty.com/doc/current/sdkguide/javascript/datastore.html)
* [ドキュメント・会員管理](http://mb.cloud.nifty.com/doc/current/sdkguide/javascript/user.html)
* [ドキュメント・プッシュ通知](http://mb.cloud.nifty.com/doc/current/sdkguide/javascript/push.html)


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

* MITライセンス
* Nifty cloud mobile backendのJavascript SDKのライセンス
