var Sterling = Sterling || {};
/*:
 * @plugindesc v1.0.0 This plugin allows you to customize the Change Class command to some extent.
 * @author ArcherBanish
 * @param --Class Change--
 * @default
 * @param Keep Exp
 * @desc If you wish to keep the current Exp of the Actor on class change. [default = false]
 * YES - true NO - false
 * @default false
 * @param Forget Old Skills
 * @desc If you wish to keep the skills from the old class. [default = false]
 * YES - true NO - false
 * @default false
 * @param Get New Skils
 * @desc If you want the skills from the new class that could have been learned to be added. [default = true]
 * YES - true NO - false
 * @default true
 * @help
*====================* Class Change Options* ====================* This script is free for commercial or non-commercial projects, no credit necesary.** IMPORTANT: This script changes the Class Change command. (command321) So any script that changes this command will not work.* Scripts that change the changeClass method from Game_Actor may also break this script.** Parameter Description:* Keep Exp:* This is the main reason I made this plugin.* This parameter makes it so that when you change an actor's class he does not return to Level 1 but instead he retains the level he had in the first class.** Forget Old Skills:* When you change an actor's class, by default he keeps all the skills from the old class. Set this to true if you wish the actor to forget his old skills.** Get New Skills:* This is only aplicable if using the Keep Exp parameter. It makes it so that the skills that an actor could have learned are added to the actor after class change.* For Example if a Level 10 Warrior becomes a Level 10 Cleric he will not get the skill Heal that Cleric learns at Level 1 if you don't have this option set to true.** PLUGIN COMMANDS:* IF you dont wish to atlter the old Change Class Event you can also use plugin commands to do what you want.** Structure:* ChangeClass <command_option> <actorId> <newClassId>** Options:*  keepExp                      -> changes the level only keeping Exp.*  forgetOld                    -> forgets skils from the old class.*  learnNew                     -> learns skills from the new class.*  keepExp_learnNew             -> keeps the Exp and learns skills from the new class.*  keepExp_forgetOld            -> keeps the Exp and forgets skils from the old class.*  keepExp_forgetOld_learnNew   -> keeps the Exp, forgets skills from the old class and learns skills from the new class.*/
//=============================================================================
Sterling.Parameters = PluginManager.parameters('CustomClassChange');
Sterling.ClassChange = Sterling.ClassChange || {};
Sterling.ClassChange.KeepExp = String(Sterling.Parameters['Keep Exp']);
Sterling.ClassChange.ForgetOldSkills = String(Sterling.Parameters['Forget Old Skills']);
Sterling.ClassChange.GetNewSkils = String(Sterling.Parameters['Get New Skils']);
var customChangeClass = function(actorId, classId, keepExp, forgetOld, learnNew){  var actor = $gameActors.actor(actorId);
if (actor && $dataClasses[classId]) {
  if(forgetOld){
    actor._skills.forEach(function(skill){
      var index = actor._skills.indexOf(skill);
      if (index >= 0) {
        actor._skills.splice(index, 1);
      }      }, actor);
    }
    if(keepExp){
      actor.changeClass(classId, true);
    }else{
      actor.changeClass(classId, false);
    }
    if(learnNew){
      actor.currentClass().learnings.forEach(function(learning) {
        if (learning.level <= actor._level) {
          actor.learnSkill(learning.skillId);
        }
      }, actor);
    }
  }
  return true;
}

Game_Interpreter.prototype.command321 = function() {
  customChangeClass(
    this._params[0],
    this._params[1],
    eval(Sterling.ClassChange.KeepExp),
    eval(Sterling.ClassChange.ForgetOldSkills),
    eval(Sterling.ClassChange.GetNewSkils)
  );
  return true;
}

Game_Actor.prototype.changeClass = function(classId, keepExp) {
  if (keepExp) {
    this._exp[classId] = this.currentExp();
  }
  this._classId = classId;
  this.changeExp(this._exp[this._classId] || 0, false);
  this.refresh()
};

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  _Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'ChangeClass') {
    var actorId = args[1];
    var classId = args[2];
    switch (args[0]) {
      case 'keepExp':
        customChangeClass(actorId, classId, true, false, false);
        break;
      case 'keepExp_learnNew':
        customChangeClass(actorId, classId, true, false, true);
          break;
      case 'keepExp_forgetOld_learnNew':
        customChangeClass(actorId, classId, true, true, true);
        break;
      case 'keepExp_forgetOld':
        customChangeClass(actorId, classId, true, true, false);
        break;
      case 'forgetOld':
        customChangeClass(actorId, classId, false, true, false);
        break;
      case 'learnNew':
        customChangeClass(actorId, classId, false, false, true);
        break;
      case 'forgetOld_learnNew':
        customChangeClass(actorId, classId, false, true, true);
        break;
    }
  }
};