# 【Monaca】 Let's try NIFCLOUD mobile backend!
![Image1](/readme-img/001_en.png)

<!-- PJ Update 2020/05/07 -->
<!-- JS SDK Ver. 3.0.2 -->

## Overview
* This is a sample application that uses Monaca to register data to [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en).
* When you tap "Start Demo" button, data will be registered to NIFCLOUD mobile backend cloud.
* By this simple action, you can experience the  [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) basic features.
* Remember to switch language to English at the first time you access NIFCLOUD mobile backend control panel.

![Image_english_conpanel](/readme-img/inforblog_engconpane.jpg)

## What is NIFCLOUD mobile backend?
NIFCLOUD mobile backend is a cloud service that provide the back-end features for smartphone app such as push notification, data store, user management, file store, SNS, geolocation and script, which help reduce app development costs. Moreover, full features can be use with the basic plan which is  **free** (Note 1) !
This time, We will try the data store feature with this sample project.

※Note 1: For detail information please visit [here](https://mbaas.nifcloud.com/en)

![Image2](/readme-img/002_en.png)

## Operating environment
### iOS

* Mac OS X 10.15.6 (Catalina)
* iPhoneX iOS 13.5.1

### Android

* Mac OS X 10.15.6 (Catalina)
* Simulator: Pixel 2 Android OS Version 10

※We confirmed the SDK operations with the above operating environment.


## Procedure
### 1. Sign up for [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) and login → Create application

* Access the following URL.
  * https://console.mbaas.nifcloud.com/signup
* Click "Language" in the upper right corner and select "English".

![AccountRegisterImage0](/readme-img/account_register_001.png)

* Choose sign up using your Facebook, Twitter or Google social networking account. Click the SNS account you want to use.

![AccountRegisterImage1](/readme-img/account_register_002.png)

* After that, the registration screen of each SNS will be displayed, so please follow the instructions.
* You will be ask to register confirm email. Your account will be generated after you complete confirmation action by registration email instruction and agree to the terms of use.
* The "Create new App" screen will appear, then you please create new application by input application name.

![Image3](/readme-img/003_en.png)

* After new application is created, the following screen will be displayed.
* There are two kinds of API keys (application key and client key) are generated for new created app. These keys will be used to connect to the [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) for application which will be develop in Monaca.

![Image4](/readme-img/004_en.png)

* After that, let's confirm the place where the data will be saved.

![Image5](/readme-img/005_en.png)

### 2. Import project to Monaca and launch application

* Log in to [Monaca](https://monaca.io/)
* Click "Import" button at the top left.
* Click "Import form URL".

![Image6_01](/readme-img/006_en_01.png)

* Copy and paste the following link and Click "Next" button.
  * Project: `https://github.com/NIFCLOUD-mbaas/monaca_data_registration/archive/master.zip`
* Enter "Project Name".
  * for example: `DBDEMO`
* After click "Import Project" button, the imported project will be created.

![Image6_02](/readme-img/006_en_02.png)

* Select the created project and click "Open in Cloud IDE" displayed on the right.

![Image6_03](/readme-img/006_en_03.png)

* The project is opened and the preview screen is displayed
* Let's use with the preview screen or [Monaca debugger](https://monaca.io/debugger.html) to test.

※ We recommend using preview screen/Monaca with __iPhone 6__ or higher for operation confirmation.

### 3. Setting the API key

* When the project is opened, edit the index.html
* Paste the API key you confirmed on the control panel screen of [NIFCloud mobile backend](https://mbaas.nifcloud.com/en) earlier

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

* After saving successfully, let's check "Datastore" from the control panel screen of [NIFCLOUD mobile backend](https://mbaas.nifcloud.com/en) to see registered data.
* `TestClass` that used for saving is created, and you can confirm data in it

## Explanation
Most of features are already implemented in sample project, which we will display details following.

#### Importing SDK and initial setting
 * We have prepared mBaaS's [document (quick start)](https://mbaas.nifcloud.com/doc/current/introduction/quickstart_monaca.html) for details on how to install SDK.

![Image9](/readme-img/009_en.png)

* If the SDK(ncmb) is not up to date, please delete it and add it again.

![Image10](/readme-img/010_en.png)

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

## Reference
* [Document](https://mbaas.nifcloud.com/doc/current/#/Monaca) of mBaaS(monaca)
* We also have the same content for [iOS · Android] version
  * [iOS](https://github.com/NIFCLOUD-mbaas/iOS-Objective-C_DB_DEMO)
  * [Android](https://github.com/NIFCLOUD-mbaas/android_data_demo)
