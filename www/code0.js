gdjs.mainCode = {};
gdjs.mainCode.GDcookieObjects1= [];
gdjs.mainCode.GDcookieObjects2= [];
gdjs.mainCode.GDcoobgObjects1= [];
gdjs.mainCode.GDcoobgObjects2= [];
gdjs.mainCode.GDpanelObjects1= [];
gdjs.mainCode.GDpanelObjects2= [];
gdjs.mainCode.GDpanelStrObjects1= [];
gdjs.mainCode.GDpanelStrObjects2= [];
gdjs.mainCode.GDblack_95bgObjects1= [];
gdjs.mainCode.GDblack_95bgObjects2= [];
gdjs.mainCode.GDtextClickObjects1= [];
gdjs.mainCode.GDtextClickObjects2= [];
gdjs.mainCode.GDStarsBG2Objects1= [];
gdjs.mainCode.GDStarsBG2Objects2= [];
gdjs.mainCode.GDStarsBGObjects1= [];
gdjs.mainCode.GDStarsBGObjects2= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};
gdjs.mainCode.condition2IsTrue_0 = {val:false};


gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDcookieObjects1Objects = Hashtable.newFrom({"cookie": gdjs.mainCode.GDcookieObjects1});gdjs.mainCode.eventsList0x5b70b8 = function(runtimeScene) {

{


{
gdjs.mainCode.GDcoobgObjects1.createFrom(runtimeScene.getObjects("coobg"));
gdjs.mainCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));
{for(var i = 0, len = gdjs.mainCode.GDcoobgObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcoobgObjects1[i].putAroundObject((gdjs.mainCode.GDcookieObjects1.length !== 0 ? gdjs.mainCode.GDcookieObjects1[0] : null), 0, 0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(Math.abs((gdjs.evtTools.window.getWindowInnerWidth() - (( gdjs.mainCode.GDcookieObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDcookieObjects1[0].getPointX(""))) - (gdjs.evtTools.window.getWindowInnerWidth() - gdjs.evtTools.input.getMouseX(runtimeScene, "", 0))));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(Math.abs((gdjs.evtTools.window.getWindowInnerHeight() - (( gdjs.mainCode.GDcookieObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDcookieObjects1[0].getPointY(""))) - (gdjs.evtTools.window.getWindowInnerHeight() - gdjs.evtTools.input.getMouseY(runtimeScene, "", 0))));
}{for(var i = 0, len = gdjs.mainCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcookieObjects1[i].rotate((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))) / 2, runtimeScene);
}
}}

}


{

gdjs.mainCode.GDcookieObjects1.createFrom(runtimeScene.getObjects("cookie"));

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDcookieObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDcookieObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDcookieObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDcookieObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))) * 0.9, 0);
}
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDpanelStrObjects1.createFrom(runtimeScene.getObjects("panelStr"));
{for(var i = 0, len = gdjs.mainCode.GDpanelStrObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDpanelStrObjects1[i].setParticleLifeTimeMin(gdjs.mainCode.GDpanelStrObjects1[i].getParticleLifeTimeMin() + (0.05));
}
}}

}


}; //End of gdjs.mainCode.eventsList0x5b70b8


gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDcookieObjects1.length = 0;
gdjs.mainCode.GDcookieObjects2.length = 0;
gdjs.mainCode.GDcoobgObjects1.length = 0;
gdjs.mainCode.GDcoobgObjects2.length = 0;
gdjs.mainCode.GDpanelObjects1.length = 0;
gdjs.mainCode.GDpanelObjects2.length = 0;
gdjs.mainCode.GDpanelStrObjects1.length = 0;
gdjs.mainCode.GDpanelStrObjects2.length = 0;
gdjs.mainCode.GDblack_95bgObjects1.length = 0;
gdjs.mainCode.GDblack_95bgObjects2.length = 0;
gdjs.mainCode.GDtextClickObjects1.length = 0;
gdjs.mainCode.GDtextClickObjects2.length = 0;
gdjs.mainCode.GDStarsBG2Objects1.length = 0;
gdjs.mainCode.GDStarsBG2Objects2.length = 0;
gdjs.mainCode.GDStarsBGObjects1.length = 0;
gdjs.mainCode.GDStarsBGObjects2.length = 0;

gdjs.mainCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['mainCode'] = gdjs.mainCode;
