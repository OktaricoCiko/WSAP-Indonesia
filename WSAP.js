/************* 
 * Wsap *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'WSAP';  // from the Builder filename that created this script
let expInfo = {
    'No Partisipan': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionRoutineBegin());
flowScheduler.add(InstructionRoutineEachFrame());
flowScheduler.add(InstructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trial.xlsx', 'path': 'trial.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["No Partisipan"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionClock;
var Start;
var Start_Ins;
var fix_crossClock;
var Fixcross;
var Prime;
var stimuliClock;
var Stimuli;
var Space;
var Next;
var answerClock;
var Question;
var Answer;
var EndClock;
var Exit;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  Start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Start_Ins = new visual.TextStim({
    win: psychoJS.window,
    name: 'Start_Ins',
    text: 'Tekan M untuk memulai.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "fix_cross"
  fix_crossClock = new util.Clock();
  Fixcross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Fixcross', units : 'height', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([-1, -1, -1]), 
    fillColor: new util.Color([-1, -1, -1]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  Prime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Prime',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "stimuli"
  stimuliClock = new util.Clock();
  Stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimuli',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  Space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Next = new visual.TextStim({
    win: psychoJS.window,
    name: 'Next',
    text: 'Tekan <SPASI> untuk melanjutkan',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "answer"
  answerClock = new util.Clock();
  Question = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question',
    text: 'Apakah situasi tersebut cocok dengan kata yang muncul sebelumnya?\n\nTekan 1 jika YA, tekan 0 jika TIDAK.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  Answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  Exit = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exit',
    text: 'Mohon tunggu, sedang menyimpan data.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionMaxDurationReached;
var _Start_allKeys;
var InstructionMaxDuration;
var InstructionComponents;
function InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionClock.reset();
    routineTimer.reset();
    InstructionMaxDurationReached = false;
    // update component parameters for each repeat
    Start.keys = undefined;
    Start.rt = undefined;
    _Start_allKeys = [];
    psychoJS.experiment.addData('Instruction.started', globalClock.getTime());
    InstructionMaxDuration = null
    // keep track of which components have finished
    InstructionComponents = [];
    InstructionComponents.push(Start);
    InstructionComponents.push(Start_Ins);
    
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction' ---
    // get current time
    t = InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Start* updates
    if (t >= 0.0 && Start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start.tStart = t;  // (not accounting for frame time here)
      Start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Start.clearEvents(); });
    }
    
    // if Start is active this frame...
    if (Start.status === PsychoJS.Status.STARTED) {
      let theseKeys = Start.getKeys({
        keyList: typeof 'm' === 'string' ? ['m'] : 'm', 
        waitRelease: false
      });
      _Start_allKeys = _Start_allKeys.concat(theseKeys);
      if (_Start_allKeys.length > 0) {
        Start.keys = _Start_allKeys[_Start_allKeys.length - 1].name;  // just the last key pressed
        Start.rt = _Start_allKeys[_Start_allKeys.length - 1].rt;
        Start.duration = _Start_allKeys[_Start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Start_Ins* updates
    if (t >= 0.0 && Start_Ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_Ins.tStart = t;  // (not accounting for frame time here)
      Start_Ins.frameNStart = frameN;  // exact frame index
      
      Start_Ins.setAutoDraw(true);
    }
    
    
    // if Start_Ins is active this frame...
    if (Start_Ins.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction' ---
    for (const thisComponent of InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Start.corr, level);
    }
    psychoJS.experiment.addData('Start.keys', Start.keys);
    if (typeof Start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Start.rt', Start.rt);
        psychoJS.experiment.addData('Start.duration', Start.duration);
        routineTimer.reset();
        }
    
    Start.stop();
    // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fix_crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(fix_crossRoutineEachFrame());
      trialsLoopScheduler.add(fix_crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(stimuliRoutineBegin(snapshot));
      trialsLoopScheduler.add(stimuliRoutineEachFrame());
      trialsLoopScheduler.add(stimuliRoutineEnd(snapshot));
      trialsLoopScheduler.add(answerRoutineBegin(snapshot));
      trialsLoopScheduler.add(answerRoutineEachFrame());
      trialsLoopScheduler.add(answerRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fix_crossMaxDurationReached;
var fix_crossMaxDuration;
var fix_crossComponents;
function fix_crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_cross' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fix_crossClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    fix_crossMaxDurationReached = false;
    // update component parameters for each repeat
    Prime.setText(prime);
    psychoJS.experiment.addData('fix_cross.started', globalClock.getTime());
    fix_crossMaxDuration = null
    // keep track of which components have finished
    fix_crossComponents = [];
    fix_crossComponents.push(Fixcross);
    fix_crossComponents.push(Prime);
    
    for (const thisComponent of fix_crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fix_crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_cross' ---
    // get current time
    t = fix_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fixcross* updates
    if (t >= 0.0 && Fixcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixcross.tStart = t;  // (not accounting for frame time here)
      Fixcross.frameNStart = frameN;  // exact frame index
      
      Fixcross.setAutoDraw(true);
    }
    
    
    // if Fixcross is active this frame...
    if (Fixcross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Fixcross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Fixcross.tStop = t;  // not accounting for scr refresh
      Fixcross.frameNStop = frameN;  // exact frame index
      // update status
      Fixcross.status = PsychoJS.Status.FINISHED;
      Fixcross.setAutoDraw(false);
    }
    
    
    // *Prime* updates
    if (t >= 0.5 && Prime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prime.tStart = t;  // (not accounting for frame time here)
      Prime.frameNStart = frameN;  // exact frame index
      
      Prime.setAutoDraw(true);
    }
    
    
    // if Prime is active this frame...
    if (Prime.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Prime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Prime.tStop = t;  // not accounting for scr refresh
      Prime.frameNStop = frameN;  // exact frame index
      // update status
      Prime.status = PsychoJS.Status.FINISHED;
      Prime.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_cross' ---
    for (const thisComponent of fix_crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fix_cross.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fix_crossMaxDurationReached) {
        fix_crossClock.add(fix_crossMaxDuration);
    } else {
        fix_crossClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimuliMaxDurationReached;
var _Space_allKeys;
var stimuliMaxDuration;
var stimuliComponents;
function stimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimuli' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stimuliClock.reset();
    routineTimer.reset();
    stimuliMaxDurationReached = false;
    // update component parameters for each repeat
    Stimuli.setText(stimulus);
    Space.keys = undefined;
    Space.rt = undefined;
    _Space_allKeys = [];
    psychoJS.experiment.addData('stimuli.started', globalClock.getTime());
    stimuliMaxDuration = null
    // keep track of which components have finished
    stimuliComponents = [];
    stimuliComponents.push(Stimuli);
    stimuliComponents.push(Space);
    stimuliComponents.push(Next);
    
    for (const thisComponent of stimuliComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimuliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimuli' ---
    // get current time
    t = stimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stimuli* updates
    if (t >= 0 && Stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimuli.tStart = t;  // (not accounting for frame time here)
      Stimuli.frameNStart = frameN;  // exact frame index
      
      Stimuli.setAutoDraw(true);
    }
    
    
    // if Stimuli is active this frame...
    if (Stimuli.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Space* updates
    if (t >= 1 && Space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Space.tStart = t;  // (not accounting for frame time here)
      Space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Space.clearEvents(); });
    }
    
    // if Space is active this frame...
    if (Space.status === PsychoJS.Status.STARTED) {
      let theseKeys = Space.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _Space_allKeys = _Space_allKeys.concat(theseKeys);
      if (_Space_allKeys.length > 0) {
        Space.keys = _Space_allKeys[_Space_allKeys.length - 1].name;  // just the last key pressed
        Space.rt = _Space_allKeys[_Space_allKeys.length - 1].rt;
        Space.duration = _Space_allKeys[_Space_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Next* updates
    if (t >= 1 && Next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Next.tStart = t;  // (not accounting for frame time here)
      Next.frameNStart = frameN;  // exact frame index
      
      Next.setAutoDraw(true);
    }
    
    
    // if Next is active this frame...
    if (Next.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimuliComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimuliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimuli' ---
    for (const thisComponent of stimuliComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimuli.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Space.corr, level);
    }
    psychoJS.experiment.addData('Space.keys', Space.keys);
    if (typeof Space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Space.rt', Space.rt);
        psychoJS.experiment.addData('Space.duration', Space.duration);
        routineTimer.reset();
        }
    
    Space.stop();
    // the Routine "stimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var answerMaxDurationReached;
var _Answer_allKeys;
var answerMaxDuration;
var answerComponents;
function answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    answerClock.reset();
    routineTimer.reset();
    answerMaxDurationReached = false;
    // update component parameters for each repeat
    Answer.keys = undefined;
    Answer.rt = undefined;
    _Answer_allKeys = [];
    psychoJS.experiment.addData('answer.started', globalClock.getTime());
    answerMaxDuration = null
    // keep track of which components have finished
    answerComponents = [];
    answerComponents.push(Question);
    answerComponents.push(Answer);
    
    for (const thisComponent of answerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'answer' ---
    // get current time
    t = answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Question* updates
    if (t >= 0.0 && Question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question.tStart = t;  // (not accounting for frame time here)
      Question.frameNStart = frameN;  // exact frame index
      
      Question.setAutoDraw(true);
    }
    
    
    // if Question is active this frame...
    if (Question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Answer* updates
    if (t >= 0.0 && Answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answer.tStart = t;  // (not accounting for frame time here)
      Answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Answer.clearEvents(); });
    }
    
    // if Answer is active this frame...
    if (Answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = Answer.getKeys({
        keyList: typeof ['0','1'] === 'string' ? [['0','1']] : ['0','1'], 
        waitRelease: false
      });
      _Answer_allKeys = _Answer_allKeys.concat(theseKeys);
      if (_Answer_allKeys.length > 0) {
        Answer.keys = _Answer_allKeys[0].name;  // just the first key pressed
        Answer.rt = _Answer_allKeys[0].rt;
        Answer.duration = _Answer_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of answerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'answer' ---
    for (const thisComponent of answerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('answer.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Answer.corr, level);
    }
    psychoJS.experiment.addData('Answer.keys', Answer.keys);
    if (typeof Answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Answer.rt', Answer.rt);
        psychoJS.experiment.addData('Answer.duration', Answer.duration);
        routineTimer.reset();
        }
    
    Answer.stop();
    // the Routine "answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'j8SbWj3G2vW7', // UPDATE WITH YOUR DATAPIPE EXPERIMENT ID
            filename: filename,
            data: data,
        }),
    })
    .then(response => response.json())
    .then(result => {
        // Log response and force experiment end
        console.log(result);
        quitPsychoJS();
    })
    .catch(err => {
        // Handle network or server errors
        console.error('Failed to save data:', err);
    });
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = 3
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(Exit);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > EndMaxDuration) {
        EndMaxDurationReached = true
        continueRoutine = false
    }
    
    // *Exit* updates
    if (t >= 0.0 && Exit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Exit.tStart = t;  // (not accounting for frame time here)
      Exit.frameNStart = frameN;  // exact frame index
      
      Exit.setAutoDraw(true);
    }
    
    
    // if Exit is active this frame...
    if (Exit.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
