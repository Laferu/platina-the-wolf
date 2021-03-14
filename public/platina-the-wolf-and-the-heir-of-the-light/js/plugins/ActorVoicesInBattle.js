//=============================================================================
// Fogo - Actor Voices In Battle (v1.0.3)
// Port of Actor Voices In Battle (VX Ace) by DiamondandPlatinum3
// by Fogomax
//=============================================================================

/*:
  * @author Fogomax
  * @plugindesc v1.0.3 Grants you the ability to have your actors talk throughout
  * battle
  *
  * @help
  * ===========================================================================
  * ● HELP
  * ===========================================================================
  * Introduction:
  * Allows the developer to have voice clips or sound effects play in battle.
  *
  *How to Use:
  *Place the main plugin as well as the configuration plugin UNDER all 
  *other combat plugins.
  *
  *Configuration plugin MUST go below main plugin.
  *
  *Add an additional Folder in your audio files called Battle_voices. 
  *The path should look like this:(Project1\audio\se\Battle_Voices\Actor Name)
  *
  *Folder names MUST match the actor's name in the database.(DO NOT use 
  *underscores in the folder name UNLESS your actor's name in the database 
  *has them in its name.)
  *
  *Open the configuration plugin in your choice text editor.
  *
  *Type in the names of your voice clips or sound effect files in the 
  *proper fields.(DO NOT INCLUDE the extension)
  *
  *Ogg audio files only.
  
  *Terms:

  *Free to use but please credit DiamondandPlatinum3 as well as Fogomax.

  *Updates:

  *1.0- Plugin created.
  *1.0.2- Demons of hell squashed along with misc bug.
  *1.0.3- Coding error in how the plugin handles voice lines was fixed.
*/

var Imported = Imported || {};
Imported["Fogo_ActorVoicesInBattle"] = "1.0.2";

var Fogo = Fogo || {};
Fogo.ActorVoicesInBattle = {};

(function($) {
	// 'use strict';

	// Loaded from Fogo_ActorVoicesInBattleConfig.js
	$.Config = [];

	//-----------------------------------------------------------------------------
	// Module functions
	//

	$.playVoice = function(voiceArray, actorId) {
		if ($.checkIfActorMuted(actorId)) {
			return true;
		}

		// If voiceArray is not null and not empty
		if (voiceArray && voiceArray.length > 0) {
			var index = Math.randomInt(voiceArray.length / 4) * 4;
			if ($.isString(voiceArray[index]) && $.isNumber(voiceArray[index + 1]) && $.isNumber(voiceArray[index + 2])) {
				// Get the Actor Folder Name
				var actorFolderName = "";
				var actorVoicesNames = $gameSystem.actorVoicesNames();
				if (actorVoicesNames != null && actorVoicesNames.length > actorId && $.isString(actorVoicesNames[actorId])
					&& actorVoicesNames[actorId] !== "") {
					actorFolderName = actorVoicesNames[actorId];
				} else {
					actorFolderName = $gameActors.actor(actorId).name();
				}

				// Get path to file
				var pathToFile = $.Config.FOLDER_DIRECTORY_NAME + "/" + actorFolderName + "/" + voiceArray[index];

				// Play voice
				var se = { name: pathToFile, pan: 0, pitch: voiceArray[index + 2], volume: voiceArray[index + 1] };
				var waitTime = voiceArray[index + 3];
				if ($.isNumber(waitTime) && waitTime > 0 && SceneManager._scene instanceof Scene_Battle) {
					SceneManager._scene.queueBattleVoice(se, waitTime);
				} else {
					AudioManager.playSe(se);
				}

				return true;
			}
		}

		// We return true and false because during battle start and victory, if an actor
		// doesn't have a voice clip for one condition, we'll try to find another met
		// condition in which the actor DOES have a voice.
		return false;
	};

	$.allowedToPlayVoice = function() {
		return SceneManager._scene instanceof Scene_Battle;
	};

	$.allowedToSpeak = function() {
		return Math.randomInt(100) < $.Config.VOICE_FREQUENCY;
	};

	$.checkIfActorMuted = function(actorId) {
		// Don't play sound if muted
		if ($gameSwitches.value($.Config.EVENT_SWITCH_ID)) return true;
		return $gameActors.actor(actorId).states().some(function(state) {
			return $.Config.SILENCE_STATES.contains(state.id);
		});
	};

	$.getBattleActorId = function() {
		// Get a battle actor ID, who is to speak
		var actorIds = [];
		$gameParty.battleMembers().forEach(function(member) {
			if (member.isAlive()) {
				actorIds.push(member.actor().id);
			}
		});
		return actorIds[Math.randomInt(actorIds.length)];
	};

	$.playPartyNeedsHealingVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.PARTY_NEEDS_HEALING[actorId], actorId);
	};

	$.playTooManyEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.TOO_MANY_ENEMIES[actorId], actorId);
	};

	$.playVeryWeakEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.VERY_WEAK_ENEMIES[actorId], actorId);
	};

	$.playWeakEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.WEAK_ENEMIES[actorId], actorId);
	};

	$.playEqualEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.EQUAL_ENEMIES[actorId], actorId);
	};

	$.playStrongEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.STRONG_ENEMIES[actorId], actorId);
	};

	$.playVeryStrongEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.VERY_STRONG_ENEMIES[actorId], actorId);
	};

	$.playMissedEnemiesVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.MISSED_ENEMY[actorId], actorId);
	};

	$.playEvadedEnemyVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.DODGED_ENEMY[actorId], actorId);
	};

	$.playNormalAttackVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.ACTOR_ATTACKING[actorId], actorId);
	};

	$.playSkillVoice = function(actorId, skillId) {
		if (!$.allowedToPlayVoice()) return true;

		var voice = [];
		var regex = '~ActorVoice:\\s*' + actorId + '\\,*\\s*\\"(.+?)\\"\\,*\\s*(\\d*)\\,*\\s*(\\d*)\\,*\\s*(\\d*)';
		if ($dataSkills[skillId].note.match(new RegExp(regex, 'im'))) {
			voice.push(RegExp.$1);
			voice.push(RegExp.$2 !== '' ? parseInt(RegExp.$2) : 80);
			voice.push(RegExp.$3 !== '' ? parseInt(RegExp.$3) : 100);
			voice.push(RegExp.$4 !== '' ? parseInt(RegExp.$4) : 0);
		}

		// Modify skill voice to generic skill if there is no specific voice for this skill
		if (voice.length === 0) {
			if ($.Config.SKILLS_NOT_TO_PLAY_VOICE_FOR.contains(skillId) || !$.allowedToSpeak()) return true;
			voice = $.Config.USING_SKILLS[actorId];
		}

		return $.playVoice(voice, actorId);
	};

	$.playItemVoice = function(actorId, itemId) {
		if (!$.allowedToPlayVoice()) return true;

		var voice = [];
		var regex = '~ActorVoice:\\s*' + actorId + '\\,*\\s*\\"(.+?)\\"\\,*\\s*(\\d*)\\,*\\s*(\\d*)\\,*\\s*(\\d*)';
		if ($dataItems[itemId].note.match(new RegExp(regex, 'im'))) {
			voice.push(RegExp.$1);
			voice.push(RegExp.$2 !== '' ? parseInt(RegExp.$2) : 80);
			voice.push(RegExp.$3 !== '' ? parseInt(RegExp.$3) : 100);
			voice.push(RegExp.$4 !== '' ? parseInt(RegExp.$4) : 0);
		}

		// Modify item voice to generic item voice if there is no specific voice for this item
		if (voice.length === 0) {
			if (!$.allowedToSpeak()) return true;
			voice = $.Config.USING_ITEMS[actorId];
		}

		return $.playVoice(voice, actorId);
	};

	$.playSkillOrItemVoice = function(actorId, item) {
		if (DataManager.isSkill(item)) {
			// Using a skill
			if (item.id == 1) {
				// Attack
				$.playNormalAttackVoice(actorId);
			} else {
				// Another skill besides Attack
				$.playSkillVoice(actorId, item.id);
			}
		} else {
			// Using an item
			$.playItemVoice(actorId, item.id);
		}
	};

	$.playDeathVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		return $.playVoice($.Config.DEATH_VOICE[actorId], actorId);
	};

	$.playLeveledupVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		if (!$.Config.LEVELUP_VICTORY[actorId]) return false;
		// Wait for actor to finish talking
		var index = Math.randomInt($.Config.LEVELUP_VICTORY[actorId].length / 4) * 4;
		var voice = [$.Config.LEVELUP_VICTORY[actorId][index],     $.Config.LEVELUP_VICTORY[actorId][index + 1],
					 $.Config.LEVELUP_VICTORY[actorId][index + 2], $.Config.LEVELUP_VICTORY[actorId][index + 3]
		];
		// Return false if failed to play voice
		if (!$.playVoice(voice, actorId)) return false;
		return true;
	};

	$.playHealedVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.HP_MP_RESTORE[actorId], actorId);
	};

	$.playRevivedVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		return $.playVoice($.Config.REVIVED_VOICE[actorId], actorId);
	};

	$.playDefaultDamageVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.DEFAULT_DAMAGE[actorId], actorId);
	};

	$.playLittleDamageVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.LITTLE_DAMAGE[actorId], actorId);
	};

	$.playSignificantDamageVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.SIGNIFICANT_DAMAGE[actorId], actorId);
	};

	$.playHeavyDamageVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.HEAVY_DAMAGE[actorId], actorId);
	};

	$.playMassiveDamageVoice = function(actorId) {
		if (!$.allowedToPlayVoice() || !$.allowedToSpeak()) return true;
		return $.playVoice($.Config.MASSIVE_DAMAGE[actorId], actorId);
	};

	$.playEscapeAttemptVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		return $.playVoice($.Config.ESCAPE_ATTEMPT_VOICE[actorId], actorId);
	};

	$.playEscapeSuccessfulVoice = function(actorId, forceAllow) {
		forceAllow = forceAllow || false;
		// When you escape, you are now on Scene_Map instead of Scene_Battle
		// So forceAllow will let you play the voice if you did infact just escape from battle
		if (!$.allowedToPlayVoice() && !forceAllow) return true;
		return $.playVoice($.Config.ESCAPE_ATTEMPT_VOICE[actorId], actorId);
	};

	$.playEscapeFailedVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		return $.playVoice($.Config.FAILED_ESCAPE[actorId], actorId);
	};

	$.playDefaultVictoryVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.NORMAL_VICTORY[actorId], actorId);
	};

	$.playBattleWasEasyVictory = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.THAT_WAS_EASY[actorId], actorId);
	};

	$.playVeryLongBattleVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.BATTLE_TOOK_AGES[actorId], actorId);
	};

	$.playPartyWasBadlyInjuredVoice = function(actorId) {
		if (!$.allowedToPlayVoice()) return true;
		actorId = actorId || $.getBattleActorId();
		return $.playVoice($.Config.THAT_WAS_TOUGH[actorId], actorId);
	};

	$.isString = function(variable) {
		return typeof variable === 'string';
	};

	$.isNumber = function(variable) {
		return typeof variable === 'number';
	};

	$.getBattlerId = function(battler) {
		return battler.isActor() ? battler.actorId() : battler.enemyId();
	}

	//-----------------------------------------------------------------------------
	// Game_System
	//

	var _Game_System_initialize = Game_System.prototype.initialize;
	
	Game_System.prototype.initialize = function() {
		_Game_System_initialize.call(this);
		this._actorVoicesNames = [];
	};

	Game_System.prototype.resetActorVoiceNames = function() {
		this._actorVoicesNames = [];
	};

	Game_System.prototype.actorVoicesNames = function() {
		return this._actorVoicesNames;
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//

	Game_Interpreter.prototype.setActorVoiceName = function(id, name) {
		if (!$.isNumber(id)) throw new Error('You did not insert a valid ID for the actor'); return;
		if (!$.isString(name)) throw new Error('You did not insert a valid name for the actor'); return;

		if ($gameSystem.actorVoicesNames() === null) $gameSystem.resetActorVoiceNames();
		$gameSystem.actorVoicesNames()[id] = name;
	};

	//-----------------------------------------------------------------------------
	// Scene_Battle
	//

	var _Scene_Battle_initialize = Scene_Battle.prototype.initialize;
	
	Scene_Battle.prototype.initialize = function() {
		_Scene_Battle_initialize.call(this);
		this.initBattleVoices();
	};

	Scene_Battle.prototype.initBattleVoices = function() {
		this._queuedBattleVoices = [];
	};

	Scene_Battle.prototype.queueBattleVoice = function(se, interval) {
		this._queuedBattleVoices.push({
			se: se,
			duration: interval
		});
	};

	var _Scene_Battle_start = Scene_Battle.prototype.start;
	
	Scene_Battle.prototype.start = function() {
		_Scene_Battle_start.call(this);
		this.playStartBattleVoice();
	};

	var _Scene_Battle_update = Scene_Battle.prototype.update;
	
	Scene_Battle.prototype.update = function() {
		_Scene_Battle_update.call(this);
		this.updateBattleVoices();
	};

	Scene_Battle.prototype.updateBattleVoices = function() {
		if (this._queuedBattleVoices.length <= 0) return;
		this._queuedBattleVoices.forEach(function(voice) {
			if (voice.duration <= 0) {
				AudioManager.playSe(voice.se);
				this._queuedBattleVoices.splice(this._queuedBattleVoices.indexOf(voice), 1);
			} else {
				voice.duration--;
			}
		}.bind(this));
	};

	Scene_Battle.prototype.playStartBattleVoice = function() {
		// Party needs healing?
		var partyTotalHp = $gameParty.battleMembers().reduce(function(sum, ally) {
			return sum + ally.mhp;
		}, 0);
		var partyCurrentHp = $gameParty.battleMembers().reduce(function(currentHp, ally) {
			return currentHp - (ally.mhp - ally.hp);
		}, partyTotalHp);

		if (partyCurrentHp < partyTotalHp * ($.Config.PARTY_NEEDS_HEALING['ratio'] * 0.01)) {
			if ($.playPartyNeedsHealingVoice()) return;
		}

		// Too many enemies?
		if ($gameTroop.members().length > $gameParty.members().length + $.Config.TOO_MANY_ENEMIES['ratio']) {
			if ($.playTooManyEnemiesVoice()) return;
		}

		// Which side is stronger?
		var strongestEnemyStats = [0, 0, 0, 0];
		var strongestPartyStats = [0, 0, 0, 0];

		$gameTroop.members().forEach(function(enemy) {
			if (enemy.atk > strongestEnemyStats[0]) strongestEnemyStats[0] = enemy.atk;
			if (enemy.def > strongestEnemyStats[1]) strongestEnemyStats[1] = enemy.def;
			if (enemy.mat > strongestEnemyStats[2]) strongestEnemyStats[2] = enemy.mat;
			if (enemy.mdf > strongestEnemyStats[3]) strongestEnemyStats[3] = enemy.mdf;
		});
		$gameParty.battleMembers().forEach(function(ally) {
			if (ally.atk > strongestPartyStats[0]) strongestPartyStats[0] = ally.atk;
			if (ally.def > strongestPartyStats[1]) strongestPartyStats[1] = ally.def;
			if (ally.mat > strongestPartyStats[2]) strongestPartyStats[2] = ally.mat;
			if (ally.mdf > strongestPartyStats[3]) strongestPartyStats[3] = ally.mdf;
		});

		var enemyPower = strongestEnemyStats.reduce(function(a, b) { return a + b }, 0);
		var partyPower = strongestPartyStats.reduce(function(a, b) { return a + b }, 0);

		if (enemyPower < partyPower * $.Config.VERY_WEAK_ENEMIES['ratio'] * 0.01)   return $.playVeryWeakEnemiesVoice();
        if (enemyPower < partyPower * $.Config.WEAK_ENEMIES['ratio'] * 0.01)        return $.playWeakEnemiesVoice();
        if (enemyPower > partyPower * $.Config.VERY_STRONG_ENEMIES['ratio'] * 0.01) return $.playVeryStrongEnemiesVoice();
        if (enemyPower > partyPower * $.Config.STRONG_ENEMIES['ratio'] * 0.01)      return $.playStrongEnemiesVoice();
		return $.playEqualEnemiesVoice();
	};

	//-----------------------------------------------------------------------------
	// Game_Action
	//

	var _Game_Action_apply = Game_Action.prototype.apply;
	
	Game_Action.prototype.apply = function(target) {
		_Game_Action_apply.call(this, target);
		if (target.isActor()) target.setActorSaidThankYouAlready();
		if (target.result().missed) {
			if (!target.isActor() && this.subject().isActor()) {
				$.playMissedEnemiesVoice(this.subject().actorId());
			} else if (target.isActor() && !this.subject().isActor()) {
				$.playEvadedEnemyVoice(target.actorId())
			}
		}
	};

	Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
	    var value = (target.mhp * effect.value1 + effect.value2) * target.rec;
	    if (this.isItem()) {
	        value *= this.subject().pha;
	    }
	    value = Math.floor(value);
	    if (value !== 0) {
	        target.gainHp(value, this.subject());
	        this.makeSuccess(target);
	    }
	};

	Game_Action.prototype.itemEffectRecoverMp = function(target, effect) {
	    var value = (target.mmp * effect.value1 + effect.value2) * target.rec;
	    if (this.isItem()) {
	        value *= this.subject().pha;
	    }
	    value = Math.floor(value);
	    if (value !== 0) {
	        target.gainMp(value, this.subject());
	        this.makeSuccess(target);
	    }
	};

	var _Game_Action_executeDamage = Game_Action.prototype.executeDamage;
	
	Game_Action.prototype.executeDamage = function(target, value) {
		var currentHp = target.hp;
		var currentMp = target.mp;
		_Game_Action_executeDamage.call(this, target, value);
		if ((currentHp < target.hp || currentMp < target.mp) && !target.isEnemy()) {
			if (target === this.subject()) {
				if ($.Config.HP_MP_RESTORE['self_heal_speak']) {
					$.playHealedVoice(target.actorId());
				}
			} else {
				$.playHealedVoice(target.actorId());
			}
		}
	};

	//-----------------------------------------------------------------------------
	// Window_BattleLog
	//

	var _Window_BattleLog_showAnimation = Window_BattleLog.prototype.showAnimation;
	
	Window_BattleLog.prototype.showAnimation = function(subject, targets, animationId) {
		_Window_BattleLog_showAnimation.call(this, subject, targets, animationId);
		if (animationId > 0) {
			this._speakForMultipleHits = true;
			var animation = $dataAnimations[animationId];
			if (animation) {
				targets.forEach(function(target) {
					this.onAnimationBegin(subject, target);
				}.bind(this));
			}
		}
	};

	Window_BattleLog.prototype.onAnimationBegin = function(subject, target) {
		if (this._speakForMultipleHits) {
			if (subject.isActor() && !target.isActor()) {
				this._speakForMultipleHits = $.Config.PLAY_MULTIPLE_VOICES_FOR_MULTIPLE_HITS;
				if (this._lastCurrentAction) {
					$.playSkillOrItemVoice($.getBattlerId(subject), this._lastCurrentAction.item());
				}
			}
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Actor
	//

	var _Game_Actor_useItem = Game_Actor.prototype.useItem;
	
	Game_Actor.prototype.useItem = function(item) {
		if (DataManager.isItem(item)) {
			$.playItemVoice(this._actorId, item.id);
		}
		_Game_Actor_useItem.call(this, item);
	};

	var _Game_Actor_die = Game_Actor.prototype.die;
	
	Game_Actor.prototype.die = function() {
		$.playDeathVoice(this._actorId);
		_Game_Actor_die.call(this);
	};

	var _Game_Actor_changeExp = Game_Actor.prototype.changeExp;
	
	Game_Actor.prototype.changeExp = function(exp, show) {
		var lastLevel = this._level;
		_Game_Actor_changeExp.call(this, exp, show);
		if (this._level > lastLevel) {
			$.playLeveledupVoice(this._actorId);
		}
	};

	var _Game_Actor_gainHp = Game_Actor.prototype.gainHp;
	
	Game_Actor.prototype.gainHp = function(value, subject) {
		if (value > 0 && subject && subject !== this && !this._actorSaidThankYou) {
			$.playHealedVoice(this._actorId);
			this._actorSaidThankYou = true;
		}
		_Game_Actor_gainHp.call(this, value, subject);
	};

	var _Game_Actor_gainMp = Game_Actor.prototype.gainMp;
	
	Game_Actor.prototype.gainMp = function(value, subject) {
		if (value > 0 && subject && subject !== this && !this._actorSaidThankYou) {
			$.playHealedVoice(this._actorId);
			this._actorSaidThankYou = true;
		}
		_Game_Actor_gainMp.call(this, value, subject);
	};

	var _Game_Actor_revive = Game_Actor.prototype.revive;
	
	Game_Actor.prototype.revive = function() {
		_Game_Actor_revive.call(this);
		$.playRevivedVoice(this._actorId);
	};

	var _Game_Actor_onDamage = Game_Actor.prototype.onDamage;
	
	Game_Actor.prototype.onDamage = function(value) {
		if (value > 0 && (this.hp - value) > 0) {
			this.playAppropriateActorDamageVoice(value);
		}
		_Game_Actor_onDamage.call(this, value);
	};

	Game_Actor.prototype.playAppropriateActorDamageVoice = function(value) {
		// Play massive damage voice
		if (value > this.mhp * $.Config.MASSIVE_DAMAGE['ration'] * 0.01) {
			if ($.playMassiveDamageVoice(this._actorId)) return true;
		}
		// Play heavy damage voice
		if (value > this.mhp * $.Config.HEAVY_DAMAGE['ration'] * 0.01) {
			if ($.playHeavyDamageVoice(this._actorId)) return true;
		}
		// Play significant damage voice
		if (value > this.mhp * $.Config.SIGNIFICANT_DAMAGE['ration'] * 0.01) {
			if ($.playSignificantDamageVoice(this._actorId)) return true;
		}
		// Play little damage voice
		if (value > this.mhp * $.Config.LITTLE_DAMAGE['ration'] * 0.01) {
			if ($.playLittleDamageVoice(this._actorId)) return true;
		}
		// Play pitance damage voice
		return $.playDefaultDamageVoice(this._actorId);
	};

	Game_Actor.prototype.setActorSaidThankYouAlready = function() {
		this._actorSaidThankYou = false;
	};

	//-----------------------------------------------------------------------------
	// BattleManager
	//

	var _BattleManager_setup = BattleManager.setup;
	
	BattleManager.setup = function(troopId, canEscape, canLose) {
		this._victoryVoicePlayed = false;
		this._partyStartTotalHp = $gameParty.battleMembers().reduce(function(totalHp, ally) {
			return totalHp + ally.hp;
		}, 0);
		_BattleManager_setup.call(this, troopId, canEscape, canLose);
	};

	var _BattleManager_startAction = BattleManager.startAction;
	
	BattleManager.startAction = function() {
		_BattleManager_startAction.call(this);
		this._logWindow._lastCurrentAction = this._subject.currentAction();
	};

	var _BattleManager_processEscape = BattleManager.processEscape;
	
	BattleManager.processEscape = function() {
		var actorToSpeak = $.getBattleActorId();
		$.playEscapeAttemptVoice(actorToSpeak);

		var escaped = _BattleManager_processEscape.call(this);
		if (escaped) {
			$.playEscapeSuccessfulVoice(actorToSpeak, true);
		} else {
			$.playEscapeFailedVoice(actorToSpeak);
		}

		return escaped;
	};

	var _BattleManager_processVictory = BattleManager.processVictory;
	
	BattleManager.processVictory = function() {
		this.playVictoryVoice();
		_BattleManager_processVictory.call(this);
	};

	var _BattleManager_processDefeat = BattleManager.processDefeat;
	
	BattleManager.processDefeat = function() {
		// This method is merely here in case the this._canLose variable is on.
		// Actors will say thank you when being revived after defeat. So to counteract
		// this we set the mute event_switch on
		var esId = $.Config.EVENT_SWITCH_ID;
		var esOn = $gameSwitches.value(esId) || false;
		$gameSwitches.setValue(esId, true);
		_BattleManager_processDefeat.call(this);
		$gameSwitches.setValue(esId, esOn);
	};

	BattleManager.playVictoryVoice = function() {
		if (this._victoryVoicePlayed) return;
		this._victoryVoicePlayed = true;
		// Battle took ages?
		if ($gameTroop.turnCount() >= $.Config.BATTLE_TOOK_AGES['ratio']) {
			if ($.playVeryLongBattleVoice()) return;
		}
		// Party was badly injured?
		var partyCurrentHp = $gameParty.battleMembers().reduce(function(currentMp, ally) {
			return currentMp + ally.hp
		}, 0);
		if (partyCurrentHp < this._partyStartTotalHp * ($.Config.THAT_WAS_TOUGH['radio'] * 0.01)) {
			if ($.playPartyWasBadlyInjuredVoice()) return;
		}
		// Battle was easy?
		if ($gameTroop.turnCount() <= $.Config.THAT_WAS_EASY['ratio']) {
			if ($.playBattleWasEasyVictory()) return;
		}
		// Default victory speech
		$.playDefaultVictoryVoice();
	};

})(Fogo.ActorVoicesInBattle);