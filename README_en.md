# [Monaca] Let's try NIFCLOUD mobile backend!
![Image1](/readme-img/001_en.png)

## Overview
* This is a sample application that uses Monaca to register data to [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en)
* When you tap "Start Demo" button, data will be registered to the cloud ★
* By this simple operation, you can experience the  [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en)
* Remember to switch language to English when you first access the control panel.

![Image_english_conpanel](/readme-img/inforblog_engconpane.jpg)

## What is NIFCLOUD mobile backend?
It is a cloud service that the back-end functionalities of smartphone app (push notification, data store, membership management, file store, SNS cooperation, location information search and script) is unnecessary development, and moreover, the basic **free** (Note 1) can be used in!
This time, I will experience the data store feature.

※Note 1: For detail information please visit [here](https://mbaas.nifcloud.com/en)

![Image2](/readme-img/002_en.png)

## Operating environment
iOS

* Mac OS X 10.11.6 (El Capitan)
* iPhone5 iOS 9.3.5
* iPhone6s iOS 10.0.1

Android

* Nexus 5X Android version 7.0

※We confirmed the SDK operations with the above operating environment.


## Procedure
### 1. Sign up for [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) and login → Create application

* Click on the above link to and select Sign up with SNS account on the English Site. The "Signup Account (Free)" screen will appear as shown below.

![AccountRegisterImage1](/readme-img/account_register_001.png)

* Please select which SNS account you would like to use to login (Facebook / Twitter / Google).

![AccountRegisterImage2](/readme-img/account_register_002.png)

* When you finished authentication your SNS account, please input your email address.
* If you belong to the company, please input your company informations.
* Then click on `Send confirmation email` button  to authenticate your account by email.

![AccountRegisterImage3](/readme-img/account_register_003.png)

* Then click on confirmation link sent to your mail, and move to Term of service Agreement.
* Please complete your account registration after agreeing it.

![AccountRegisterImage4](/readme-img/account_register_004.png)

* Enter your account information, then login and the "Create new App" screen will appear as shown below, then you create the application.

![Image3](/readme-img/003_en.png)

* When the application is created, the screen will look like the below figure.
* These two kinds of API keys (application key and client key) are used to link the [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) to the application that created by Monaca.

![Image4](/readme-img/004_en.png)

* After that, let's confirm the place where the data will be saved.

![Image5](/readme-img/005_en.png)

### 2. Import project to Monaca and launch application

1. Log in to [Monaca](https://monaca.io)
1. Click "Import Project" at the top left
1. Enter "Project Name" (for example: "DBDEMO")
1. Check "Import from URL" in "Import Method", then right click to copy and paste the following link.
1. Project:__[https://github.com/NIFCLOUD-mbaas/monaca_data_registration/archive/master.zip](https://github.com/NIFCLOUD-mbaas/monaca_data_registration/archive/master.zip)__
1. When click "Import" button, the imported project will be created

![Image6](/readme-img/006_en.png)

* Open the created project by clicking "Open"
* The project is opened and the preview screen is displayed
* Let's play with the preview screen or [Monaca debugger](https://monaca.io/debugger.html)!

※ We recommend using preview screen/Monaca with __iPhone 6__ or higher for operation confirmation.

### 3. Setting the API key

* When the project is opened, edit the index.html
* Paste the API key you confirmed on the dashboard of [NIFCloud mobile backend](https://mbaas.nifcloud.com/en) earlier

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

* If saving successfully, let's check "Datastore" from the dashboard of [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en)!
* `TestClass` that used for saving is created, and you can confirm data in it

## Explanation
Introduction of contents already implemented in sample project

#### Importing SDK and initial setting
 * We have prepared mBaaS's [document (quick start)] (https://mbaas.nifcloud.com/doc/current/introduction/quickstart_monaca.html) for details on how to install SDK.

#### Logic
 * We are developing both screen design and logic on `index.html`
 * Setting the value in the key, value format (`set(key, value)`) for `testClass` object, then executing the save() method, the data is stored asynchronously

```javascript

var appKey    = "YOUR_NCMB_APPLICATION_KEY";
var clientKey = "YOUR_NCMB_CLIENT_KEY";
var ncmb = new NCMB(appKey, clientKey);

function startDemo() {
    var TestClass = ncmb.DataStore("TestClass");
    var testClass = new TestClass();
    var key   = "message";
    var value = "Hello, NCMB!";
    testClass.set(key, value);
    testClass.save()
        .then(function() {
            // Executed after saving completion
            alert("New object created with objectId: " + testClass.objectId);
        })
        .catch(function(error) {
            // Executed when error occurred
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
