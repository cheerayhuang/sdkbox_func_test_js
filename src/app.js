
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

        var delayTime = 2.0
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.chartboostFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.adcolonyFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.flurryFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.vungleFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.googleFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.tuneFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.iapFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.facebookFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.kochavaFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.agecheqFunc, 0, 0, delayTime, false);


        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.reviewFunc, 0, 0, delayTime, false);

        delayTime += 2;
        cc.director.getScheduler().scheduleCallbackForTarget(mgr, mgr.fyberFunc, 0, 0, delayTime, false);

        return true;
    },
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

