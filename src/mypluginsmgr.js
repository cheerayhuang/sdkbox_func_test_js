var MyPluginsMgr = {
    init:function() {
             // AdColony
             /*console.log("init AdColony")
                 sdkbox.PluginAdColony.init();
             sdkbox.PluginAdColony.setListener({
                 onAdColonyChange : function (data, available) {
                                        // Called when AdColony finish loading
                                        console.log("AdColony cached");
                                        //sdkbox.PluginAdColony.show("video");
                                        //sdkbox.PluginAdColony.show("v4vc");
                                    },
                 onAdColonyReward : function (data, currencyName, amount, success) {
                                        // Called when AdColony v4vc ad finish playing
                                        console.log("AdColony play v4vc finished.");
                                    },
                 onAdColonyStarted : function (data) {
                                         // Called when ad starts playing
                                         console.log("AdColony starts playing.");
                                     },
                 onAdColonyFinished : function (data) {
                                          // Called when an ad finish displaying
                                          console.log("AdColony ends playing.");
                                      }
             });*/

             // Chartboost
             console.log("init Chartboost")
             sdkbox.PluginChartboost.init();
             sdkbox.PluginChartboost.setListener({
                 onChartboostCached : function (name)
             {
                 console.log("onChartboostCached " + name);
                 //sdkbox.PluginChartboost.show("Default");
                 //sdkbox.PluginChartboost.show("Level Complete");
             },
                 onChartboostShouldDisplay : function (name) { console.log("onChartboostShouldDisplay " + name) },
                 onChartboostDisplay : function (name) { console.log("onChartboostDisplay " + name) },
                 onChartboostDismiss : function (name) { console.log("onChartboostDismiss " + name) },
                 onChartboostClose : function (name) { console.log("onChartboostClose " + name) },
                 onChartboostClick : function (name) { console.log("onChartboostClick " + name) },
                 onChartboostReward : function (name, reward) { console.log("onChartboostReward " + name + " reward " + reward) },
                 onChartboostFailedToLoad : function (name, e) { console.log("onChartboostFailedToLoad " + name + " load error " + e) },
                 onChartboostFailToRecordClick : function (name, e) { console.log("onChartboostFailToRecordClick " + name + " click error " + e) },
                 onChartboostConfirmation : function () { console.log("onChartboostConfirmation") },
                 onChartboostCompleteStore : function () { console.log("onChartboostCompleteStore") },
             });

             // Flurry Analytics
             console.log("init Flurry")
             sdkbox.PluginFlurryAnalytics.init();
             sdkbox.PluginFlurryAnalytics.setListener({
             flurrySessionDidCreateWithInfo:function(info) {
                                                    var jsonInfo = JSON.parse(info)
                                                    console.log("session started")
                                                    console.log("APIKey :" + jsonInfo.apiKey + " session id :" + jsonInfo.sessionId);
                                                    sdkbox.PluginFlurryAnalytics.logEvent("test event2 js", JSON.stringify({"eKey1":"eVal1", "eKey2":"eVal2"}));
                                                }
             });
             sdkbox.PluginFlurryAnalytics.startSession();

             // Google Analytics
             console.log("init GoogleAnalytics");
             sdkbox.PluginGoogleAnalytics.init();

             // IAP
             console.log("init IAP");
             sdkbox.IAP.init();
             sdkbox.IAP.setListener({
                 onSuccess : function (product) {
                                 //Purchase success
                             },
                 onFailure : function (product, msg) {
                                 //Purchase failed
                                 //msg is the error message
                             },
                 onCanceled : function (product) {
                                  //Purchase was canceled by user
                              },
                 onRestored : function (product) {
                                  //Purchase restored
                              },
                 onProductRequestSuccess : function (products) {
                                               //Returns you the data for all the iap products
                                               //You can get each item using following method
                                               for (var i = 0; i < products.length; i++) {
                                                   // loop
                                               }
                                           },
                 onProductRequestFailure : function (msg) {
                                               //When product refresh request fails.
                                           }
             });


             // Kochava
             console.log("init Kochava");
             sdkbox.PluginKochava.init();


             // Tune
             console.log("init tune");
             sdkbox.PluginTune.init();
             sdkbox.PluginTune.setPackageName("org.cocos2dx.tune");
             sdkbox.PluginTune.setListener({
                 onEnqueuedAction: function(data) { console.log(data); },
                 onSucceed: function(data) { console.log(data); },
                 onFailed: function(data) { console.log(data); },
                 onReceiveDeeplink: function(data) { console.log(data); }
             });
             sdkbox.PluginTune.measureSession();


             // Vungle
             console.log("init Vungle");
             sdkbox.PluginVungle.init();
             sdkbox.PluginVungle.setListener({
                 onVungleCacheAvailable: function() {
                     console.log("onVungleCacheAvailable")
                     //sdkbox.PluginVungle.show("video");
                     //sdkbox.PluginVungle.show("reward");

                 },
                 onVungleStarted: function() { console.log("onVungleStarted") },
                 onVungleFinished: function() { console.log("onVungleFinished") },
                 onVungleAdViewed: function(isComplete) { console.log("onVungleAdViewed" + isComplete) }
             });

             // Facebook
             sdkbox.PluginFacebook.init();
             sdkbox.PluginFacebook.setListener({
                 onLogin: function(hasLogon, data) { console.log("onFacebookLogin: " + hasLogon + data); },
                 onAPI: function(tag, data) { console.log("onAPI: " + tag + " " + data); },
                 onSharedSuccess: function(data) { console.log("onSharedSuccess: " + data); },
                 onSharedFailed: function(data) { console.log("onSharedFailed: " + data); },
                 onSharedCancel: function() { console.log("onSharedCancel"); }
             });

             // AgeCheq
             sdkbox.PluginAgeCheq.init();
             sdkbox.PluginAgeCheq.setListener({
                 checkResponse: function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) { console.log("onCheckResponse: " + a0+a1+a2+a3+a4+a5+a6+a7+a8+a9+a10); },
                 associateDataResponse: function(a, b) { console.log("onAssociateDataResponse: " + a + " " + b); }
             });

             // Fyber
             /*sdkbox.PluginFyber.init();
             sdkbox.PluginFyber.setListener({
                 onVirtualCurrencyConnectorFailed : function(error, errorCode, errorMsg) {
                                                        console.log("onVirtualCurrencyConnectorFailed: " + error + " " + errorCode + " " +errorMsg);
                                                    },
                onVirtualCurrencyConnectorSucess : function(deltaOfCoins, currencyId, currencyName, transactionId) {
                    console.log("onVirtualCurrencyConnectorSucess:");
                    console.log("deltaOfCoins: " + deltaOfCoins);
                    console.log("currencyId: " + currencyId);
                    console.log("currencyName: " + currencyName);
                    console.log("transactionId: " + transactionId);
                },

                onCanShowInterstitial : function(canShow) {
                    console.log("onCanShowInterstitial: " + canShow);
                },

                onInterstitialDidShow : function() {
                    console.log("onInterstitialDidShow");
                },

                onInterstitialDismiss : function(reason) {
                    console.log("onInterstitialDismiss: " + reason);
                },

                onInterstitialFailed : function() {
                    console.log("onInterstitialFailed");
                },

                onBrandEngageClientReceiveOffers : function(areOffersAvailable) {
                    console.log("onBrandEngageClientReceiveOffers: " + areOffersAvailable);
                },

                onBrandEngageClientChangeStatus : function(s, msg) {
                    console.log("onBrandEngageClientChangeStatus: ");
                    console.log("status: " + s);
                    console.log("msg: " + msg);
                },

                onOfferWallFinish : function(s) {
                    console.log("onOfferWallFinish: " + s);
                }
             });*/

             // Review
             sdkbox.PluginReview.init();
             sdkbox.PluginReview.setListener({
                 onDisplayAlert: function(data) {cc.log("didDisplayAlert")},
                 onDeclineToRate: function(data) { cc.log("didDeclineToRate") },
                 onRate: function(data) { cc.log("didToRate") },
                 onRemindLater: function(data) { cc.log("didToRemindLater") }
             });
         },

    /*adcolonyFunc: function(dt) {
                      console.log("calling adcolonyFunc");
                  }, */

    chartboostFunc: function(dt) {
                        console.log("calling chartboostFunc");
                    },

    flurryFunc: function(dt) {
                    console.log("calling flurryFunc");
                    sdkbox.PluginFlurryAnalytics.logEvent("test event1");
                },

    googleFunc: function(dt) {
                    console.log("GA: test");
                    sdkbox.PluginGoogleAnalytics.logTiming("Startup", 0, "timing name", "timing label");
                    sdkbox.PluginGoogleAnalytics.logEvent("EventCategory 1", "EventAction 1", "EventLabel 1", 10);
                    sdkbox.PluginGoogleAnalytics.logScreen("Screen1");
                    sdkbox.PluginGoogleAnalytics.logEvent("Read", "Press", "Button1", 10);
                    sdkbox.PluginGoogleAnalytics.logEvent("Read", "Press", "Button2", 20);
                    sdkbox.PluginGoogleAnalytics.logEvent("Dispose", "Release", "Button22", 20);
                    sdkbox.PluginGoogleAnalytics.logScreen("Screen2");
                    sdkbox.PluginGoogleAnalytics.logSocial("twitter", "retweet", "retweet esto fu.");
                    sdkbox.PluginGoogleAnalytics.logException("Algo se ha roto", false);
                    sdkbox.PluginGoogleAnalytics.dispatchPeriodically(60);
                },

    iapFunc: function(dt) {
                 console.log("calling iapFunc");
                 sdkbox.IAP.purchase("remove_ads");
             },

    kochavaFunc: function(dt) {
                     console.log("calling kochavaFunc");
                     sdkbox.PluginKochava.trackEvent("KochavaCustomEvent", "HelloWorld");
                     sdkbox.PluginKochava.spatialEvent("test", 100, 101, 102);
                 },

    tuneFunc: function(dt) {
                  console.log("calling tuneFunc");
                  sdkbox.PluginTune.measureEventName("login");
                  sdkbox.PluginTune.measureEventId(0123456789);

                  var event = {};
                  event.eventName = "purchase";
                  event.refId = "RJ1357";
                  event.searchString = "sweet srisp red apples";
                  event.attribute1 = "srisp";
                  event.attribute2 = "red";
                  event.quantity = 3;
                  sdkbox.PluginTune.measureEvent(JSON.stringify(event));

              },

    vungleFunc: function(dt) {
                    console.log("calling vungleFunc");
                    sdkbox.PluginVungle.show("video");
                    sdkbox.PluginVungle.show("reward");
                },

    facebookFunc: function(dt) {
                      console.log("calling facebookFunc");
                      console.log("Facebook: check status");
                      console.log("Facebook: permission list: "+ sdkbox.PluginFacebook.getPermissionList());
                      console.log("Facebook: token: "+ sdkbox.PluginFacebook.getAccessToken());
                      console.log("Facebook: user id: "+ sdkbox.PluginFacebook.getUserID());
                      console.log("Facebook: FBSDK version: "+ sdkbox.PluginFacebook.getSDKVersion());
                      console.log("Facebook: share link");
                      var data = {}
                      data.link = "http://www.cocos2d-x.org";
                      data.title = "cocos2d-x";
                      data.text = "The Best Game Engine";
                      data.imageUrl = "http://cocos2d-x.org/images/logo.png";
                      sdkbox.PluginFacebook.share(data);
                      console.log("Facebook: share link");
                      var data = {}
                      data.link = "http://www.cocos2d-x.org";
                      data.title = "cocos2d-x";
                      data.text = "The Best Game Engine";
                      data.imageUrl = "http://cocos2d-x.org/images/logo.png";
                      sdkbox.PluginFacebook.share(data);
                      console.log("Facebook: dialog");
                      sdkbox.PluginFacebook.dialog(data);
                  },

    agecheqFunc: function(dt) {
                     console.log("calling agecheqFunc");
                     sdkbox.PluginAgeCheq.check("1426");
                 },

    /*fyberFunc: function(dt) {
                    console.log("calling fyberFunc");
                    sdkbox.PluginFyber.requestInterstitial();
                    sdkbox.PluginFyber.showOffWall("rmb");
                    sdkbox.requestOffers("rmb");
                    sdkbox.requestDeltaOfCoins("rmb");
               },*/

    reviewFunc: function(dt) {
                    console.log("calling reviewFunc");
                    sdkbox.PluginReview.show();
                }
};
