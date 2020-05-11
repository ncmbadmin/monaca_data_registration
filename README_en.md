# 【Monaca】 Let's try NIFCLOUD mobile backend!
![Image1](/readme-img/001_en.png)

<!-- PJ Update 2020/05/07 -->
<!-- JS SDK Ver. 3.0.2 -->

## Overview
<!-- * This is a sample application that uses Monaca to register data to [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) -->
* This is a sample application that uses Monaca to register data to [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/)
* When you tap "Start Demo" button, data will be registered to the cloud ★
<!-- * By this simple operation, you can experience the  [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) -->
* By this simple operation, you can experience the  [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/)
* Remember to switch language to English when you first access the control panel.

![Image_english_conpanel](/readme-img/inforblog_engconpane.jpg)

## What is NIFCLOUD mobile backend?
It is a cloud service that the back-end functionalities of smartphone app (push notification, data store, membership management, file store, SNS cooperation, location information search and script) is unnecessary development, and moreover, the basic **free** (Note 1) can be used in!
This time, I will experience the data store feature.

<!-- ※Note 1: For detail information please visit [here](https://mbaas.nifcloud.com/en) -->
※Note 1: For detail information please visit [here](https://mbaas.nifcloud.com/price.htm)


![Image2](/readme-img/002_en.png)

## Operating environment
### iOS

* Mac OS X 10.11.6 (El Capitan)
* iPhone5 iOS 9.3.5
* iPhone6s iOS 10.0.1

### Android

* Nexus 5X Android version 7.0

※We confirmed the SDK operations with the above operating environment.


## Procedure
<!-- ### 1. Sign up for [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) and login → Create application -->
### 1. Sign up for [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/) and login → Create application

* Access the following URL.
  * https://console.mbaas.nifcloud.com/signup
* Click "Language" in the upper right corner and select "English".

![AccountRegisterImage0](/readme-img/account_register_001.png)

* Sign up using your Facebook, Twitter, or Google social networking account. Click the SNS account you want to use.

![AccountRegisterImage1](/readme-img/account_register_002.png)

* After that, the registration screen of each SNS will be displayed, so please follow the instructions.
* Your account will be created if you set and confirm the registered email address and agree to the terms of use
* The "Create new App" screen will appear, then you create the application.

![Image3](/readme-img/003_en.png)

* When the application is created, the screen will look like the below figure.
* These two kinds of API keys (application key and client key) are used to link the [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/) to the iOS application that created by Xcode.

![Image4](/readme-img/004_en.png)

* After that, let's confirm the place where the data will be saved.

![Image5](/readme-img/005_en.png)

### 2. Import project to Monaca and launch application

* Log in to [Monaca](https://ja.monaca.io/)
* Click "Import" button at the top left.
* Click "Import form URL".

![Image6_01](/readme-img/006_en_01.png)

* Copy and paste the following link and Click "Next" button.
  * Project: `https://github.com/NIFCLOUD-mbaas/monaca_data_registration/archive/master.zip`
* Enter "Project Name".
  * for example: `DBDEMO`
* When click "Import Project" button, the imported project will be created.

![Image6_02](/readme-img/006_en_02.png)

* Select the created project and click "Open in Cloud IDE" displayed on the right.

![Image6_03](/readme-img/006_en_03.png)

* The project is opened and the preview screen is displayed
* Let's play with the preview screen or [Monaca debugger](https://ja.monaca.io/debugger.html)!

※ We recommend using preview screen/Monaca with __iPhone 6__ or higher for operation confirmation.

### 3. Setting the API key

* When the project is opened, edit the index.html
<!-- * Paste the API key you confirmed on the management screen of [NIFCloud mobile backend](https://mbaas.nifcloud.com/en) earlier -->
* Paste the API key you confirmed on the management screen of [NIFCloud mobile backend](https://mbaas.nifcloud.com/) earlier

![Image7](/readme-img/007_en.png)

* Overwrite each `YOUR_NCMB_APPLICATION_KEY` and `YOUR_NCMB_CLIENT_KEY` part
* At this time, be careful not to remove double quotes （`"`）!
* When complete overwrite, save by save button

### 4. Checking operation with the Monaca debugger
* Launch the Monaca debugger on the smartphone and log in.
* Please select the application name (example: DBDEMO) that you set up early and start the application.

![Image8](/readme-img/008.png)

* When application starts, tap "Start Demo" button
* The operation result is displayed on the screen
* If saving was successful: ""`New object created with objectId: ******`"
* If saving was failed: "`Failed to create new object, with error code: ******`"
* objectId is the ID automatically allocated when saving data
* If an error occurs, you can confirm the error content from [here](https://mbaas.nifcloud.com/doc/current/rest/common/error.html)
![Image1](/readme-img/001_en.png)

* If saving successfully, let's check "Datastore" from the management screen of [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en)!
* `TestClass` that used for saving is created, and you can confirm data in it

## Explanation
Introduction of contents already implemented in sample project

#### Importing SDK and initial setting
 * We have prepared mBaaS's [document (quick start)] (https://mbaas.nifcloud.com/doc/current/introduction/quickstart_monaca.html) for details on how to install SDK.

#### Logic
 * We are developing both screen design and logic on `index.html`
 * Setting the value in the key, value format (`set(key, value)`) for `testClass` object, then executing the save() method, the data is stored asynchronously

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
        .then(function() {
            // Save success.
            alert("New object created with objectId: " + testClass.objectId);
        })
        .catch(function(error) {
            // Save failed.
            alert("Failed to create new object, with error code: " + error.text);
        });
}
```
#### How to install SDK
If the SDK is not up to date, please refer to the image below and update your SDK yourself

![Image9](/readme-img/009_en.png)

## Reference
* [Document](https://mbaas.nifcloud.com/doc/current/#/Monaca) of mBaaS(monaca)
* We also have the same content for [iOS · Android] version
 * [Objective-C]https://github.com/NIFCLOUD-mbaas/iOS-Objective-C_DB_DEMO
 * [Swift]https://github.com/NIFCLOUD-mbaas/iOS-Swift_DB_DEMO
 * [Android]https://github.com/NIFCLOUD-mbaas/android_data_demo
