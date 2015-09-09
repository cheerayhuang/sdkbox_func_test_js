var MyPluginsMgr = {
    init:function() {

        // Chartboost
        sdkbox.PluginChartboost.init();
        sdkbox.PluginChartboost.setListener({
            onChartboostCached : function (name) { console.log("onChartboostCached " + name) },
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

    },
      
    onChartboostDefault:function(sender) {  
        console.log("Chartboost: show default");  
        sdkbox.PluginChartboost.show("Default");
    },
    onChartboostLC:function(sender) {
        console.log("Chartboost: show LC"); 
        sdkbox.PluginChartboost.show("Level Complete");
    },

    chartboostFunc:function(dt) {
        //console.log("Chartboost: show default");  
        //sdkbox.PluginChartboost.show("Default");

        //console.log("Chartboost: show LC"); 
        //sdkbox.PluginChartboost.show("Level Complete");

        console.log("hello ,callback");
    }

};
