
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        // init plugins
        console.log("Init plugins.")
        var mgr = Object.create(MyPluginsMgr);
        mgr.init();
        this.mgr = mgr;

        console.log("set scheduler callback.");
        var scheduler = director.getScheduler();
        // Chartboost
        var delayTime = 2.0
        scheduler.scheduleCallbackForTarget(this, this.chartboostFunc, 0, cc.REPEAT_FOREVER, delayTime, false);

        delayTime += 2;

        return true;
    },

    chartboostFunc:function(dt) {
        this.mgr.chartboostFunc(dt);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

