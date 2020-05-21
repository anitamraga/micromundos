gdjs.Inicio_32Code = {};
gdjs.Inicio_32Code.GDfondoObjects1= [];
gdjs.Inicio_32Code.GDfondoObjects2= [];
gdjs.Inicio_32Code.GDcasaObjects1= [];
gdjs.Inicio_32Code.GDcasaObjects2= [];
gdjs.Inicio_32Code.GDpapaObjects1= [];
gdjs.Inicio_32Code.GDpapaObjects2= [];
gdjs.Inicio_32Code.GDmamaObjects1= [];
gdjs.Inicio_32Code.GDmamaObjects2= [];
gdjs.Inicio_32Code.GDmariObjects1= [];
gdjs.Inicio_32Code.GDmariObjects2= [];
gdjs.Inicio_32Code.GDbuscarObjects1= [];
gdjs.Inicio_32Code.GDbuscarObjects2= [];
gdjs.Inicio_32Code.GDencontrarObjects1= [];
gdjs.Inicio_32Code.GDencontrarObjects2= [];
gdjs.Inicio_32Code.GDplayObjects1= [];
gdjs.Inicio_32Code.GDplayObjects2= [];
gdjs.Inicio_32Code.GDmadreObjects1= [];
gdjs.Inicio_32Code.GDmadreObjects2= [];

gdjs.Inicio_32Code.conditionTrue_0 = {val:false};
gdjs.Inicio_32Code.condition0IsTrue_0 = {val:false};
gdjs.Inicio_32Code.condition1IsTrue_0 = {val:false};


gdjs.Inicio_32Code.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.Inicio_32Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Inicio_32Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 1", false);
}}

}


}; //End of gdjs.Inicio_32Code.eventsList0x5b70b8


gdjs.Inicio_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Inicio_32Code.GDfondoObjects1.length = 0;
gdjs.Inicio_32Code.GDfondoObjects2.length = 0;
gdjs.Inicio_32Code.GDcasaObjects1.length = 0;
gdjs.Inicio_32Code.GDcasaObjects2.length = 0;
gdjs.Inicio_32Code.GDpapaObjects1.length = 0;
gdjs.Inicio_32Code.GDpapaObjects2.length = 0;
gdjs.Inicio_32Code.GDmamaObjects1.length = 0;
gdjs.Inicio_32Code.GDmamaObjects2.length = 0;
gdjs.Inicio_32Code.GDmariObjects1.length = 0;
gdjs.Inicio_32Code.GDmariObjects2.length = 0;
gdjs.Inicio_32Code.GDbuscarObjects1.length = 0;
gdjs.Inicio_32Code.GDbuscarObjects2.length = 0;
gdjs.Inicio_32Code.GDencontrarObjects1.length = 0;
gdjs.Inicio_32Code.GDencontrarObjects2.length = 0;
gdjs.Inicio_32Code.GDplayObjects1.length = 0;
gdjs.Inicio_32Code.GDplayObjects2.length = 0;
gdjs.Inicio_32Code.GDmadreObjects1.length = 0;
gdjs.Inicio_32Code.GDmadreObjects2.length = 0;

gdjs.Inicio_32Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Inicio_32Code'] = gdjs.Inicio_32Code;
