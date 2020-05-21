gdjs.FinalCode = {};
gdjs.FinalCode.GDfondoObjects1= [];
gdjs.FinalCode.GDfondoObjects2= [];
gdjs.FinalCode.GDhermanitoObjects1= [];
gdjs.FinalCode.GDhermanitoObjects2= [];
gdjs.FinalCode.GDmariObjects1= [];
gdjs.FinalCode.GDmariObjects2= [];
gdjs.FinalCode.GDmensajeObjects1= [];
gdjs.FinalCode.GDmensajeObjects2= [];
gdjs.FinalCode.GDinicioObjects1= [];
gdjs.FinalCode.GDinicioObjects2= [];
gdjs.FinalCode.GDmadreObjects1= [];
gdjs.FinalCode.GDmadreObjects2= [];

gdjs.FinalCode.conditionTrue_0 = {val:false};
gdjs.FinalCode.condition0IsTrue_0 = {val:false};
gdjs.FinalCode.condition1IsTrue_0 = {val:false};


gdjs.FinalCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio ", false);
}}

}


}; //End of gdjs.FinalCode.eventsList0x5b70b8


gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDfondoObjects1.length = 0;
gdjs.FinalCode.GDfondoObjects2.length = 0;
gdjs.FinalCode.GDhermanitoObjects1.length = 0;
gdjs.FinalCode.GDhermanitoObjects2.length = 0;
gdjs.FinalCode.GDmariObjects1.length = 0;
gdjs.FinalCode.GDmariObjects2.length = 0;
gdjs.FinalCode.GDmensajeObjects1.length = 0;
gdjs.FinalCode.GDmensajeObjects2.length = 0;
gdjs.FinalCode.GDinicioObjects1.length = 0;
gdjs.FinalCode.GDinicioObjects2.length = 0;
gdjs.FinalCode.GDmadreObjects1.length = 0;
gdjs.FinalCode.GDmadreObjects2.length = 0;

gdjs.FinalCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
