# 【Monaca】 Let's try nifty cloud mobile backend!
![Image1](/readme-img/001.png)

## Overview
* This is a sample application that uses Monaca to register data to [Nifty Cloud mobile backend](http://mb.cloud.nifty.com/)
* When you tap "Start Demo" button, data will be registered to the cloud ★
* By simple operation, you can experience the  [Nifty Cloud mobile backend](http://mb.cloud.nifty.com/)

## What is Nifty Cloud mobile backend?
It is a cloud service that the back-end functionalities of smartphone app (push notification, data store, membership management, file store, SNS cooperation, location information search and script) is unnecessary development, and moreover, the basic **free**(Note 1) can be used in!
This time, I will experience the data store feature.

Note 1: For detail information please visit [here](http://mb.cloud.nifty.com/price.htm)

![Image2](/readme-img/002.png)

## Operating environment
iOS

* Mac OS X 10.11.6(El Capitan)
* iPhone5 iOS 9.3.5
* iPhone6s iOS 10.0.1

Android

* Nexus 5X Android version 7.0

※We are confirming the operation with the above operating environment.


## Procedure
### 1. Register membership of [Nifty Cloud mobile backend](http://mb.cloud.nifty.com/) and login → Create application

* Register membership (free) from the above link. When you finished registration, then login and the "Create new App" screen will appear as shown below, then you create the application.

![Image3](/readme-img/003.png)

* When the application is created, the screen will look like the below figure.
* These two kinds of API keys (application key and client key) are used to link the [Nifty Cloud mobile backend](http://mb.cloud.nifty.com/) to the iOS application that created by Xcode.

![Image4](/readme-img/004.png)

* After, let's confirm the place where the data will be saved.

![Image5](/readme-img/005.png)

### 2. Import project to Monaca and launch application

1. Log in to [Monaca](https://ja.monaca.io/)
1. Click "Import Project" at the top left
1. Enter "Project Name" (for example: "DBDEMO")
1. Check "Import from URL" in "Import Method", then right click to copy and paste the following link.
1. Project:__[monaca_data_registration](https://github.com/NIFTYCloud-mbaas/monaca_data_registration/archive/master.zip)__
1. When click "Import" button, the imported project will be created

![Image6](/readme-img/006.png)

* Open the created project by clicking "Open"
* The project is opened and the preview screen is displayed
* Let's play with the preview screen or [Monaca debugger](https://ja.monaca.io/debugger.html)!

※ We recommend using preview screen/Monaca with __iPhone 6__ or higher for operation confirmation.

### 3. Setting the API key

* When the project is opened, edit the index.html
* Paste the API key you confirmed on the dashboard of [Nifty Cloud mobile backend](http://mb.cloud.nifty.com/) earlier

![Image7](/readme-img/007.png)

* Overwrite each `YOUR_NCMB_APPLICATION_KEY` and `YOUR_NCMB_CLIENT_KEY` part
* At this time, be careful not to clear double quotes （`"`）!
* When complete overwrite, save by save button

### 4. Checking operation with the Monaca debugger
* Launch the Monaca debugger on the smartphone and log in.
* Please select the application name (example: DBDEMO) that you set up early and start the application.

![Image8](/readme-img/008.png)

* When application starts, tap "Start Demo" button
* The operation result is displayed on the screen
* If saving was successful: ""`New object created with objectId: ******`"
* If saving was failed: "`Failed to create new object, with error code: ******`"
* ObjectId is the ID automatically allocated when saving data
* If an error occurs, you can confirm the error content from [here](http://mb.cloud.nifty.com/doc/current/rest/common/error.html)
![Image1](/readme-img/001.png)

* If saving successfully, let's check "Datastore" from the dashboard of [Nifty Cloud mobile backend](http://mb.cloud.nifty.com/)!
* `TestClass` that used for saving is created, and you can confirm data in it

## Explanation
Introduction of contents already implemented in sample project

#### Importing SDK and initial setting
 * We have prepared mBaaS's [document (quick start)] (http://mb.cloud.nifty.com/doc/current/introduction/quickstart_monaca.html) for detailed installation method of SDK , please use it

#### Logic
 * We are writing both design and logic on `index.html`
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

![Image9](/readme-img/009.png)

## Reference
* [Document](http://mb.cloud.nifty.com/doc/current/#/Monaca) of mBaaS(monaca)
* We also have the same content for [iOS · Android] version
 * [Objective-C]https://github.com/NIFTYCloud-mbaas/iOS-Objective-C_DB_DEMO
 * [Swift]https://github.com/NIFTYCloud-mbaas/iOS-Swift_DB_DEMO
 * [Android]https://github.com/NIFTYCloud-mbaas/android_data_demo
