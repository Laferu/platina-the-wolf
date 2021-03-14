/ * ================================================ ============================= 
* Gilgamar - Estado Evento Comum 
* Por Gilgamar 
* G_StateCE.js 
* Versão: 1.02 
* Grátis para uso comercial e uso não comercial. 
* ================================================= ============================ * / 

var Imported = Importado || {}; 
Imported.G_StateCE = true; 

var StateCE = {}; 

/ *: 
* @plugindesc v1.02 Ativar eventos comuns de estado. 
* @author Gilgamar 
* 
* @param Actor 
* @desc ID do jogo variável para usar. 
* Contém o ID do ator afetado pela mudança de estado. 
* @default 0 
* 
* @param Ocorre
* @desc ID do jogo variável para usar. 
* Mostra se o estado é onadd, onremove ou onexpire. 
* @default 0 
* 
* @help 
* ========================================= =================================== 
* Introdução 
* ============ ================================================== ============== 
* Permite estado adicionar / remover eventos comuns via notetags. Ex: 
* 
* <StateCE Evento: 1 onadd> 
* <StateCE Evento: 2 onremove> 
* <StateCE Evento: 3 onexpire> 
* 
* As linhas precedentes executarão o ID de evento comum 001 no estado add, ID 002 
* no estado remove e ID 003 no estado expira para o estado marcado. 
*
* Use a variável de jogo atribuída em param Actor para determinar qual ator foi 
* afetado pela mudança de estado em seu evento comum. 
* 
* Use a variável de jogo atribuída em param Ocorre para determinar qual estado 
* a mudança foi aplicada. Você pode usar isso em vez de separar eventos comuns. 
* 1 = onadd 
* 2 = onremove 
* 3 = onexpire 
* 
* ==================================== ======================================== 
* Changelog 
* ======= ================================================== =================== 
* Versão 1.02: 
* - Adicionado Actor param para que possamos ver quem foi afetado pela mudança de estado 
* - Adicionado Ocorre param para que possamos se state for add / remover ou expirar
* 
* Versão 1.01: 
* - Adicionado o notetag onexpire para estados progressivos 
* - Compatibile com o Yanfly BattleEngine (baseado em turnos e tick-based) 
* 
* Versão 1.00: 
* - Habilita o estado de adicionar / remover eventos comuns através de anotações 
* / 

// == ================================================== ========================= 
// Parâmetros 
// ==================== ================================================== ======= 

StateCE.Parameters = PluginManager.parameters ('G_StateCE'); 
StateCE.Param = StateCE.Param || {}; 
StateCE.Param.Actor = String (StateCE.Parameters ['Ator']); 
StateCE.Param.Occurs = String (StateCE.Parameters ['Occurs']);

// ================================================ ============================= 
// Notetags 
// ================ ================================================== =========== 

StateCE.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded; 
DataManager.isDatabaseLoaded = function () { 
if (! StateCE.DataManager_isDatabaseLoaded.call (this)) retorna false; 
DataManager.processSTATECENotetags1 ($ dataStates); 
retorno verdadeiro; 
}; 

DataManager.processSTATECENotetags1 = function (group) { 
// Verifica se a função é chamada mais de uma vez 
if (DataManager.processSTATECENotetags1.calledTimes ++> 1) return; 

var note1 = / <(?: STATECE EVENT): [] (\ d +) [] (ONADD)> / i;
var note2 = / <(?: STATECE EVENT): [] (\ d +) [] (ONREMOVE)> / i; 
var note3 = / <(?: STATECE EVENT): [] (\ d +) [] (ONEXPIRE)> / i; 

para (var n = 1; n <comprimento_grupo; n ++) { 
var obj = grupo [n]; 
var remarkata = obj.note.split (/ [\ r \ n] + /); 
// console.log (remarkata) 
obj.commonEvents = []; 
para (var i = 0; i <noteata.length; i ++) { 
var line = remarkata ; 
if (line.match (note1)) { 
obj.commonEvents.push ({ 
eventId: parseInt (RegExp. $ 1), 
ocorre: 'onadd' 
}); 
} else if (line.match (note2)) {
obj.commonEvents.push ({ 
eventId: parseInt (RegExp. $ 1), 
ocorre: 'onremove' 
}); 
} else if (line.match (note3)) { 
obj.commonEvents.push ({ 
eventId: parseInt (RegExp. $ 1), 
ocorre: 'onexpire' 
}); 
} 
} 
} 
// console.log (group) 

}; 
DataManager.processSTATECENotetags1.calledTimes = 0; 

// ================================================ ============================= 
// Funções do StateCE
// ================================================ ============================= 

// Fila o evento comum associado ao estado 
StateCE.changeState = function (actor, stateId, ocorre ) { 
var state = $ dataStates [stateId]; 
para (var i = 0; i <state.commonEvents.length; i ++) { 
var commonEvent = state.commonEvents ; 
if (commonEvent.occurs === ocorre) { 

// DEBUGGING 
console.log ('Ator', actor._actorId) 
console.log ('Estado', ocorre) 
console.log (commonEvent) 

// Salvando o ID do ator afetado por mudança de estado 
$ gameVariables.setValue (StateCE.Param.Actor, actor._actorId);
// O estado de salvamento ocorre 
se (ocorre === 'onadd') $ gameVariables.setValue (StateCE.Param.Occurs, 1); 
if (ocorre === 'onremove') $ gameVariables.setValue (StateCE.Param.Occurs, 2); 
if (ocorre === 'onexpire') $ gameVariables.setValue (StateCE.Param.Occurs, 3); 
// Atualizar eventos comuns 
$ gameTemp.reserveCommonEvent (commonEvent.eventId); 
} 
} 
} 
StateCE.onAdd = function (actor, stateId) {this.changeState (actor, stateId, 'onadd')} 
StateCE.onRemove = função (actor, stateId) {this.changeState (actor, stateId, 'onremove') } 
StateCE.onExpire = function (actor, stateId) {this.changeState (ator, stateId, '

// Emprestado essa função dos estados progressivos do Himeworks 
Game_Battler.prototype.compareStates = function (oldStates, newStates) { 
para (var i = 0, len = oldStates.length; i <len; i ++) { 
var stateId = oldStates ; 
estado var = $ dataStates [stateId]; 
if (! newStates.contains (stateId)) { 
StateCE.onExpire (isto, stateId); 
} 
} 
} 

// ============================================= ================================ 
// Substituições de RPG Maker para Estado Adicionar / Remover 
// ====== ================================================== ===================== 

StateCE.Game_Battler_removeState = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function (stateId) { 
StateCE.Game_Battler_removeState.call (isto, stateId); 
StateCE.onRemove (this, stateId); 
}; 

StateCE.Game_Battler_addState = Game_Battler.prototype.addState; 
Game_Battler.prototype.addState = function (stateId) { 
StateCE.Game_Battler_addState.call (isto, stateId); 
StateCE.onAdd (this, stateId); 
}; 

// ================================================ ============================= 
// Substituições do Criador de RPG por Expiração do Estado 
// =========== ================================================== ================ 

/ * Remover andando * / 
StateCE.GameActor_updateStateSteps = Game_Actor.prototype.updateStateSteps;
Game_Actor.prototype.updateStateSteps = function (state) { 
StateCE.GameActor_updateStateSteps.call (isto, estado); 
if (! this.isStateAffected (state.id)) {StateCE.onExpire (this, state.id)} 
}; 

/ * Remover por dano * / 
StateCE._GameBattler_removeStatesByDamage = Game_Battler.prototype.removeStatesByDamage; 
Game_Battler.prototype.removeStatesByDamage = function () { 
var oldStates = this._states.clone (); 
StateCE._GameBattler_removeStatesByDamage.call (this); 
var newStates = this._states; 
this.compareStates (oldStates, newStates); 
}; 

/ * Remover por turno e fim de ação * / 
if (Imported.YEP_BattleEngineCore) {

StateCE.Game_BattlerBase_updateStateTurnTiming = Game_BattlerBase.prototype.updateStateTurnTiming; 
Game_BattlerBase.prototype.updateStateTurnTiming = função (tempo) { 
var oldStates = this._states.clone (); 
StateCE.Game_BattlerBase_updateStateTurnTiming.call (isso, tempo); 
var newStates = this._states; 
this.compareStates (oldStates, newStates); 
}; 

StateCE.Game_BattlerBase_updateStateTicks = Game_BattlerBase.prototype.updateStateTicks; 
Game_BattlerBase.prototype.updateStateTicks = function () { 
var oldStates = this._states.clone (); 
StateCE.Game_BattlerBase_updateStateTicks.call (this); 
var newStates = this._states;
this.compareStates (oldStates, newStates); 
}; 

} else { 

StateCE._GameBattler_removeStatesAuto = Game_Battler.prototype.removeStatesAuto; 
Game_Battler.prototype.removeStatesAuto = função (tempo) { 
var oldStates = this._states.clone (); 
StateCE._GameBattler_removeStatesAuto.call (isso, tempo); 
var newStates = this._states; 
this.compareStates (oldStates, newStates); 
}; 

}; 

// ================================================ ============================= 
// Referências ao Código RPG Maker 
// ============= ================================================== ==============

// Game_Actor.prototype.updateStateSteps = function (state) { 
// if (state.removeByWalking) { 
// if (this._stateSteps [state.id]> 0) { 
// if (--isto.stadosEstado [estado. id] === 0) { 
// this.removeState (state.id); 
//} 
//} 
//} 
//}; 
// 
// Game_Battler.prototype.removeStatesByDamage = function () { 
// this.states (). ForEach (função (estado) { 
// if (state.removeByDamage && Math.randomInt (100) <state.chanceByDamage) { 
/ / this.removeState (state.id); 
//} 
//}, this); 
//}; 
//
// Game_Battler.prototype.removeStatesAuto = function (timing) { 
// this.states (). ForEach (function (state) { 
// if (this.isStateExpired (state.id) && state.autoRemovalTiming === tempo) { 
// this.removeState (state.id); 
//} 
//}, this); 
//}; 
// 
// Game_Battler.prototype.removeState = function (stateId) { 
// if (this.isStateAffected (stateId)) { 
// if (stateId === this.deathStateId ()) { 
// this.revive (); 
//} 
// this.eraseState (stateId); 
// this.refresh (); 
// this._result.pushRemovedState (stateId); 
//} 
//}; 
//
// Game_Battler.prototype.addState = function (stateId) { 
// if (this.isStateAddable (stateId)) { 
// se (! This.isStateAffected (stateId)) { 
// this.addNewState (stateId); 
// this.refresh (); 
//} 
// this.resetStateCounts (stateId); 
// this._result.pushAddedState (stateId); 
//} 
//};