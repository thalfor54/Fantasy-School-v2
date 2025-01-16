let strengthSpeciesModifier = document.getElementById("strengthSpeciesModifier")
let dexteritySpeciesModifier = document.getElementById("dexteritySpeciesModifier")
let constitutionSpeciesModifier = document.getElementById("constitutionSpeciesModifier")
let resilienceSpeciesModifier = document.getElementById("resilienceSpeciesModifier")
let persuasionSpeciesModifier = document.getElementById("persuasionSpeciesModifier")
let manipulationSpeciesModifier = document.getElementById("manipulationSpeciesModifier")
let ingratiationSpeciesModifier = document.getElementById("ingratiationSpeciesModifier")
let charismaSpeciesModifier = document.getElementById("charismaSpeciesModifier")
let perceptionSpeciesModifier = document.getElementById("perceptionSpeciesModifier")
let insightSpeciesModifier = document.getElementById("insightSpeciesModifier")
let reasonSpeciesModifier = document.getElementById("reasonSpeciesModifier")
let intuitionSpeciesModifier = document.getElementById("intuitionSpeciesModifier")
let focusSpeciesModifier = document.getElementById("focusSpeciesModifier")
let resolveSpeciesModifier = document.getElementById("resolveSpeciesModifier")
let selfControlSpeciesModifier = document.getElementById("selfControlSpeciesModifier")
let agitatedSpeciesModifier = document.getElementById("agitatedSpeciesModifier")
let angrySpeciesModifier = document.getElementById("angrySpeciesModifier")
let hornySpeciesModifier = document.getElementById("hornySpeciesModifier")
let melancholySpeciesModifier = document.getElementById("melancholySpeciesModifier")
let fortitudeSpeciesModifier = document.getElementById("fortitudeSpeciesModifier")
let reflexSpeciesModifier = document.getElementById("reflexSpeciesModifier")
let mindSpeciesModifier = document.getElementById("mindSpeciesModifier")
let willSpeciesModifier = document.getElementById("willSpeciesModifier")
let strengthCliqueModifier = document.getElementById("strengthCliqueModifier")
let dexterityCliqueModifier = document.getElementById("dexterityCliqueModifier")
let constitutionCliqueModifier = document.getElementById("constitutionCliqueModifier")
let resilienceCliqueModifier = document.getElementById("resilienceCliqueModifier")
let persuasionCliqueModifier = document.getElementById("persuasionCliqueModifier")
let manipulationCliqueModifier = document.getElementById("manipulationCliqueModifier")
let ingratiationCliqueModifier = document.getElementById("ingratiationCliqueModifier")
let charismaCliqueModifier = document.getElementById("charismaCliqueModifier")
let perceptionCliqueModifier = document.getElementById("perceptionCliqueModifier")
let insightCliqueModifier = document.getElementById("insightCliqueModifier")
let reasonCliqueModifier = document.getElementById("reasonCliqueModifier")
let intuitionCliqueModifier = document.getElementById("intuitionCliqueModifier")
let agitatedCliqueModifier = document.getElementById("agitatedCliqueModifier")
let angryCliqueModifier = document.getElementById("angryCliqueModifier")
let hornyCliqueModifier = document.getElementById("hornyCliqueModifier")
let melancholyCliqueModifier = document.getElementById("melancholyCliqueModifier")    
let focusCliqueModifier = document.getElementById("focusCliqueModifier")
let resolveCliqueModifier = document.getElementById("resolveCliqueModifier")
let selfControlCliqueModifier = document.getElementById("selfControlCliqueModifier")
let fortitudeCliqueModifier = document.getElementById("fortitudeCliqueModifier")
let reflexCliqueModifier = document.getElementById("reflexCliqueModifier")
let mindCliqueModifier = document.getElementById("mindCliqueModifier")
let willCliqueModifier = document.getElementById("willCliqueModifier")

let addToPerception = document.getElementById("perceptionCliqueModifier")
let addToIntuition = document.getElementById("intuitionCliqueModifier")
let addToReason = document.getElementById("reasonCliqueModifier")
let addToInsight = document.getElementById("insightCliqueModifier")


let fortitudeBaseScore = document.getElementById("fortitudeBaseScore")
let reflexBaseScore = document.getElementById("reflexBaseScore")
let mindBaseScore = document.getElementById("mindBaseScore")
let willBaseScore = document.getElementById("willBaseScore")

let nerdStatPicks = document.getElementById("nerdStatPicks")
let jockStatPicks = document.getElementById("jockStatPicks")
let prepStatPicks = document.getElementById("prepStatPicks")
let theaterKidStatPicks = document.getElementById("theaterKidStatPicks")
let lonerStatPicks = document.getElementById("lonerStatPicks")
let chameleonStatPicks = document.getElementById("chameleonStatPicks")

let cliqueAbilities = document.getElementById("cliqueAbilities")
let nerdAbilities = document.getElementById("nerdAbilities")
let jockAbilities = document.getElementById("jockAbilities")
let prepAbilities = document.getElementById("prepAbilities")
let theaterKidAbilities = document.getElementById("theaterKidAbilities")
let lonerAbilities = document.getElementById("lonerAbilities")
let chameleonAbilities = document.getElementById("chameleonAbilities")

let witchStatPicks = document.getElementById("witchStatPicks")

let talentUntrained = document.getElementsByClassName("talentUntrained")
let talentProficient = document.getElementsByClassName("talentProficient")
let talentSkilled = document.getElementsByClassName("talentSkilled")
let skillUntrained = document.getElementsByClassName("skillUntrained")
let skillProficient = document.getElementsByClassName("skillProficient")
let skillSkilled = document.getElementsByClassName("skillSkilled")
let knowledgeUntrained = document.getElementsByClassName("knowledgeUntrained")
let knowledgeProficient = document.getElementsByClassName("knowledgeProficient")
let knowledgeSkilled = document.getElementsByClassName("knowledgeSkilled")

let talent = document.getElementsByClassName("talent")
let skill = document.getElementsByClassName("skill")
let knowledge = document.getElementsByClassName("knowledge")
let jockRadio = document.getElementById("jocks")
let prepRadio = document.getElementById("preps")


let speciesModifierArray = [strengthSpeciesModifier, dexteritySpeciesModifier, constitutionSpeciesModifier, resilienceSpeciesModifier, persuasionSpeciesModifier, manipulationSpeciesModifier, ingratiationSpeciesModifier, charismaSpeciesModifier, perceptionSpeciesModifier, insightSpeciesModifier, reasonSpeciesModifier, intuitionSpeciesModifier, focusSpeciesModifier, resolveSpeciesModifier, selfControlSpeciesModifier, agitatedSpeciesModifier, angrySpeciesModifier, hornySpeciesModifier, melancholySpeciesModifier, fortitudeSpeciesModifier, reflexSpeciesModifier, mindSpeciesModifier, willSpeciesModifier]
let cliqueModifierArray = [strengthCliqueModifier, dexterityCliqueModifier, constitutionCliqueModifier, resilienceCliqueModifier, persuasionCliqueModifier, manipulationCliqueModifier, ingratiationCliqueModifier, charismaCliqueModifier, perceptionCliqueModifier, insightCliqueModifier, reasonCliqueModifier, intuitionCliqueModifier, focusCliqueModifier, resolveCliqueModifier, selfControlCliqueModifier, agitatedCliqueModifier, angryCliqueModifier, hornyCliqueModifier, melancholyCliqueModifier, fortitudeCliqueModifier, reflexCliqueModifier, mindCliqueModifier, willCliqueModifier]
let changeRowArray = [changeStrengthRow, changeDexterityRow, changeConstitutionRow, changeResilienceRow, changePersuasionRow, changeManipulationRow, changeIngratiationRow, changeCharismaRow, changePerceptionRow, changeInsightRow, changeReasonRow, changeIntuitionRow]
let cliqueArray = [nerdStatPicks, jockStatPicks, prepStatPicks, theaterKidStatPicks, lonerStatPicks, chameleonStatPicks]
let cliqueAbilityArray = [nerdAbilities, jockAbilities, prepAbilities, theaterKidAbilities, lonerAbilities, chameleonAbilities]
let statStringArray = ['Strength', 'Dexterity', 'Constitution', 'Resilience', 'Persuasion', 'Manipulation', 'Ingratiation', 'Charisma', 'Perception', 'Insight', 'Reason', 'Intuition']
let resetCliqueAbilitiesArray = [resetNerdAbilities, resetJockAbilities, resetPrepAbilities, resetTheaterKidAbilities, resetLonerAbilities, resetChameleonAbilities]

let cliqueTalents = document.getElementById("cliqueTalents")
let cliqueSkills = document.getElementById("cliqueSkills")
let cliqueKnowledges = document.getElementById("cliqueKnowledges")

let armorClass = document.getElementById("armorClass")
let initiative = document.getElementById("initiative")
let hitPoints = document.getElementById("hitPoints")

function baselineModifiers() {
    changeStrengthRow()
    changeDexterityRow()
    changeConstitutionRow()
    changeResilienceRow()
    changePersuasionRow()
    changeManipulationRow()
    changeIngratiationRow()
    changeCharismaRow()
    changePerceptionRow()
    changeInsightRow()
    changeReasonRow()
    changeIntuitionRow()
}

function calculateFeelsResistancesAndSaves() {
    let agitatedSpeciesModifier = document.getElementById("agitatedSpeciesModifier").innerHTML
    let agitatedCliqueModifier = document.getElementById("agitatedCliqueModifier").innerHTML
    agitatedCliqueModifier = agitatedCliqueModifier * -1
    let agitatedTotal = document.getElementById("agitatedTotal")
    agitatedTotal.innerHTML = agitatedSpeciesModifier - agitatedCliqueModifier +1
    let angrySpeciesModifier = document.getElementById("angrySpeciesModifier").innerHTML
    let angryCliqueModifier = document.getElementById("angryCliqueModifier").innerHTML
    angryCliqueModifier = angryCliqueModifier * -1
    let angryTotal = document.getElementById("angryTotal")
    angryTotal.innerHTML = angrySpeciesModifier - angryCliqueModifier +1
    let hornySpeciesModifier = document.getElementById("hornySpeciesModifier").innerHTML
    let hornyCliqueModifier = document.getElementById("hornyCliqueModifier").innerHTML
    hornyCliqueModifier = hornyCliqueModifier * -1
    let hornyTotal = document.getElementById("hornyTotal")
    hornyTotal.innerHTML = hornySpeciesModifier - hornyCliqueModifier +1
    let melancholySpeciesModifier = document.getElementById("melancholySpeciesModifier").innerHTML
    let melancholyCliqueModifier = document.getElementById("melancholyCliqueModifier").innerHTML
    melancholyCliqueModifier = melancholyCliqueModifier * -1
    let melancholyTotal = document.getElementById("melancholyTotal")
    melancholyTotal.innerHTML = melancholySpeciesModifier - melancholyCliqueModifier +1
    let focusSpeciesModifier = document.getElementById("focusSpeciesModifier").innerHTML
    let focusCliqueModifier = document.getElementById("focusCliqueModifier").innerHTML
    focusCliqueModifier = focusCliqueModifier * -1
    let focusTotal = document.getElementById("focusTotal")
    focusTotal.innerHTML = focusSpeciesModifier - focusCliqueModifier
    let resolveSpeciesModifier = document.getElementById("resolveSpeciesModifier").innerHTML
    let resolveCliqueModifier = document.getElementById("resolveCliqueModifier").innerHTML
    resolveCliqueModifier = resolveCliqueModifier * -1
    let resolveTotal = document.getElementById("resolveTotal")
    resolveTotal.innerHTML = resolveSpeciesModifier - resolveCliqueModifier
    let selfControlSpeciesModifier = document.getElementById("selfControlSpeciesModifier").innerHTML
    let selfControlCliqueModifier = document.getElementById("selfControlCliqueModifier").innerHTML
    selfControlCliqueModifier = selfControlCliqueModifier * -1
    let selfControlTotal = document.getElementById("selfControlTotal")
    selfControlTotal.innerHTML = selfControlSpeciesModifier - selfControlCliqueModifier
    let fortitudeBaseScore = document.getElementById("fortitudeBaseScore").innerHTML
    let fortitudeSpeciesModifier = document.getElementById("fortitudeSpeciesModifier").innerHTML
    let fortitudeCliqueModifier = document.getElementById("fortitudeCliqueModifier").innerHTML
    let fortitudeTotal = document.getElementById("fortitudeTotal")
    fortitudeSpeciesModifier = fortitudeSpeciesModifier * -1
    fortitudeCliqueModifier = fortitudeCliqueModifier * -1
    fortitudeTotal.innerHTML = fortitudeBaseScore - fortitudeSpeciesModifier - fortitudeCliqueModifier
    let reflexBaseScore = document.getElementById("reflexBaseScore").innerHTML
    let reflexSpeciesModifier = document.getElementById("reflexSpeciesModifier").innerHTML
    let reflexCliqueModifier = document.getElementById("reflexCliqueModifier").innerHTML
    let reflexTotal = document.getElementById("reflexTotal")
    reflexSpeciesModifier = reflexSpeciesModifier * -1
    reflexCliqueModifier = reflexCliqueModifier * -1
    reflexTotal.innerHTML = reflexBaseScore - reflexSpeciesModifier - reflexCliqueModifier
    let mindBaseScore = document.getElementById("mindBaseScore").innerHTML
    let mindSpeciesModifier = document.getElementById("mindSpeciesModifier").innerHTML
    let mindCliqueModifier = document.getElementById("mindCliqueModifier").innerHTML
    let mindTotal = document.getElementById("mindTotal")
    mindSpeciesModifier = mindSpeciesModifier * -1
    mindCliqueModifier = mindCliqueModifier * -1
    mindTotal.innerHTML = mindBaseScore - mindSpeciesModifier - mindCliqueModifier
    let willBaseScore = document.getElementById("willBaseScore").innerHTML
    let willSpeciesModifier = document.getElementById("willSpeciesModifier").innerHTML
    let willCliqueModifier = document.getElementById("willCliqueModifier").innerHTML
    let willTotal = document.getElementById("willTotal")
    willSpeciesModifier = willSpeciesModifier * -1
    willCliqueModifier = willCliqueModifier * -1
    willTotal.innerHTML = willBaseScore - willSpeciesModifier - willCliqueModifier

}

function calculateStatPointsLeft() {
    let strengthPointCost = document.getElementById("strengthPointCost").innerHTML
    let dexterityPointCost = document.getElementById("dexterityPointCost").innerHTML
    let constitutionPointCost = document.getElementById("constitutionPointCost").innerHTML
    let resiliencePointCost = document.getElementById("resiliencePointCost").innerHTML
    let persuasionhPointCost = document.getElementById("persuasionPointCost").innerHTML
    let manipulationPointCost = document.getElementById("manipulationPointCost").innerHTML
    let ingratiationPointCost = document.getElementById("ingratiationPointCost").innerHTML
    let charismaPointCost = document.getElementById("charismaPointCost").innerHTML
    let perceptionPointCost = document.getElementById("perceptionPointCost").innerHTML
    let insightPointCost = document.getElementById("insightPointCost").innerHTML
    let reasonPointCost = document.getElementById("reasonPointCost").innerHTML
    let intuitionPointCost = document.getElementById("intuitionPointCost").innerHTML
    let statPointArray = [strengthPointCost, dexterityPointCost, constitutionPointCost, resiliencePointCost, persuasionhPointCost, manipulationPointCost, ingratiationPointCost, charismaPointCost, perceptionPointCost, insightPointCost, reasonPointCost, intuitionPointCost]
    let runningStatPointCost = 54
    for (i=0; i<statPointArray.length; i++) {
        runningStatPointCost = runningStatPointCost - statPointArray[i]
    }
    runningStatPointCost = Number(runningStatPointCost)
    let statPointsLeft = document.getElementById("statPointsLeft")
    statPointsLeft.innerHTML = runningStatPointCost
    }

function changeStrengthRow() {
    let strengthScore = document.getElementById("strengthScore").value
    let strengthModifier = document.getElementById("strengthModifier")
    let strengthPointCost = document.getElementById("strengthPointCost")
    let strengthSpeciesModifier = document.getElementById("strengthSpeciesModifier").innerHTML
    strengthSpeciesModifier = strengthSpeciesModifier * -1
    let strengthCliqueModifier = document.getElementById("strengthCliqueModifier").innerHTML
    strengthCliqueModifier = strengthCliqueModifier * -1
    let strengthTotalScore = document.getElementById("strengthTotalScore")
    let strengthTotalModifier = document.getElementById("strengthTotalModifier")
    if (strengthScore == 6) {
        strengthModifier.innerHTML = -2
        strengthPointCost.innerHTML = -2
    } else if (strengthScore == 7) {
        strengthModifier.innerHTML = -2
        strengthPointCost.innerHTML = -1
    } else if (strengthScore == 8) {
        strengthModifier.innerHTML = -1
        strengthPointCost.innerHTML = 0
    } else if (strengthScore == 9) {
        strengthModifier.innerHTML = -1
        strengthPointCost.innerHTML = 1
    } else if (strengthScore == 10) {
        strengthModifier.innerHTML = 0
        strengthPointCost.innerHTML = 2
    } else if (strengthScore == 11) {
        strengthModifier.innerHTML = 0
        strengthPointCost.innerHTML = 3
    } else if (strengthScore == 12) {
        strengthModifier.innerHTML = 1
        strengthPointCost.innerHTML = 4
    } else if (strengthScore == 13) {
        strengthModifier.innerHTML = 1
        strengthPointCost.innerHTML = 5
    } else if (strengthScore == 14) {
        strengthModifier.innerHTML = 2
        strengthPointCost.innerHTML = 7
    } else if (strengthScore == 15) {
        strengthModifier.innerHTML = 2
        strengthPointCost.innerHTML = 9
    } else if (strengthScore == 16) {
        strengthModifier.innerHTML = 3
        strengthPointCost.innerHTML = 12
    }
    strengthTotalScore.innerHTML = strengthScore - strengthSpeciesModifier - strengthCliqueModifier
    if (strengthTotalScore.innerHTML == '4' || strengthTotalScore.innerHTML == '5') {
        strengthTotalModifier.innerHTML = -3
    } else if (strengthTotalScore.innerHTML == '6' || strengthTotalScore.innerHTML == '7') {
        strengthTotalModifier.innerHTML = -2
    } else if (strengthTotalScore.innerHTML == '8' || strengthTotalScore.innerHTML == '9') {
        strengthTotalModifier.innerHTML = -1
    } else if (strengthTotalScore.innerHTML == '10' || strengthTotalScore.innerHTML == '11') {
        strengthTotalModifier.innerHTML = 0
    } else if (strengthTotalScore.innerHTML == '12' || strengthTotalScore.innerHTML == '13') {
        strengthTotalModifier.innerHTML = 1
    } else if (strengthTotalScore.innerHTML == '14' || strengthTotalScore.innerHTML == '15') {
        strengthTotalModifier.innerHTML = 2
    } else if (strengthTotalScore.innerHTML == '16' || strengthTotalScore.innerHTML == '17') {
        strengthTotalModifier.innerHTML = 3
    } else if (strengthTotalScore.innerHTML == '18' || strengthTotalScore.innerHTML == '19') {
        strengthTotalModifier.innerHTML = 4
    } else if (strengthTotalScore.innerHTML == '20' || strengthTotalScore.innerHTML == '21') {
        strengthTotalModifier.innerHTML = 5
    }
    calculateStatPointsLeft()
}


function changeDexterityRow() {
    let dexterityScore = document.getElementById("dexterityScore").value
    let dexterityModifier = document.getElementById("dexterityModifier")
    let dexterityPointCost = document.getElementById("dexterityPointCost")
    let dexteritySpeciesModifier = document.getElementById("dexteritySpeciesModifier").innerHTML
    dexteritySpeciesModifier = dexteritySpeciesModifier * -1
    let dexterityCliqueModifier = document.getElementById("dexterityCliqueModifier").innerHTML
    dexterityCliqueModifier = dexterityCliqueModifier * -1
    let dexterityTotalScore = document.getElementById("dexterityTotalScore")
    let dexterityTotalModifier = document.getElementById("dexterityTotalModifier")
    if (dexterityScore == 6) {
        dexterityModifier.innerHTML = -2
        dexterityPointCost.innerHTML = -2
    } else if (dexterityScore == 7) {
        dexterityModifier.innerHTML = -2
        dexterityPointCost.innerHTML = -1
    } else if (dexterityScore == 8) {
        dexterityModifier.innerHTML = -1
        dexterityPointCost.innerHTML = 0
    } else if (dexterityScore == 9) {
        dexterityModifier.innerHTML = -1
        dexterityPointCost.innerHTML = 1
    } else if (dexterityScore == 10) {
        dexterityModifier.innerHTML = 0
        dexterityPointCost.innerHTML = 2
    } else if (dexterityScore == 11) {
        dexterityModifier.innerHTML = 0
        dexterityPointCost.innerHTML = 3
    } else if (dexterityScore == 12) {
        dexterityModifier.innerHTML = 1
        dexterityPointCost.innerHTML = 4
    } else if (dexterityScore == 13) {
        dexterityModifier.innerHTML = 1
        dexterityPointCost.innerHTML = 5
    } else if (dexterityScore == 14) {
        dexterityModifier.innerHTML = 2
        dexterityPointCost.innerHTML = 7
    } else if (dexterityScore == 15) {
        dexterityModifier.innerHTML = 2
        dexterityPointCost.innerHTML = 9
    } else if (dexterityScore == 16) {
        dexterityModifier.innerHTML = 3
        dexterityPointCost.innerHTML = 12
    }
    dexterityTotalScore.innerHTML = dexterityScore - dexteritySpeciesModifier - dexterityCliqueModifier
    if (dexterityTotalScore.innerHTML == '4' || dexterityTotalScore.innerHTML == '5') {
        dexterityTotalModifier.innerHTML = -3
    } else if (dexterityTotalScore.innerHTML == '6' || dexterityTotalScore.innerHTML == '7') {
        dexterityTotalModifier.innerHTML = -2
    } else if (dexterityTotalScore.innerHTML == '8' || dexterityTotalScore.innerHTML == '9') {
        dexterityTotalModifier.innerHTML = -1
    } else if (dexterityTotalScore.innerHTML == '10' || dexterityTotalScore.innerHTML == '11') {
        dexterityTotalModifier.innerHTML = 0
    } else if (dexterityTotalScore.innerHTML == '12' || dexterityTotalScore.innerHTML == '13') {
        dexterityTotalModifier.innerHTML = 1
    } else if (dexterityTotalScore.innerHTML == '14' || dexterityTotalScore.innerHTML == '15') {
        dexterityTotalModifier.innerHTML = 2
    } else if (dexterityTotalScore.innerHTML == '16' || dexterityTotalScore.innerHTML == '17') {
        dexterityTotalModifier.innerHTML = 3
    } else if (dexterityTotalScore.innerHTML == '18' || dexterityTotalScore.innerHTML == '19') {
        dexterityTotalModifier.innerHTML = 4
    } else if (dexterityTotalScore.innerHTML == '20' || dexterityTotalScore.innerHTML == '21') {
        dexterityTotalModifier.innerHTML = 5
    }
    let reflexBaseScore = document.getElementById("reflexBaseScore")
    let dexterityModifyReflexSave = document.getElementById("dexterityTotalModifier").innerHTML
    dexterityModifyReflexSave = dexterityModifyReflexSave * -1
    let perceptionModifyReflexSave = document.getElementById("perceptionTotalModifier").innerHTML
    let reflexBaseSave = dexterityModifyReflexSave - perceptionModifyReflexSave
    reflexBaseSave = reflexBaseSave * -1
    reflexBaseSave = Math.floor(reflexBaseSave / 2)
    reflexBaseScore.innerHTML = reflexBaseSave
    let dexterityModifyInitiative = document.getElementById("dexterityTotalModifier").innerHTML
    dexterityModifyInitiative = dexterityModifyInitiative * -1
    let intuitionModifyInitiative = document.getElementById("intuitionTotalModifier").innerHTML
    let initiativeTotal = dexterityModifyInitiative - intuitionModifyInitiative
    initiativeTotal = initiativeTotal * -1
    initiativeTotal = Math.floor(initiativeTotal / 2)
    initiative.innerHTML = initiativeTotal   
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
    setArmorClass()
}

function setArmorClass() {
    let dexterityModifyArmorClass = document.getElementById("dexterityTotalModifier").innerHTML
    dexterityModifyArmorClass = dexterityModifyArmorClass * -1
    let dodgeModifyArmorClass = document.getElementById("dodgeModifier").innerHTML
//    dodgeModifyArmorClass = dodgeModifyArmorClass * -1
    if (vampire.checked == false && werewolf.checked == false && witch.checked == false && fairy.checked == false) {
        return
    } 
    else {
        let armorClassBase = 10
        let armorClassModifier = dexterityModifyArmorClass - dodgeModifyArmorClass
        if (vampire.checked == true) {
            armorClassModifier = armorClassModifier - 3
        }
        armorClass.innerHTML = armorClassBase - armorClassModifier
    }
}

function changeConstitutionRow() {
    let constitutionScore = document.getElementById("constitutionScore").value
    let constitutionModifier = document.getElementById("constitutionModifier")
    let constitutionPointCost = document.getElementById("constitutionPointCost")
    let constitutionSpeciesModifier = document.getElementById("constitutionSpeciesModifier").innerHTML
    constitutionSpeciesModifier = constitutionSpeciesModifier * -1
    let constitutionCliqueModifier = document.getElementById("constitutionCliqueModifier").innerHTML
    constitutionCliqueModifier = constitutionCliqueModifier * -1
    let constitutionTotalScore = document.getElementById("constitutionTotalScore")
    let constitutionTotalModifier = document.getElementById("constitutionTotalModifier")
    if (constitutionScore == 6) {
        constitutionModifier.innerHTML = -2
        constitutionPointCost.innerHTML = -2
    } else if (constitutionScore == 7) {
        constitutionModifier.innerHTML = -2
        constitutionPointCost.innerHTML = -1
    } else if (constitutionScore == 8) {
        constitutionModifier.innerHTML = -1
        constitutionPointCost.innerHTML = 0
    } else if (constitutionScore == 9) {
        constitutionModifier.innerHTML = -1
        constitutionPointCost.innerHTML = 1
    } else if (constitutionScore == 10) {
        constitutionModifier.innerHTML = 0
        constitutionPointCost.innerHTML = 2
    } else if (constitutionScore == 11) {
        constitutionModifier.innerHTML = 0
        constitutionPointCost.innerHTML = 3
    } else if (constitutionScore == 12) {
        constitutionModifier.innerHTML = 1
        constitutionPointCost.innerHTML = 4
    } else if (constitutionScore == 13) {
        constitutionModifier.innerHTML = 1
        constitutionPointCost.innerHTML = 5
    } else if (constitutionScore == 14) {
        constitutionModifier.innerHTML = 2
        constitutionPointCost.innerHTML = 7
    } else if (constitutionScore == 15) {
        constitutionModifier.innerHTML = 2
        constitutionPointCost.innerHTML = 9
    } else if (constitutionScore == 16) {
        constitutionModifier.innerHTML = 3
        constitutionPointCost.innerHTML = 12
    }
    constitutionTotalScore.innerHTML = constitutionScore - constitutionSpeciesModifier - constitutionCliqueModifier
    if (constitutionTotalScore.innerHTML == '4' || constitutionTotalScore.innerHTML == '5') {
        constitutionTotalModifier.innerHTML = -3
    } else if (constitutionTotalScore.innerHTML == '6' || constitutionTotalScore.innerHTML == '7') {
        constitutionTotalModifier.innerHTML = -2
    } else if (constitutionTotalScore.innerHTML == '8' || constitutionTotalScore.innerHTML == '9') {
        constitutionTotalModifier.innerHTML = -1
    } else if (constitutionTotalScore.innerHTML == '10' || constitutionTotalScore.innerHTML == '11') {
        constitutionTotalModifier.innerHTML = 0
    } else if (constitutionTotalScore.innerHTML == '12' || constitutionTotalScore.innerHTML == '13') {
        constitutionTotalModifier.innerHTML = 1
    } else if (constitutionTotalScore.innerHTML == '14' || constitutionTotalScore.innerHTML == '15') {
        constitutionTotalModifier.innerHTML = 2
    } else if (constitutionTotalScore.innerHTML == '16' || constitutionTotalScore.innerHTML == '17') {
        constitutionTotalModifier.innerHTML = 3
    } else if (constitutionTotalScore.innerHTML == '18' || constitutionTotalScore.innerHTML == '19') {
        constitutionTotalModifier.innerHTML = 4
    } else if (constitutionTotalScore.innerHTML == '20' || constitutionTotalScore.innerHTML == '21') {
        constitutionTotalModifier.innerHTML = 5
    }
    let fortitudeBaseScore = document.getElementById("fortitudeBaseScore")
    let constitutionModifyFortitudeSave = document.getElementById("constitutionTotalModifier").innerHTML
    constitutionModifyFortitudeSave = constitutionModifyFortitudeSave * -1
    let resilienceModifyFortitudeSave = document.getElementById("resilienceTotalModifier").innerHTML
    let fortitudeBaseSave = constitutionModifyFortitudeSave - resilienceModifyFortitudeSave
    fortitudeBaseSave = fortitudeBaseSave * -1
    fortitudeBaseSave = Math.floor(fortitudeBaseSave / 2)
    fortitudeBaseScore.innerHTML = fortitudeBaseSave
    calculateHitPoints()
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

function changeResilienceRow() {
    let resilienceScore = document.getElementById("resilienceScore").value
    let resilienceModifier = document.getElementById("resilienceModifier")
    let resiliencePointCost = document.getElementById("resiliencePointCost")
    let resilienceSpeciesModifier = document.getElementById("resilienceSpeciesModifier").innerHTML
    resilienceSpeciesModifier = resilienceSpeciesModifier * -1
    let resilienceCliqueModifier = document.getElementById("resilienceCliqueModifier").innerHTML
    resilienceCliqueModifier = resilienceCliqueModifier * -1
    let resilienceTotalScore = document.getElementById("resilienceTotalScore")
    let resilienceTotalModifier = document.getElementById("resilienceTotalModifier")
    if (resilienceScore == 6) {
        resilienceModifier.innerHTML = -2
        resiliencePointCost.innerHTML = -2
    } else if (resilienceScore == 7) {
        resilienceModifier.innerHTML = -2
        resiliencePointCost.innerHTML = -1
    } else if (resilienceScore == 8) {
        resilienceModifier.innerHTML = -1
        resiliencePointCost.innerHTML = 0
    } else if (resilienceScore == 9) {
        resilienceModifier.innerHTML = -1
        resiliencePointCost.innerHTML = 1
    } else if (resilienceScore == 10) {
        resilienceModifier.innerHTML = 0
        resiliencePointCost.innerHTML = 2
    } else if (resilienceScore == 11) {
        resilienceModifier.innerHTML = 0
        resiliencePointCost.innerHTML = 3
    } else if (resilienceScore == 12) {
        resilienceModifier.innerHTML = 1
        resiliencePointCost.innerHTML = 4
    } else if (resilienceScore == 13) {
        resilienceModifier.innerHTML = 1
        resiliencePointCost.innerHTML = 5
    } else if (resilienceScore == 14) {
        resilienceModifier.innerHTML = 2
        resiliencePointCost.innerHTML = 7
    } else if (resilienceScore == 15) {
        resilienceModifier.innerHTML = 2
        resiliencePointCost.innerHTML = 9
    } else if (resilienceScore == 16) {
        resilienceModifier.innerHTML = 3
        resiliencePointCost.innerHTML = 12
    }
    resilienceTotalScore.innerHTML = resilienceScore - resilienceSpeciesModifier - resilienceCliqueModifier
    if (resilienceTotalScore.innerHTML == '4' || resilienceTotalScore.innerHTML == '5') {
        resilienceTotalModifier.innerHTML = -3
    } else if (resilienceTotalScore.innerHTML == '6' || resilienceTotalScore.innerHTML == '7') {
        resilienceTotalModifier.innerHTML = -2
    } else if (resilienceTotalScore.innerHTML == '8' || resilienceTotalScore.innerHTML == '9') {
        resilienceTotalModifier.innerHTML = -1
    } else if (resilienceTotalScore.innerHTML == '10' || resilienceTotalScore.innerHTML == '11') {
        resilienceTotalModifier.innerHTML = 0
    } else if (resilienceTotalScore.innerHTML == '12' || resilienceTotalScore.innerHTML == '13') {
        resilienceTotalModifier.innerHTML = 1
    } else if (resilienceTotalScore.innerHTML == '14' || resilienceTotalScore.innerHTML == '15') {
        resilienceTotalModifier.innerHTML = 2
    } else if (resilienceTotalScore.innerHTML == '16' || resilienceTotalScore.innerHTML == '17') {
        resilienceTotalModifier.innerHTML = 3
    } else if (resilienceTotalScore.innerHTML == '18' || resilienceTotalScore.innerHTML == '19') {
        resilienceTotalModifier.innerHTML = 4
    } else if (resilienceTotalScore.innerHTML == '20' || resilienceTotalScore.innerHTML == '21') {
        resilienceTotalModifier.innerHTML = 5
    }
    let fortitudeBaseScore = document.getElementById("fortitudeBaseScore")
    let constitutionModifyFortitudeSave = document.getElementById("constitutionTotalModifier").innerHTML
    constitutionModifyFortitudeSave = constitutionModifyFortitudeSave * -1
    let resilienceModifyFortitudeSave = document.getElementById("resilienceTotalModifier").innerHTML
    let fortitudeBaseSave = constitutionModifyFortitudeSave - resilienceModifyFortitudeSave
    fortitudeBaseSave = fortitudeBaseSave * -1
    fortitudeBaseSave = Math.floor(fortitudeBaseSave / 2)
    fortitudeBaseScore.innerHTML = fortitudeBaseSave
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

function changePersuasionRow() {
    let persuasionScore = document.getElementById("persuasionScore").value
    let persuasionModifier = document.getElementById("persuasionModifier")
    let persuasionPointCost = document.getElementById("persuasionPointCost")
    let persuasionSpeciesModifier = document.getElementById("persuasionSpeciesModifier").innerHTML
    persuasionSpeciesModifier = persuasionSpeciesModifier * -1
    let persuasionCliqueModifier = document.getElementById("persuasionCliqueModifier").innerHTML
    persuasionCliqueModifier = persuasionCliqueModifier * -1
    let persuasionTotalScore = document.getElementById("persuasionTotalScore")
    let persuasionTotalModifier = document.getElementById("persuasionTotalModifier")
    if (persuasionScore == 6) {
        persuasionModifier.innerHTML = -2
        persuasionPointCost.innerHTML = -2
    } else if (persuasionScore == 7) {
        persuasionModifier.innerHTML = -2
        persuasionPointCost.innerHTML = -1
    } else if (persuasionScore == 8) {
        persuasionModifier.innerHTML = -1
        persuasionPointCost.innerHTML = 0
    } else if (persuasionScore == 9) {
        persuasionModifier.innerHTML = -1
        persuasionPointCost.innerHTML = 1
    } else if (persuasionScore == 10) {
        persuasionModifier.innerHTML = 0
        persuasionPointCost.innerHTML = 2
    } else if (persuasionScore == 11) {
        persuasionModifier.innerHTML = 0
        persuasionPointCost.innerHTML = 3
    } else if (persuasionScore == 12) {
        persuasionModifier.innerHTML = 1
        persuasionPointCost.innerHTML = 4
    } else if (persuasionScore == 13) {
        persuasionModifier.innerHTML = 1
        persuasionPointCost.innerHTML = 5
    } else if (persuasionScore == 14) {
        persuasionModifier.innerHTML = 2
        persuasionPointCost.innerHTML = 7
    } else if (persuasionScore == 15) {
        persuasionModifier.innerHTML = 2
        persuasionPointCost.innerHTML = 9
    } else if (persuasionScore == 16) {
        persuasionModifier.innerHTML = 3
        persuasionPointCost.innerHTML = 12
    }
    persuasionTotalScore.innerHTML = persuasionScore - persuasionSpeciesModifier - persuasionCliqueModifier
    if (persuasionTotalScore.innerHTML == '4' || persuasionTotalScore.innerHTML =='5') {
        persuasionTotalModifier.innerHTML = -3
    } else if (persuasionTotalScore.innerHTML == '6' || persuasionTotalScore.innerHTML == '7') {
        persuasionTotalModifier.innerHTML = -2
    } else if (persuasionTotalScore.innerHTML == '8' || persuasionTotalScore.innerHTML == '9') {
        persuasionTotalModifier.innerHTML = -1
    } else if (persuasionTotalScore.innerHTML == '10' || persuasionTotalScore.innerHTML == '11') {
        persuasionTotalModifier.innerHTML = 0
    } else if (persuasionTotalScore.innerHTML == '12' || persuasionTotalScore.innerHTML == '13') {
        persuasionTotalModifier.innerHTML = 1
    } else if (persuasionTotalScore.innerHTML == '14' || persuasionTotalScore.innerHTML == '15') {
        persuasionTotalModifier.innerHTML = 2
    } else if (persuasionTotalScore.innerHTML == '16' || persuasionTotalScore.innerHTML == '17') {
        persuasionTotalModifier.innerHTML = 3
    } else if (persuasionTotalScore.innerHTML == '18' || persuasionTotalScore.innerHTML == '19') {
        persuasionTotalModifier.innerHTML = 4
    } else if (persuasionTotalScore.innerHTML == '20' || persuasionTotalScore.innerHTML == '21') {
        persuasionTotalModifier.innerHTML = 5
    }
    calculateStatPointsLeft()
}

function changeManipulationRow() {
    let manipulationScore = document.getElementById("manipulationScore").value
    let manipulationModifier = document.getElementById("manipulationModifier")
    let manipulationPointCost = document.getElementById("manipulationPointCost")
    let manipulationSpeciesModifier = document.getElementById("manipulationSpeciesModifier").innerHTML
    manipulationSpeciesModifier = manipulationSpeciesModifier * -1
    let manipulationCliqueModifier = document.getElementById("manipulationCliqueModifier").innerHTML
    manipulationCliqueModifier = manipulationCliqueModifier * -1
    let manipulationTotalScore = document.getElementById("manipulationTotalScore")
    let manipulationTotalModifier = document.getElementById("manipulationTotalModifier")
    if (manipulationScore == 6) {
        manipulationModifier.innerHTML = -2
        manipulationPointCost.innerHTML = -2
    } else if (manipulationScore == 7) {
        manipulationModifier.innerHTML = -2
        manipulationPointCost.innerHTML = -1
    } else if (manipulationScore == 8) {
        manipulationModifier.innerHTML = -1
        manipulationPointCost.innerHTML = 0
    } else if (manipulationScore == 9) {
        manipulationModifier.innerHTML = -1
        manipulationPointCost.innerHTML = 1
    } else if (manipulationScore == 10) {
        manipulationModifier.innerHTML = 0
        manipulationPointCost.innerHTML = 2
    } else if (manipulationScore == 11) {
        manipulationModifier.innerHTML = 0
        manipulationPointCost.innerHTML = 3
    } else if (manipulationScore == 12) {
        manipulationModifier.innerHTML = 1
        manipulationPointCost.innerHTML = 4
    } else if (manipulationScore == 13) {
        manipulationModifier.innerHTML = 1
        manipulationPointCost.innerHTML = 5
    } else if (manipulationScore == 14) {
        manipulationModifier.innerHTML = 2
        manipulationPointCost.innerHTML = 7
    } else if (manipulationScore == 15) {
        manipulationModifier.innerHTML = 2
        manipulationPointCost.innerHTML = 9
    } else if (manipulationScore == 16) {
        manipulationModifier.innerHTML = 3
        manipulationPointCost.innerHTML = 12
    }
    manipulationTotalScore.innerHTML = manipulationScore - manipulationSpeciesModifier - manipulationCliqueModifier
    if (manipulationTotalScore.innerHTML == '4' || manipulationTotalScore.innerHTML == '5') {
        manipulationTotalModifier.innerHTML = -3
    } else if (manipulationTotalScore.innerHTML == '6' || manipulationTotalScore.innerHTML == '7') {
        manipulationTotalModifier.innerHTML = -2
    } else if (manipulationTotalScore.innerHTML == '8' || manipulationTotalScore.innerHTML == '9') {
        manipulationTotalModifier.innerHTML = -1
    } else if (manipulationTotalScore.innerHTML == '10' || manipulationTotalScore.innerHTML == '11') {
        manipulationTotalModifier.innerHTML = 0
    } else if (manipulationTotalScore.innerHTML == '12' || manipulationTotalScore.innerHTML == '13') {
        manipulationTotalModifier.innerHTML = 1
    } else if (manipulationTotalScore.innerHTML == '14' || manipulationTotalScore.innerHTML == '15') {
        manipulationTotalModifier.innerHTML = 2
    } else if (manipulationTotalScore.innerHTML == '16' || manipulationTotalScore.innerHTML == '17') {
        manipulationTotalModifier.innerHTML = 3
    } else if (manipulationTotalScore.innerHTML == '18' || manipulationTotalScore.innerHTML == '19') {
        manipulationTotalModifier.innerHTML = 4
    } else if (manipulationTotalScore.innerHTML == '20' || manipulationTotalScore.innerHTML == '21') {
        manipulationTotalModifier.innerHTML = 5
    }
    calculateStatPointsLeft()
}

function changeIngratiationRow() {
    let ingratiationScore = document.getElementById("ingratiationScore").value
    let ingratiationModifier = document.getElementById("ingratiationModifier")
    let ingratiationPointCost = document.getElementById("ingratiationPointCost")
    let ingratiationSpeciesModifier = document.getElementById("ingratiationSpeciesModifier").innerHTML
    ingratiationSpeciesModifier = ingratiationSpeciesModifier * -1
    let ingratiationCliqueModifier = document.getElementById("ingratiationCliqueModifier").innerHTML
    ingratiationCliqueModifier = ingratiationCliqueModifier * -1
    let ingratiationTotalScore = document.getElementById("ingratiationTotalScore")
    let ingratiationTotalModifier = document.getElementById("ingratiationTotalModifier")
    if (ingratiationScore == 6) {
        ingratiationModifier.innerHTML = -2
        ingratiationPointCost.innerHTML = -2
    } else if (ingratiationScore == 7) {
        ingratiationModifier.innerHTML = -2
        ingratiationPointCost.innerHTML = -1
    } else if (ingratiationScore == 8) {
        ingratiationModifier.innerHTML = -1
        ingratiationPointCost.innerHTML = 0
    } else if (ingratiationScore == 9) {
        ingratiationModifier.innerHTML = -1
        ingratiationPointCost.innerHTML = 1
    } else if (ingratiationScore == 10) {
        ingratiationModifier.innerHTML = 0
        ingratiationPointCost.innerHTML = 2
    } else if (ingratiationScore == 11) {
        ingratiationModifier.innerHTML = 0
        ingratiationPointCost.innerHTML = 3
    } else if (ingratiationScore == 12) {
        ingratiationModifier.innerHTML = 1
        ingratiationPointCost.innerHTML = 4
    } else if (ingratiationScore == 13) {
        ingratiationModifier.innerHTML = 1
        ingratiationPointCost.innerHTML = 5
    } else if (ingratiationScore == 14) {
        ingratiationModifier.innerHTML = 2
        ingratiationPointCost.innerHTML = 7
    } else if (ingratiationScore == 15) {
        ingratiationModifier.innerHTML = 2
        ingratiationPointCost.innerHTML = 9
    } else if (ingratiationScore == 16) {
        ingratiationModifier.innerHTML = 3
        ingratiationPointCost.innerHTML = 12
    }
    ingratiationTotalScore.innerHTML = ingratiationScore - ingratiationSpeciesModifier - ingratiationCliqueModifier
    if (ingratiationTotalScore.innerHTML == '4' || ingratiationTotalScore.innerHTML == '5') {
        ingratiationTotalModifier.innerHTML = -3
    } else if (ingratiationTotalScore.innerHTML == '6' || ingratiationTotalScore.innerHTML == '7') {
        ingratiationTotalModifier.innerHTML = -2
    } else if (ingratiationTotalScore.innerHTML == '8' || ingratiationTotalScore.innerHTML == '9') {
        ingratiationTotalModifier.innerHTML = -1
    } else if (ingratiationTotalScore.innerHTML == '10' || ingratiationTotalScore.innerHTML == '11') {
        ingratiationTotalModifier.innerHTML = 0
    } else if (ingratiationTotalScore.innerHTML == '12' || ingratiationTotalScore.innerHTML == '13') {
        ingratiationTotalModifier.innerHTML = 1
    } else if (ingratiationTotalScore.innerHTML == '14' || ingratiationTotalScore.innerHTML == '15') {
        ingratiationTotalModifier.innerHTML = 2
    } else if (ingratiationTotalScore.innerHTML == '16' || ingratiationTotalScore.innerHTML == '17') {
        ingratiationTotalModifier.innerHTML = 3
    } else if (ingratiationTotalScore.innerHTML == '18' || ingratiationTotalScore.innerHTML == '19') {
        ingratiationTotalModifier.innerHTML = 4
    } else if (ingratiationTotalScore.innerHTML == '20' || ingratiationTotalScore.innerHTML == '21') {
        ingratiationTotalModifier.innerHTML = 5
    }
    calculateStatPointsLeft()
}

function changeCharismaRow() {
    let charismaScore = document.getElementById("charismaScore").value
    let charismaModifier = document.getElementById("charismaModifier")
    let charismaPointCost = document.getElementById("charismaPointCost")
    let charismaSpeciesModifier = document.getElementById("charismaSpeciesModifier").innerHTML
    charismaSpeciesModifier = charismaSpeciesModifier * -1
    let charismaCliqueModifier = document.getElementById("charismaCliqueModifier").innerHTML
    charismaCliqueModifier = charismaCliqueModifier * -1
    let charismaTotalScore = document.getElementById("charismaTotalScore")
    let charismaTotalModifier = document.getElementById("charismaTotalModifier")
    if (charismaScore == 6) {
        charismaModifier.innerHTML = -2
        charismaPointCost.innerHTML = -2
    } else if (charismaScore == 7) {
        charismaModifier.innerHTML = -2
        charismaPointCost.innerHTML = -1
    } else if (charismaScore == 8) {
        charismaModifier.innerHTML = -1
        charismaPointCost.innerHTML = 0
    } else if (charismaScore == 9) {
        charismaModifier.innerHTML = -1
        charismaPointCost.innerHTML = 1
    } else if (charismaScore == 10) {
        charismaModifier.innerHTML = 0
        charismaPointCost.innerHTML = 2
    } else if (charismaScore == 11) {
        charismaModifier.innerHTML = 0
        charismaPointCost.innerHTML = 3
    } else if (charismaScore == 12) {
        charismaModifier.innerHTML = 1
        charismaPointCost.innerHTML = 4
    } else if (charismaScore == 13) {
        charismaModifier.innerHTML = 1
        charismaPointCost.innerHTML = 5
    } else if (charismaScore == 14) {
        charismaModifier.innerHTML = 2
        charismaPointCost.innerHTML = 7
    } else if (charismaScore == 15) {
        charismaModifier.innerHTML = 2
        charismaPointCost.innerHTML = 9
    } else if (charismaScore == 16) {
        charismaModifier.innerHTML = 3
        charismaPointCost.innerHTML = 12
    }
    charismaTotalScore.innerHTML = charismaScore - charismaSpeciesModifier - charismaCliqueModifier
    if (charismaTotalScore.innerHTML == '4' || charismaTotalScore.innerHTML == '5') {
        charismaTotalModifier.innerHTML = -3
    } else if (charismaTotalScore.innerHTML == '6' || charismaTotalScore.innerHTML == '7') {
        charismaTotalModifier.innerHTML = -2
    } else if (charismaTotalScore.innerHTML == '8' || charismaTotalScore.innerHTML == '9') {
        charismaTotalModifier.innerHTML = -1
    } else if (charismaTotalScore.innerHTML == '10' || charismaTotalScore.innerHTML == '11') {
        charismaTotalModifier.innerHTML = 0
    } else if (charismaTotalScore.innerHTML == '12' || charismaTotalScore.innerHTML == '13') {
        charismaTotalModifier.innerHTML = 1
    } else if (charismaTotalScore.innerHTML == '14' || charismaTotalScore.innerHTML == '15') {
        charismaTotalModifier.innerHTML = 2
    } else if (charismaTotalScore.innerHTML == '16' || charismaTotalScore.innerHTML == '17') {
        charismaTotalModifier.innerHTML = 3
    } else if (charismaTotalScore.innerHTML == '18' || charismaTotalScore.innerHTML == '19') {
        charismaTotalModifier.innerHTML = 4
    } else if (charismaTotalScore.innerHTML == '20' || charismaTotalScore.innerHTML == '21') {
        charismaTotalModifier.innerHTML = 5
    }
    let willBaseScore = document.getElementById("willBaseScore")
    let charismaModifyWillSave = document.getElementById("charismaTotalModifier").innerHTML
    charismaModifyWillSave = charismaModifyWillSave * -1
    let insightModifyWillSave = document.getElementById("insightTotalModifier").innerHTML
    let willBaseSave = charismaModifyWillSave - insightModifyWillSave
    willBaseSave = willBaseSave * -1
    willBaseSave = Math.floor(willBaseSave / 2)
    willBaseScore.innerHTML = willBaseSave
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

function changePerceptionRow() {
    let perceptionScore = document.getElementById("perceptionScore").value
    let perceptionModifier = document.getElementById("perceptionModifier")
    let perceptionPointCost = document.getElementById("perceptionPointCost")
    let perceptionSpeciesModifier = document.getElementById("perceptionSpeciesModifier").innerHTML
    perceptionSpeciesModifier = perceptionSpeciesModifier * -1
    let perceptionCliqueModifier = document.getElementById("perceptionCliqueModifier").innerHTML
    perceptionCliqueModifier = perceptionCliqueModifier * -1
    let perceptionTotalScore = document.getElementById("perceptionTotalScore")
    let perceptionTotalModifier = document.getElementById("perceptionTotalModifier")
    if (perceptionScore == 6) {
        perceptionModifier.innerHTML = -2
        perceptionPointCost.innerHTML = -2
    } else if (perceptionScore == 7) {
        perceptionModifier.innerHTML = -2
        perceptionPointCost.innerHTML = -1
    } else if (perceptionScore == 8) {
        perceptionModifier.innerHTML = -1
        perceptionPointCost.innerHTML = 0
    } else if (perceptionScore == 9) {
        perceptionModifier.innerHTML = -1
        perceptionPointCost.innerHTML = 1
    } else if (perceptionScore == 10) {
        perceptionModifier.innerHTML = 0
        perceptionPointCost.innerHTML = 2
    } else if (perceptionScore == 11) {
        perceptionModifier.innerHTML = 0
        perceptionPointCost.innerHTML = 3
    } else if (perceptionScore == 12) {
        perceptionModifier.innerHTML = 1
        perceptionPointCost.innerHTML = 4
    } else if (perceptionScore == 13) {
        perceptionModifier.innerHTML = 1
        perceptionPointCost.innerHTML = 5
    } else if (perceptionScore == 14) {
        perceptionModifier.innerHTML = 2
        perceptionPointCost.innerHTML = 7
    } else if (perceptionScore == 15) {
        perceptionModifier.innerHTML = 2
        perceptionPointCost.innerHTML = 9
    } else if (perceptionScore == 16) {
        perceptionModifier.innerHTML = 3
        perceptionPointCost.innerHTML = 12
    }
    perceptionTotalScore.innerHTML = perceptionScore - perceptionSpeciesModifier - perceptionCliqueModifier
    if (perceptionTotalScore.innerHTML == '4' || perceptionTotalScore.innerHTML == '5') {
        perceptionTotalModifier.innerHTML = -3
    } else if (perceptionTotalScore.innerHTML == '6' || perceptionTotalScore.innerHTML == '7') {
        perceptionTotalModifier.innerHTML = -2
    } else if (perceptionTotalScore.innerHTML == '8' || perceptionTotalScore.innerHTML == '9') {
        perceptionTotalModifier.innerHTML = -1
    } else if (perceptionTotalScore.innerHTML == '10' || perceptionTotalScore.innerHTML == '11') {
        perceptionTotalModifier.innerHTML = 0
    } else if (perceptionTotalScore.innerHTML == '12' || perceptionTotalScore.innerHTML == '13') {
        perceptionTotalModifier.innerHTML = 1
    } else if (perceptionTotalScore.innerHTML == '14' || perceptionTotalScore.innerHTML == '15') {
        perceptionTotalModifier.innerHTML = 2
    } else if (perceptionTotalScore.innerHTML == '16' || perceptionTotalScore.innerHTML == '17') {
        perceptionTotalModifier.innerHTML = 3
    } else if (perceptionTotalScore.innerHTML == '18' || perceptionTotalScore.innerHTML == '19') {
        perceptionTotalModifier.innerHTML = 4
    } else if (perceptionTotalScore.innerHTML == '20' || perceptionTotalScore.innerHTML == '21') {
        perceptionTotalModifier.innerHTML = 5
    }
    let reflexBaseScore = document.getElementById("reflexBaseScore")
    let dexterityModifyReflexSave = document.getElementById("dexterityTotalModifier").innerHTML
    dexterityModifyReflexSave = dexterityModifyReflexSave * -1
    let perceptionModifyReflexSave = document.getElementById("perceptionTotalModifier").innerHTML
    let reflexBaseSave = dexterityModifyReflexSave - perceptionModifyReflexSave
    reflexBaseSave = reflexBaseSave * -1
    reflexBaseSave = Math.floor(reflexBaseSave / 2)
    reflexBaseScore.innerHTML = reflexBaseSave
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

function changeInsightRow() {
    let insightScore = document.getElementById("insightScore").value
    let insightModifier = document.getElementById("insightModifier")
    let insightPointCost = document.getElementById("insightPointCost")
    let insightSpeciesModifier = document.getElementById("insightSpeciesModifier").innerHTML
    insightSpeciesModifier = insightSpeciesModifier * -1
    let insightCliqueModifier = document.getElementById("insightCliqueModifier").innerHTML
    insightCliqueModifier = insightCliqueModifier * -1
    let insightTotalScore = document.getElementById("insightTotalScore")
    let insightTotalModifier = document.getElementById("insightTotalModifier")
    if (insightScore == 6) {
        insightModifier.innerHTML = -2
        insightPointCost.innerHTML = -2
    } else if (insightScore == 7) {
        insightModifier.innerHTML = -2
        insightPointCost.innerHTML = -1
    } else if (insightScore == 8) {
        insightModifier.innerHTML = -1
        insightPointCost.innerHTML = 0
    } else if (insightScore == 9) {
        insightModifier.innerHTML = -1
        insightPointCost.innerHTML = 1
    } else if (insightScore == 10) {
        insightModifier.innerHTML = 0
        insightPointCost.innerHTML = 2
    } else if (insightScore == 11) {
        insightModifier.innerHTML = 0
        insightPointCost.innerHTML = 3
    } else if (insightScore == 12) {
        insightModifier.innerHTML = 1
        insightPointCost.innerHTML = 4
    } else if (insightScore == 13) {
        insightModifier.innerHTML = 1
        insightPointCost.innerHTML = 5
    } else if (insightScore == 14) {
        insightModifier.innerHTML = 2
        insightPointCost.innerHTML = 7
    } else if (insightScore == 15) {
        insightModifier.innerHTML = 2
        insightPointCost.innerHTML = 9
    } else if (insightScore == 16) {
        insightModifier.innerHTML = 3
        insightPointCost.innerHTML = 12
    }
    insightTotalScore.innerHTML = insightScore - insightSpeciesModifier - insightCliqueModifier
    if (insightTotalScore.innerHTML == '4' || insightTotalScore.innerHTML == '5') {
        insightTotalModifier.innerHTML = -3
    } else if (insightTotalScore.innerHTML == '6' || insightTotalScore.innerHTML == '7') {
        insightTotalModifier.innerHTML = -2
    } else if (insightTotalScore.innerHTML == '8' || insightTotalScore.innerHTML == '9') {
        insightTotalModifier.innerHTML = -1
    } else if (insightTotalScore.innerHTML == '10' || insightTotalScore.innerHTML == '11') {
        insightTotalModifier.innerHTML = 0
    } else if (insightTotalScore.innerHTML == '12' || insightTotalScore.innerHTML == '13') {
        insightTotalModifier.innerHTML = 1
    } else if (insightTotalScore.innerHTML == '14' || insightTotalScore.innerHTML == '15') {
        insightTotalModifier.innerHTML = 2
    } else if (insightTotalScore.innerHTML == '16' || insightTotalScore.innerHTML == '17') {
        insightTotalModifier.innerHTML = 3
    } else if (insightTotalScore.innerHTML == '18' || insightTotalScore.innerHTML == '19') {
        insightTotalModifier.innerHTML = 4
    } else if (insightTotalScore.innerHTML == '20' || insightTotalScore.innerHTML == '21') {
        insightTotalModifier.innerHTML = 5
    }
    let willBaseScore = document.getElementById("willBaseScore")
    let charismaModifyWillSave = document.getElementById("charismaTotalModifier").innerHTML
    charismaModifyWillSave = charismaModifyWillSave * -1
    let insightModifyWillSave = document.getElementById("insightTotalModifier").innerHTML
    let willBaseSave = charismaModifyWillSave - insightModifyWillSave
    willBaseSave = willBaseSave * -1
    willBaseSave = Math.floor(willBaseSave / 2)
    willBaseScore.innerHTML = willBaseSave
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

function changeReasonRow() {
    let reasonScore = document.getElementById("reasonScore").value
    let reasonModifier = document.getElementById("reasonModifier")
    let reasonPointCost = document.getElementById("reasonPointCost")
    let reasonSpeciesModifier = document.getElementById("reasonSpeciesModifier").innerHTML
    reasonSpeciesModifier = reasonSpeciesModifier * -1
    let reasonCliqueModifier = document.getElementById("reasonCliqueModifier").innerHTML
    reasonCliqueModifier = reasonCliqueModifier * -1
    let reasonTotalScore = document.getElementById("reasonTotalScore")
    let reasonTotalModifier = document.getElementById("reasonTotalModifier")
    if (reasonScore == 6) {
        reasonModifier.innerHTML = -2
        reasonPointCost.innerHTML = -2
    } else if (reasonScore == 7) {
        reasonModifier.innerHTML = -2
        reasonPointCost.innerHTML = -1
    } else if (reasonScore == 8) {
        reasonModifier.innerHTML = -1
        reasonPointCost.innerHTML = 0
    } else if (reasonScore == 9) {
        reasonModifier.innerHTML = -1
        reasonPointCost.innerHTML = 1
    } else if (reasonScore == 10) {
        reasonModifier.innerHTML = 0
        reasonPointCost.innerHTML = 2
    } else if (reasonScore == 11) {
        reasonModifier.innerHTML = 0
        reasonPointCost.innerHTML = 3
    } else if (reasonScore == 12) {
        reasonModifier.innerHTML = 1
        reasonPointCost.innerHTML = 4
    } else if (reasonScore == 13) {
        reasonModifier.innerHTML = 1
        reasonPointCost.innerHTML = 5
    } else if (reasonScore == 14) {
        reasonModifier.innerHTML = 2
        reasonPointCost.innerHTML = 7
    } else if (reasonScore == 15) {
        reasonModifier.innerHTML = 2
        reasonPointCost.innerHTML = 9
    } else if (reasonScore == 16) {
        reasonModifier.innerHTML = 3
        reasonPointCost.innerHTML = 12
    }
    reasonTotalScore.innerHTML = reasonScore - reasonSpeciesModifier - reasonCliqueModifier
    if (reasonTotalScore.innerHTML == '4' || reasonTotalScore.innerHTML == '5') {
        reasonTotalModifier.innerHTML = -3
    } else if (reasonTotalScore.innerHTML == '6' || reasonTotalScore.innerHTML == '7') {
        reasonTotalModifier.innerHTML = -2
    } else if (reasonTotalScore.innerHTML == '8' || reasonTotalScore.innerHTML == '9') {
        reasonTotalModifier.innerHTML = -1
    } else if (reasonTotalScore.innerHTML == '10' || reasonTotalScore.innerHTML == '11') {
        reasonTotalModifier.innerHTML = 0
    } else if (reasonTotalScore.innerHTML == '12' || reasonTotalScore.innerHTML == '13') {
        reasonTotalModifier.innerHTML = 1
    } else if (reasonTotalScore.innerHTML == '14' || reasonTotalScore.innerHTML == '15') {
        reasonTotalModifier.innerHTML = 2
    } else if (reasonTotalScore.innerHTML == '16' || reasonTotalScore.innerHTML == '17') {
        reasonTotalModifier.innerHTML = 3
    } else if (reasonTotalScore.innerHTML == '18' || reasonTotalScore.innerHTML == '19') {
        reasonTotalModifier.innerHTML = 4
    } else if (reasonTotalScore.innerHTML == '20' || reasonTotalScore.innerHTML == '21') {
        reasonTotalModifier.innerHTML = 5
    }
    let mindBaseScore = document.getElementById("mindBaseScore")
    let reasonModifyMindSave = document.getElementById("reasonTotalModifier").innerHTML
    reasonModifyMindSave = reasonModifyMindSave * -1
    let intuitionModifyMindSave = document.getElementById("intuitionTotalModifier").innerHTML
    let mindBaseSave = reasonModifyMindSave - intuitionModifyMindSave
    mindBaseSave = mindBaseSave * -1
    mindBaseSave = Math.floor(mindBaseSave / 2)
    mindBaseScore.innerHTML = mindBaseSave
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

function changeIntuitionRow() {
    let intuitionScore = document.getElementById("intuitionScore").value
    let intuitionModifier = document.getElementById("intuitionModifier")
    let intuitionPointCost = document.getElementById("intuitionPointCost")
    let intuitionSpeciesModifier = document.getElementById("intuitionSpeciesModifier").innerHTML
    intuitionSpeciesModifier = intuitionSpeciesModifier * -1
    let intuitionCliqueModifier = document.getElementById("intuitionCliqueModifier").innerHTML
    intuitionCliqueModifier = intuitionCliqueModifier * -1
    let intuitionTotalScore = document.getElementById("intuitionTotalScore")
    let intuitionTotalModifier = document.getElementById("intuitionTotalModifier")
    if (intuitionScore == 6) {
        intuitionModifier.innerHTML = -2
        intuitionPointCost.innerHTML = -2
    } else if (intuitionScore == 7) {
        intuitionModifier.innerHTML = -2
        intuitionPointCost.innerHTML = -1
    } else if (intuitionScore == 8) {
        intuitionModifier.innerHTML = -1
        intuitionPointCost.innerHTML = 0
    } else if (intuitionScore == 9) {
        intuitionModifier.innerHTML = -1
        intuitionPointCost.innerHTML = 1
    } else if (intuitionScore == 10) {
        intuitionModifier.innerHTML = 0
        intuitionPointCost.innerHTML = 2
    } else if (intuitionScore == 11) {
        intuitionModifier.innerHTML = 0
        intuitionPointCost.innerHTML = 3
    } else if (intuitionScore == 12) {
        intuitionModifier.innerHTML = 1
        intuitionPointCost.innerHTML = 4
    } else if (intuitionScore == 13) {
        intuitionModifier.innerHTML = 1
        intuitionPointCost.innerHTML = 5
    } else if (intuitionScore == 14) {
        intuitionModifier.innerHTML = 2
        intuitionPointCost.innerHTML = 7
    } else if (intuitionScore == 15) {
        intuitionModifier.innerHTML = 2
        intuitionPointCost.innerHTML = 9
    } else if (intuitionScore == 16) {
        intuitionModifier.innerHTML = 3
        intuitionPointCost.innerHTML = 12
    }
    intuitionTotalScore.innerHTML = intuitionScore - intuitionSpeciesModifier - intuitionCliqueModifier
    if (intuitionTotalScore.innerHTML == '4' || intuitionTotalScore.innerHTML == '5') {
        intuitionTotalModifier.innerHTML = -3
    } else if (intuitionTotalScore.innerHTML == '6' || intuitionTotalScore.innerHTML == '7') {
        intuitionTotalModifier.innerHTML = -2
    } else if (intuitionTotalScore.innerHTML == '8' || intuitionTotalScore.innerHTML == '9') {
        intuitionTotalModifier.innerHTML = -1
    } else if (intuitionTotalScore.innerHTML == '10' || intuitionTotalScore.innerHTML == '11') {
        intuitionTotalModifier.innerHTML = 0
    } else if (intuitionTotalScore.innerHTML == '12' || intuitionTotalScore.innerHTML == '13') {
        intuitionTotalModifier.innerHTML = 1
    } else if (intuitionTotalScore.innerHTML == '14' || intuitionTotalScore.innerHTML == '15') {
        intuitionTotalModifier.innerHTML = 2
    } else if (intuitionTotalScore.innerHTML == '16' || intuitionTotalScore.innerHTML == '17') {
        intuitionTotalModifier.innerHTML = 3
    } else if (intuitionTotalScore.innerHTML == '18' || intuitionTotalScore.innerHTML == '19') {
        intuitionTotalModifier.innerHTML = 4
    } else if (intuitionTotalScore.innerHTML == '20' || intuitionTotalScore.innerHTML == '21') {
        intuitionTotalModifier.innerHTML = 5
    }
    let mindBaseScore = document.getElementById("mindBaseScore")
    let reasonModifyMindSave = document.getElementById("reasonTotalModifier").innerHTML
    reasonModifyMindSave = reasonModifyMindSave * -1
    let intuitionModifyMindSave = document.getElementById("intuitionTotalModifier").innerHTML
    let mindBaseSave = reasonModifyMindSave - intuitionModifyMindSave
    mindBaseSave = mindBaseSave * -1
    mindBaseSave = Math.floor(mindBaseSave / 2)
    mindBaseScore.innerHTML = mindBaseSave
    let dexterityModifyInitiative = document.getElementById("dexterityTotalModifier").innerHTML
    dexterityModifyInitiative = dexterityModifyInitiative * -1
    let intuitionModifyInitiative = document.getElementById("intuitionTotalModifier").innerHTML
    let initiativeTotal = dexterityModifyInitiative - intuitionModifyInitiative
    initiativeTotal = initiativeTotal * -1
    initiativeTotal = Math.floor(initiativeTotal / 2)
    initiative.innerHTML = initiativeTotal
    calculateFeelsResistancesAndSaves()
    calculateStatPointsLeft()
}

let vampire = document.getElementById("vampire")
let werewolf = document.getElementById("werewolf")
let witch = document.getElementById("witch")
let fairy = document.getElementById("fairy")

function calculateHitPoints() {
    let constitutionForHitPoints = document.getElementById("constitutionTotalModifier").innerHTML
    constitutionForHitPoints = constitutionForHitPoints * -1
    if (vampire.checked == true) {
        hitPoints.innerHTML = 10 - constitutionForHitPoints
    }
    else if (werewolf.checked == true) {
        hitPoints.innerHTML = 12 - constitutionForHitPoints
    }
    else if (witch.checked == true || fairy.checked == true) {
        hitPoints.innerHTML = 6 - constitutionForHitPoints
    }
}

function vampireModifiers() {
    witchStatPicks.style.display = "none"
    for (i=0; i<23; i++) {
        speciesModifierArray[i].innerHTML = ''
    }
    strengthSpeciesModifier.innerHTML = 2
    resilienceSpeciesModifier.innerHTML = 2
    manipulationSpeciesModifier.innerHTML = 2
    charismaSpeciesModifier.innerHTML = 2
    focusSpeciesModifier.innerHTML = 3
    resolveSpeciesModifier.innerHTML = 3
    selfControlSpeciesModifier.innerHTML = 2
    angrySpeciesModifier.innerHTML = 1
    hornySpeciesModifier.innerHTML = 2
    melancholySpeciesModifier.innerHTML = 3
    fortitudeSpeciesModifier.innerHTML = 2
    reflexSpeciesModifier.innerHTML = 2
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateHitPoints()
    calculateFeelsResistancesAndSaves()
    setArmorClass()
}

let vampireModifiersDiv = document.getElementById("vampireModifiers")
let werewolfModifiersDiv = document.getElementById("werewolfModifiers")
let fairyModifiersDiv = document.getElementById("fairyModifiers")
let speciesModifierDivsArray = [vampireModifiersDiv, werewolfModifiersDiv, fairyModifiersDiv]
let speciesRadioBox = document.getElementById("speciesRadio")

function displayVampireModifiers() {
    for (i=0; i<speciesModifierDivsArray.length; i++) {
        speciesModifierDivsArray[i].style.display = 'none'
    }
    vampireModifiersDiv.style.display = 'block'
    let speciesRadioBox = document.getElementById("speciesRadio")
    speciesRadioBox.style.marginRight = "50px"
}

function werewolfModifiers() {
    witchStatPicks.style.display = "none"
    for (i=0; i<23; i++) {
        speciesModifierArray[i].innerHTML = ''
    }
    strengthSpeciesModifier.innerHTML = 2
    constitutionSpeciesModifier.innerHTML = 2
    resilienceSpeciesModifier.innerHTML = 2
    perceptionSpeciesModifier.innerHTML = 2
    focusSpeciesModifier.innerHTML = 2
    resolveSpeciesModifier.innerHTML = 4
    selfControlSpeciesModifier.innerHTML = 2
    angrySpeciesModifier.innerHTML = 3
    hornySpeciesModifier.innerHTML = 1
    melancholySpeciesModifier.innerHTML = 2
    fortitudeSpeciesModifier.innerHTML = 2
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateHitPoints()
    calculateFeelsResistancesAndSaves()
    setArmorClass()
}

function displayWerewolfModifiers() {
    for (i=0; i<speciesModifierDivsArray.length; i++) {
        speciesModifierDivsArray[i].style.display = 'none'
    }
    werewolfModifiersDiv.style.display = 'block'
    speciesRadioBox.style.marginRight = "50px"
}

function witchModifiers() {
    // space Clique box correctly
    let speciesRadioBox = document.getElementById("speciesRadio")
    speciesRadioBox.style.marginRight = "50px"
    // remove any other Species modifier statements
    for (i=0; i<speciesModifierDivsArray.length; i++) {
        speciesModifierDivsArray[i].style.display = 'none'
    }
    // remove any prior notice
    let witchNoStackingDiv = document.getElementById("witchNoStackingDiv")
    if (witchNoStackingDiv.style.display = 'block') {
        witchNoStackingDiv.style.display = 'none'
    }
    // zero out any prior values
    for (i=0; i<23; i++) {
        speciesModifierArray[i].innerHTML = ''
    }

    // display div "witchStatPicks"
    let witchStatPicks = document.getElementById("witchStatPicks")
    witchStatPicks.style.display = "block"
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateHitPoints()
    calculateFeelsResistancesAndSaves()
    setArmorClass()
}

let witchStatOption01 = document.getElementById("witchStatOption01")
let witchStatOption02 = document.getElementById("witchStatOption02")
let witchStatOption03 = document.getElementById("witchStatOption03")
let witchReasonOrIntuitionSelect = document.getElementById("witchReasonOrIntuitionSelect")
let witchMustPickReasonOrIntuitionDiv = document.getElementById("witchMustPickReasonOrIntuitionDiv")
let witchFeelPick = document.getElementById("witchFeelPick")  

function applyWitchStatModifiers() {
    // remove any previously-generated notice
    let witchNoStackingDiv = document.getElementById("witchNoStackingDiv")
    if (witchNoStackingDiv.style.display == "block") {
        witchNoStackingDiv.style.display = "none"
    }
    let witchMustPickFeelDiv = document.getElementById("witchMustPickFeelDiv")
    if (witchMustPickFeelDiv.style.display == 'block') {
        witchMustPickFeelDiv.style.display = 'none'
    }
    // zero out any prior values
    for (i=0; i<23; i++) {
        speciesModifierArray[i].innerHTML = ''
    }
    // assign bonuses to selected stats
    if (witchStatOption01.value == witchStatOption02.value || witchStatOption01.value == witchStatOption03.value || witchStatOption02.value == witchStatOption03.value) {
        let witchNoStackingDiv = document.getElementById("witchNoStackingDiv")
        witchNoStackingDiv.style.display = "block"
        return
    } 
    if (witchReasonOrIntuitionSelect.value == '') {
        witchMustPickReasonOrIntuitionDiv.style.display = 'block'
        return
    }
    for (i=0; i<12; i++) {
        if (witchStatOption01.value == statStringArray[i] || witchStatOption02.value == statStringArray[i] || witchStatOption03.value == statStringArray[i] || witchReasonOrIntuitionSelect.value == statStringArray[i]) {
            speciesModifierArray[i].innerHTML = 2
        } 
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    angrySpeciesModifier.innerHTML = ''
    melancholySpeciesModifier.innerHTML = ''
    if (witchFeelPick.value == '') {
        witchMustPickFeelDiv.style.display = 'block'
    } 
    else if (witchFeelPick.value == 'angry') {
        angrySpeciesModifier.innerHTML = 2
    } else if (witchFeelPick.value == 'melancholy') {
        melancholySpeciesModifier.innerHTML = 2
    }
    agitatedSpeciesModifier.innerHTML = 1
    hornySpeciesModifier.innerHTML = 3
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    // set focus/resolve/self-control species modifiers
    focusSpeciesModifier.innerHTML = 4
    resolveSpeciesModifier.innerHTML = 2
    selfControlSpeciesModifier.innerHTML = 2
    // set witch species save modifiers
    mindSpeciesModifier.innerHTML = 1
    willSpeciesModifier.innerHTML = 1
    calculateFeelsResistancesAndSaves()
}  

function resetWitchSelections() {
    witchStatOption01.value = ''
    witchStatOption02.value = ''
    witchStatOption03.value = ''
    witchReasonOrIntuitionSelect.value = ''
    witchFeelPick.value = ''
    for (i=0; i<23; i++) {
        speciesModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves()
}

function fairyModifiers() {
    let witchStatPicks = document.getElementById("witchStatPicks")
    witchStatPicks.style.display = "none"
    for (i=0; i<23; i++) {
        speciesModifierArray[i].innerHTML = ''
    }
    dexteritySpeciesModifier.innerHTML = 2
    manipulationSpeciesModifier.innerHTML = 2
    ingratiationSpeciesModifier.innerHTML = 2
    intuitionSpeciesModifier.innerHTML = 2
    focusSpeciesModifier.innerHTML = 2
    resolveSpeciesModifier.innerHTML = 3
    selfControlSpeciesModifier.innerHTML = 3
    agitatedSpeciesModifier.innerHTML = 3
    hornySpeciesModifier.innerHTML = 2
    melancholySpeciesModifier.innerHTML = 1
    reflexSpeciesModifier.innerHTML = 1
    mindSpeciesModifier.innerHTML = 2
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateHitPoints()
    calculateFeelsResistancesAndSaves()
    setArmorClass()
}

function displayFairyModifiers() {
    for (i=0; i<speciesModifierDivsArray.length; i++) {
        speciesModifierDivsArray[i].style.display = 'none'
    }
    fairyModifiersDiv.style.display = 'block'
    speciesRadioBox.style.marginRight = "50px"
}
function removeAbilityOptions() {
    for (i=0; i<talentSkilled.length; i++) {
        if (talentSkilled[i].selected == true) {
            talentUntrained[i].style.display = "none"
            talentProficient[i].style.display = "none"
        }
        if (talentProficient[i].selected == true) {
            talentUntrained[i].style.display = "none"
        }
    }
    for (i=0; i<skillSkilled.length; i++) {
        if (skillSkilled[i].selected == true) {
            skillUntrained[i].style.display = "none"
            skillProficient[i].style.display = "none"
        }
        if (skillProficient[i].selected == true) {
            skillUntrained[i].style.display = "none"
        }
    }
    for (i=0; i<knowledgeSkilled.length; i++) {
        if (knowledgeSkilled[i].selected == true) {
            knowledgeUntrained[i].style.display = "none"
            knowledgeProficient[i].style.display = "none"
        }
        if (knowledgeProficient[i].selected == true) {
            knowledgeUntrained[i].style.display = "none"
        }
    }
}

function reAddAbilityOptions() {
    for (i=0; i<talentUntrained.length; i++) {
        if (talentUntrained[i].style.display == "none") {
            talentUntrained[i].style.display = "block"
        }
        if (talentProficient[i].style.display == "none") {
            talentProficient[i].style.display = "block"
        }
    }
    for (i=0; i<skillUntrained.length; i++) {
        if (skillUntrained[i].style.display == "none") {
            skillUntrained[i].style.display = "block"
        }
        if (skillProficient[i].style.display == "none") {
            skillProficient[i].style.display = "block"
        }
    }
    for (i=0; i<knowledgeUntrained.length; i++) {
        if (knowledgeUntrained[i].style.display == "none") {
            knowledgeUntrained[i].style.display = "block"
        }
        if (knowledgeProficient[i].style.display == "none") {
            knowledgeProficient[i].style.display = "block"
        }
    }
}

function resetAbilitiesToUntrained() {
    for (i=0; i<talentUntrained.length; i++) {
        if (talentSkilled[i].selected == true || talentProficient[i].selected == true) {
            talentUntrained[i].selected = true
            talentCells[i].style.backgroundColor = "initial"
            talentModifierCells[i].style.backgroundColor = 'initial'
        }
    }
    for (i=0; i<skillUntrained.length; i++) {
        if (skillSkilled[i].selected == true || skillProficient[i].selected == true) {
            skillUntrained[i].selected = true
            skillCells[i].style.backgroundColor = "initial"
            skillModifierCells[i].style.backgroundColor = 'initial'
        }
    }
    for (i=0; i<knowledgeUntrained.length; i++) {
        if (knowledgeSkilled[i].selected == true || knowledgeProficient[i].selected) {
            knowledgeUntrained[i].selected = true
            knowledgeCells[i].style.backgroundColor = "initial"
            knowledgeModifierCells[i].style.backgroundColor = 'initial'
        }
    }
}

let nerdModifiersDiv = document.getElementById("nerdModifiers")
let jockModifiersDiv = document.getElementById("jockModifiers")
let prepModifiersDiv = document.getElementById("prepModifiers")
let theaterKidModifiersDiv = document.getElementById("theaterKidModifiers")
let lonerModifiersDiv = document.getElementById("lonerModifiers")
let chameleonModifiersDiv = document.getElementById("chameleonModifiers")
let cliqueModifierDivsArray = [nerdModifiersDiv, jockModifiersDiv, prepModifiersDiv, theaterKidModifiersDiv, lonerModifiersDiv, chameleonModifiersDiv]

function displayNerdModifiers() {
    for (i=0; i<cliqueModifierDivsArray.length; i++) {
        cliqueModifierDivsArray[i].style.display = 'none'
    }
    nerdModifiersDiv.style.display = 'block'
    let cliqueRadioBox = document.getElementById("cliqueRadio")
    cliqueRadioBox.style.marginRight = "50px"
}

function displayNerdStatDiv() {
    // remove any previously-generated notices
    let nerdMustMakeEveryChoiceDiv = document.getElementById("nerdMustMakeEveryChoiceDiv")
    if (nerdMustMakeEveryChoiceDiv.style.display == 'block') {
        nerdMustMakeEveryChoiceDiv.style.display = 'none'
    }
    let nerdNoStackingDiv = document.getElementById("nerdNoStackingDiv")
    if (nerdNoStackingDiv.style.display == "block") {
        nerdNoStackingDiv.style.display = "none"
    }
    // remove any previously-generated Ability divs
    for (i=0; i<cliqueAbilityArray.length; i++) {
        cliqueAbilityArray[i].style.display = "none"
    }
    // remove any previously-generated Ability picks
    resetAbilitiesToUntrained()
    talentChange()
    skillChange()
    knowledgeChange()
    // display div "nerdStatPicks"
    let nerdStatPicks = document.getElementById("nerdStatPicks")
    nerdStatPicks.style.display = "block"
    // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // remove any other clique picks
    jockStatPicks.style.display = 'none'
    prepStatPicks.style.display = 'none'
    theaterKidStatPicks.style.display = 'none'
    lonerStatPicks.style.display = 'none'
    chameleonStatPicks.style.display = 'none'
    // display nerdAbilities
    nerdAbilities.style.display = "inline"
    calculateFeelsResistancesAndSaves()
}

// declarations
let nerdNoStackingDiv = document.getElementById("nerdNoStackingDiv")
let nerdMustMakeEveryChoiceDiv = document.getElementById("nerdMustMakeEveryChoiceDiv")
let nerdStatOption01 = document.getElementById("nerdStatOption01")
let nerdStatOption02 = document.getElementById("nerdStatOption02")
let nerdStatOption03 = document.getElementById("nerdStatOption03")
let nerdStatOption04 = document.getElementById("nerdStatOption04")


function applyNerdStatModifiers() {
    // remove any previously-generated notices
    if (nerdMustMakeEveryChoiceDiv.style.display == "block") {
        nerdMustMakeEveryChoiceDiv.style.display = "none"
    }
    if (nerdNoStackingDiv.style.display == "block") {
        nerdNoStackingDiv.style.display = "none"
    }
    // make sure a choice is made for every option
    if (nerdStatOption01.value == '' || nerdStatOption02.value == '' || nerdStatOption03.value == '' || nerdStatOption04.value == '') {
        nerdMustMakeEveryChoiceDiv.style.display = "block"
        return
    // check for no stacking
    } else if (nerdStatOption01.value == nerdStatOption02.value || nerdStatOption03.value == nerdStatOption04.value) {
        nerdNoStackingDiv.style.display = "block"
        return
    } else {
    // assign bonuses to selected stats
    for (i=0; i<12; i++) {
            if (nerdStatOption01.value == statStringArray[i] || nerdStatOption02.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = 2
            } 
        }
        for (i=0; i<12; i++) {
            changeRowArray[i]()
        }    
    }
    for (i=0; i<statStringArray.length; i++) {
        if (nerdStatOption03.value == statStringArray[i] || nerdStatOption04.value == statStringArray[i]) {
            cliqueModifierArray[i].innerHTML = -2
        }
    }
    for (i=0; i<statStringArray.length; i++) {
        changeRowArray[i]()
    }
    // set focus/resolve/self-control clique modifiers
    focusCliqueModifier.innerHTML = 2
    // set FEELS clique modifiers
    agitatedCliqueModifier.innerHTML = 2
    hornyCliqueModifier.innerHTML = 2
    // set saves clique modifiers
    mindCliqueModifier.innerHTML = 2
    willCliqueModifier.innerHTML = 2 
    calculateFeelsResistancesAndSaves()
}

function resetNerdStatModifiers() {
    // remove any previously-generated notices
    if (nerdMustMakeEveryChoiceDiv.style.display == "block") {
        nerdMustMakeEveryChoiceDiv.style.display = "none"
    }
    if (nerdNoStackingDiv.style.display == "block") {
        nerdNoStackingDiv.style.display = "none"
    }
    // reset choices
    nerdStatOption01.value = ''
    nerdStatOption02.value = ''
    nerdStatOption03.value = ''
    nerdStatOption04.value = ''
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves() 
}

function displayJockStatDiv() {
    // remove any previously-generated notices
    let jockMustMakeEveryChoiceDiv = document.getElementById("jockMustMakeEveryChoiceDiv")
    if (jockMustMakeEveryChoiceDiv.style.display == 'block') {
        jockMustMakeEveryChoiceDiv.style.display = 'none'
    }
    let jockNoStackingDiv = document.getElementById("jockNoStackingDiv")
    if (jockNoStackingDiv.style.display == "block") {
        jockNoStackingDiv.style.display = "none"
    }
    // remove any previously-generated Ability divs
    for (i=0; i<cliqueAbilityArray.length; i++) {
        cliqueAbilityArray[i].style.display = "none"
    }
    // remove any previously-generated Ability picks
    resetAbilitiesToUntrained()
    talentChange()
    skillChange()
    knowledgeChange()
    // display div "jockStatPicks"
    let jockStatPicks = document.getElementById("jockStatPicks")
    jockStatPicks.style.display = "block"
    // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // hide other clique abilities
    nerdStatPicks.style.display = 'none'
    prepStatPicks.style.display = 'none'
    theaterKidStatPicks.style.display = 'none'
    lonerStatPicks.style.display = 'none'
    chameleonStatPicks.style.display = 'none'
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    // display jockAbilities
    jockAbilities.style.display = "inline"
    calculateFeelsResistancesAndSaves()
}

let jockStatOption01 = document.getElementById("jockStatOption01")
let jockStatOption02 = document.getElementById("jockStatOption02")
let jockStatOption03 = document.getElementById("jockStatOption03")
let jockStatOption04 = document.getElementById("jockStatOption04")

function applyJockStatModifiers() {
    // remove any previously-generated notices
    let jockMustMakeEveryChoiceDiv = document.getElementById("jockMustMakeEveryChoiceDiv")
    let jockNoStackingDiv = document.getElementById("jockNoStackingDiv")
    if (jockMustMakeEveryChoiceDiv.style.display == "block") {
        jockMustMakeEveryChoiceDiv.style.display = "none"
    }
    if (jockNoStackingDiv.style.display == "block") {
        jockNoStackingDiv.style.display = "none"
    }
    // assign selected values  
    // make sure a choice is made for every option
    if (jockStatOption01.value == '' || jockStatOption02.value == '' || jockStatOption03.value == '' || jockStatOption04.value == '') {
        let jockMustMakeEveryChoiceDiv = document.getElementById("jockMustMakeEveryChoiceDiv")
        jockMustMakeEveryChoiceDiv.style.display = "block"
        return
    } 
    // check for no stacking
    if (jockStatOption01.value == jockStatOption02.value) {
        let jockNoStackingDiv = document.getElementById("jockNoStackingDiv")
        jockNoStackingDiv.style.display = "block"
        return
    } else if (jockStatOption02.value == jockStatOption04.value) {
        let jockNoSameBonusAndPenaltyDiv = document.getElementById("jockNoSameBonusAndPenaltyDiv")
        jockNoSameBonusAndPenaltyDiv.style.display = "block"
        return
    }
    else {
    // assign bonuses to selected stats
        for (i=0; i<statStringArray.length; i++) {
            if (jockStatOption01.value == statStringArray[i] || jockStatOption02.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = 2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            if (jockStatOption03.value == statStringArray[i] || jockStatOption04.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = -2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            changeRowArray[i]()
        }
    }
    // set focus/resolve/self-control clique modifiers
    resolveCliqueModifier.innerHTML = 2
    // set FEELS clique modifiers
    hornyCliqueModifier.innerHTML = 2
    angryCliqueModifier.innerHTML = 2
    // set saves clique modifiers
    fortitudeCliqueModifier.innerHTML = 2
    reflexCliqueModifier.innerHTML = 2
    // apply selected modifiers
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
calculateFeelsResistancesAndSaves()
}

let jockMustMakeEveryChoiceDiv = document.getElementById("jockMustMakeEveryChoiceDiv")
let jockNoStackingDiv = document.getElementById("jockNoStackingDiv")
let jockNoSameBonusAndPenaltyDiv = document.getElementById("jockNoSameBonusAndPenaltyDiv")

function resetJockStatModifiers() {
    // remove any previously-generated notices
    if (jockMustMakeEveryChoiceDiv.style.display == "block") {
        jockMustMakeEveryChoiceDiv.style.display = "none"
    }
    if (jockNoStackingDiv.style.display == "block") {
        jockNoStackingDiv.style.display = "none"
    }
    if (jockNoSameBonusAndPenaltyDiv.style.display == 'block') {
        jockNoSameBonusAndPenaltyDiv.style.display = 'none'
    }
    // reset choices
    jockStatOption01.value = ''
    jockStatOption02.value = ''
    jockStatOption03.value = ''
    jockStatOption04.value = ''
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves() 
}

let prepMustMakeEveryChoiceDiv = document.getElementById("prepMustMakeEveryChoiceDiv")
let prepNoStackingDiv = document.getElementById("prepNoStackingDiv")
let prepNoSameBonusAndPenaltyDiv = document.getElementById("prepNoSameBonusAndPenaltyDiv")
let prepMustChooseASaveDiv = document.getElementById("prepMustChooseASaveDiv")
let prepNoticeDivs = [prepMustMakeEveryChoiceDiv, prepNoStackingDiv, prepNoSameBonusAndPenaltyDiv, prepMustChooseASaveDiv]

function displayPrepStatDiv() {
    // remove any previously-generated notices
    for (i=0; i<prepNoticeDivs.length; i++) {
        if (prepNoticeDivs[i].style.display == 'block') {
            prepNoticeDivs[i].style.display = 'none'
        }
    }
    // remove any previously-generated Ability divs
    for (i=0; i<cliqueAbilityArray.length; i++) {
        cliqueAbilityArray[i].style.display = "none"
    }
    // remove any previously-generated Ability picks
    resetAbilitiesToUntrained()
    talentChange()
    skillChange()
    knowledgeChange()
    // display div "prepStatPicks"
    let prepStatPicks = document.getElementById("prepStatPicks")
    prepStatPicks.style.display = "block"
    // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // hide other clique abilities
    nerdStatPicks.style.display = 'none'
    jockStatPicks.style.display = 'none'
    theaterKidStatPicks.style.display = 'none'
    lonerStatPicks.style.display = 'none'
    chameleonStatPicks.style.display = 'none'
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    // display prepAbilities
    prepAbilities.style.display = "inline"
    calculateFeelsResistancesAndSaves()
}

// declarations
let prepStatOption01 = document.getElementById("prepStatOption01")
let prepStatOption02 = document.getElementById("prepStatOption02")
let prepStatOption03 = document.getElementById("prepStatOption03")
let prepStatOption04 = document.getElementById("prepStatOption04")
let prepSaveIncrease = document.getElementById("prepSaveIncrease")

function applyPrepStatModifiers() {
     // remove any previously-generated notices
     for (i=0; i<prepNoticeDivs.length; i++) {
        if (prepNoticeDivs[i].style.display == 'block') {
            prepNoticeDivs[i].style.display = 'none'
        }
    }
    // make sure a choice is made for every option
    if (prepStatOption01.value == '' || prepStatOption02.value == '' || prepStatOption03.value == '' || prepStatOption04.value == '' || prepSaveIncrease.value == '') {
        prepMustMakeEveryChoiceDiv.style.display = "block"
        return
    } 
    // check for no stacking
    if (prepStatOption01.value == prepStatOption02.value) {
        let prepNoStackingDiv = document.getElementById("prepNoStackingDiv")
        prepNoStackingDiv.style.display = "block"
        return
    } else if (prepStatOption01.value == prepStatOption03.value || prepStatOption01.value == prepStatOption04.value || prepStatOption02.value == prepStatOption03.value || prepStatOption02.value == prepStatOption04.value) {
        let prepNoSameBonusAndPenaltyDiv = document.getElementById("prepNoSameBonusAndPenaltyDiv")
        prepNoSameBonusAndPenaltyDiv.style.display = "block"
        return
    } else {
        // assign bonuses to selected stats
        for (i=0; i<statStringArray.length; i++) {
            if (prepStatOption01.value == statStringArray[i] || prepStatOption02.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = 2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            if (prepStatOption03.value == statStringArray[i] || prepStatOption04.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = -2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            changeRowArray[i]()
        }
    }
    // set focus/resolve/self-control clique modifiers
    focusCliqueModifier.innerHTML = 1
    resolveCliqueModifier.innerHTML = 1
    // set FEELS clique modifiers
    agitatedCliqueModifier.innerHTML = 2
    melancholyCliqueModifier.innerHTML = 2
    // set saves clique modifiers
    mindCliqueModifier.innerHTML = 2
    if (prepSaveIncrease.value == 'Fortitude') {
        fortitudeCliqueModifier.innerHTML = 2
    } 
    if (prepSaveIncrease.value == 'Reflex') {
        reflexCliqueModifier.innerHTML = 2
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateFeelsResistancesAndSaves()
}

function resetPrepStatModifiers() {
    // remove any previously-generated notices
    if (prepMustMakeEveryChoiceDiv.style.display == "block") {
        prepMustMakeEveryChoiceDiv.style.display = "none"
    }
    if (prepNoStackingDiv.style.display == "block") {
        prepNoStackingDiv.style.display = "none"
    }
    if (prepNoSameBonusAndPenaltyDiv.style.display == 'block') {
        prepNoSameBonusAndPenaltyDiv.style.display = 'none'
    }
    // reset choices
    prepStatOption01.value = ''
    prepStatOption02.value = ''
    prepStatOption03.value = ''
    prepStatOption04.value = ''
    prepSaveIncrease.value = ''
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves() 
 }

let theaterKidMustMakeEveryChoiceDiv = document.getElementById("theaterKidMustMakeEveryChoiceDiv")
let theaterKidNoStackingDiv = document.getElementById("theaterKidNoStackingDiv")
let theaterKidNoSameBonusAndPenaltyDiv = document.getElementById("theaterKidNoSameBonusAndPenaltyDiv")
let theaterKidMustChooseAResistanceDiv = document.getElementById("theaterKidMustChooseAResistanceDiv")
let theaterKidNoticeDivs = [theaterKidMustMakeEveryChoiceDiv, theaterKidNoStackingDiv, theaterKidNoSameBonusAndPenaltyDiv, theaterKidMustChooseAResistanceDiv]

function displayTheaterKidStatDiv() {
    // remove any previously-generated notices
    for (i=0; i<theaterKidNoticeDivs.length; i++) {
        if (theaterKidNoticeDivs[i].style.display == 'block') {
            theaterKidNoticeDivs[i].style.display = 'none'
        }
    }
    // remove any previously-generated Ability divs
    for (i=0; i<cliqueAbilityArray.length; i++) {
        cliqueAbilityArray[i].style.display = "none"
    }
    // remove any previously-generated Ability picks
    resetAbilitiesToUntrained()
    talentChange()
    skillChange()
    knowledgeChange()
    // display div "theaterKidStatPicks"
    let theaterKidStatPicks = document.getElementById("theaterKidStatPicks")
    theaterKidStatPicks.style.display = "block"
    // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // hide other clique abilities
    nerdStatPicks.style.display = 'none'
    jockStatPicks.style.display = 'none'
    prepStatPicks.style.display = 'none'
    lonerStatPicks.style.display = 'none'
    chameleonStatPicks.style.display = 'none'
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    // display theater kid Abilities
    theaterKidAbilities.style.display = "inline"
    calculateFeelsResistancesAndSaves()
}

// declarations
let theaterKidStatOption01 = document.getElementById("theaterKidStatOption01")
let theaterKidStatOption02 = document.getElementById("theaterKidStatOption02")
let theaterKidStatOption03 = document.getElementById("theaterKidStatOption03")
let theaterKidStatOption04 = document.getElementById("theaterKidStatOption04")
let theaterKidResistanceIncrease = document.getElementById("theaterKidResistanceIncrease")

function applyTheaterKidStatModifiers() {
    // remove any previously-generated notices
    for (i=0; i<theaterKidNoticeDivs.length; i++) {
        if (theaterKidNoticeDivs[i].style.display == 'block') {
            theaterKidNoticeDivs[i].style.display = 'none'
        }
    }
    // make sure a choice is made for every option
    if (theaterKidStatOption01.value == '' || theaterKidStatOption02.value == '' || theaterKidStatOption03.value == '' || theaterKidStatOption04.value == '' || theaterKidResistanceIncrease.value == '') {
        let theaterKidMustMakeEveryChoiceDiv = document.getElementById("theaterKidMustMakeEveryChoiceDiv")
        theaterKidMustMakeEveryChoiceDiv.style.display = "block"
        return
    } 
    // check for no stacking
    if (theaterKidStatOption01.value == theaterKidStatOption02.value) {
        let theaterKidNoStackingDiv = document.getElementById("theaterKidNoStackingDiv")
        theaterKidNoStackingDiv.style.display = "block"
        return
    } else if (theaterKidStatOption01.value == theaterKidStatOption03.value || theaterKidStatOption01.value == theaterKidStatOption04.value || theaterKidStatOption02.value == theaterKidStatOption03.value || theaterKidStatOption02.value == theaterKidStatOption04.value) {
        let theaterKidNoSameBonusAndPenaltyDiv = document.getElementById("theaterKidNoSameBonusAndPenaltyDiv")
        theaterKidNoSameBonusAndPenaltyDiv.style.display = "block"
        return
    } else {
        // assign bonuses to selected stats
        for (i=0; i<statStringArray.length; i++) {
            if (theaterKidStatOption01.value == statStringArray[i] || theaterKidStatOption02.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = 2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            if (theaterKidStatOption03.value == statStringArray[i] || theaterKidStatOption04.value == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = -2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            changeRowArray[i]()
        }
    }
    // set FEELS clique modifiers
    hornyCliqueModifier.innerHTML = 2
    melancholyCliqueModifier.innerHTML = 2
    // set resistances clique modifiers
    focusCliqueModifier.innerHTML = 1
    if (theaterKidResistanceIncrease.value == '') {
        theaterKidMustChooseAResistanceDiv.style.display = 'block'
        return
    }
    else if (theaterKidResistanceIncrease.value == 'Resolve') {
        resolveCliqueModifier.innerHTML = 1
    }
    else if (theaterKidResistanceIncrease.value == 'Self-Control') {
        selfControlCliqueModifier.innerHTML = 1
    }
    // set saves clique modifiers
    reflexCliqueModifier.innerHTML = 2
    willCliqueModifier.innerHTML = 2
    for (i=0; i<12; i++) {
        if (theaterKidStatOption01.value == statStringArray[i] || theaterKidStatOption02.value == statStringArray[i]) {
            cliqueModifierArray[i].innerHTML = 2
        }
    }
    for (i=0; i<12; i++) {
        if (theaterKidStatOption03.value == statStringArray[i] || theaterKidStatOption04.value == statStringArray[i]) {
            cliqueModifierArray[i].innerHTML = - 2
        }
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateFeelsResistancesAndSaves()
}


function resetTheaterKidStatModifiers() {
    // remove any previously-generated notices
    for (i=0; i<theaterKidNoticeDivs.length; i++) {
        if (theaterKidNoticeDivs[i].style.display == 'block') {
            theaterKidNoticeDivs[i].style.display = 'none'
        }
    }
    // reset choices
    theaterKidStatOption01.value = ''
    theaterKidStatOption02.value = ''
    theaterKidStatOption03.value = ''
    theaterKidStatOption04.value = ''
    theaterKidResistanceIncrease.value = ''
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves() 
}

let lonerMustMakeEveryChoiceDiv = document.getElementById("lonerMustMakeEveryChoiceDiv")
let lonerNoStackingDiv = document.getElementById("lonerNoStackingDiv")
let lonerNoSameBonusAndPenaltyDiv = document.getElementById("lonerNoSameBonusAndPenaltyDiv")
let lonerMustChooseOneResistanceOrTwoDiv = document.getElementById("lonerMustChooseOneResistanceOrTwoDiv")
let lonerMustChooseAResistanceDiv = document.getElementById("lonerMustChooseAResistanceDiv")
let lonerMustChooseTwoResistancesDiv = document.getElementById("lonerMustChooseTwoResistancesDiv")
let lonerNoticeDivs = [lonerMustMakeEveryChoiceDiv, lonerNoStackingDiv, lonerNoSameBonusAndPenaltyDiv, lonerMustChooseOneResistanceOrTwoDiv, lonerMustChooseAResistanceDiv, lonerMustChooseTwoResistancesDiv]

function displayLonerStatDiv() {
    // remove any previously-generated notices
    for (i=0; i<lonerNoticeDivs.length; i++) {
        if (lonerNoticeDivs[i].style.display == 'block') {
            lonerNoticeDivs[i].style.display = 'none'
        }
    }
    // remove any previously-generated Ability divs
    for (i=0; i<cliqueAbilityArray.length; i++) {
        cliqueAbilityArray[i].style.display = "none"
    }
    // remove any previously-generated Ability picks
    resetAbilitiesToUntrained()
    talentChange()
    skillChange()
    knowledgeChange()
    // display div "lonerStatPicks"
    let lonerStatPicks = document.getElementById("lonerStatPicks")
    lonerStatPicks.style.display = "block"
    // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // hide other clique abilities
    nerdStatPicks.style.display = 'none'
    jockStatPicks.style.display = 'none'
    prepStatPicks.style.display = 'none'
    theaterKidStatPicks.style.display = 'none'
    chameleonStatPicks.style.display = 'none'
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    // display loner Abilities
    lonerAbilities.style.display = "inline"
    calculateFeelsResistancesAndSaves()
}

let lonerStatOption01 = document.getElementById("lonerStatOption01")
let lonerStatOption02 = document.getElementById("lonerStatOption02")
let lonerStatOption03 = document.getElementById("lonerStatOption03")
let lonerStatOption04 = document.getElementById("lonerStatOption04")

function applyLonerStatModifiers() {
     // remove any previously-generated notices
     for (i=0; i<lonerNoticeDivs.length; i++) {
        if (lonerNoticeDivs[i].style.display == 'block') {
            lonerNoticeDivs[i].style.display = 'none'
        }
    }
     // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // make sure a choice is made for every option
    if (lonerStatOption01.value == '' || lonerStatOption02.value == '' || lonerStatOption03.value == '' || lonerStatOption04.value == '') {
        let lonerMustMakeEveryChoiceDiv = document.getElementById("lonerMustMakeEveryChoiceDiv")
        lonerMustMakeEveryChoiceDiv.style.display = "block"
        return
    } 
    // check for no stat stacking
    if (lonerStatOption01.value == lonerStatOption02.value) {
        lonerNoStackingDiv.style.display = "block"
        return
    } else if (lonerStatOption01.value == lonerStatOption03.value || lonerStatOption01.value == lonerStatOption04.value || lonerStatOption02.value == lonerStatOption03.value || lonerStatOption02.value == lonerStatOption04.value) {
        lonerNoSameBonusAndPenaltyDiv.style.display = "block"
        return
    } 
    // confirm a resistance option has been selected
    let oneResistance = document.getElementById("oneResistance")
    let twoResistances = document.getElementById("twoResistances")
    if (oneResistance.checked == false && twoResistances.checked == false) {
        lonerMustChooseOneResistanceOrTwoDiv.style.display = 'block'
        return
    }
    // assign bonuses to selected stats
    for (i=0; i<statStringArray.length; i++) {
        if (lonerStatOption01.value == statStringArray[i] || lonerStatOption02.value == statStringArray[i]) {
            cliqueModifierArray[i].innerHTML = 2
        }
    }
    for (i=0; i<statStringArray.length; i++) {
        if (lonerStatOption03.value == statStringArray[i] || lonerStatOption04.value == statStringArray[i]) {
            cliqueModifierArray[i].innerHTML = -2
        }
    }
    for (i=0; i<statStringArray.length; i++) {
        changeRowArray[i]()
    }
    // set FEELS clique modifiers
    angryCliqueModifier.innerHTML = 2
    melancholyCliqueModifier.innerHTML = 2
    // set saves clique modifiers
    fortitudeCliqueModifier.innerHTML = 2
    willCliqueModifier.innerHTML = 2
    // set Resistances
    let singleResistancePick = resistanceList01.value
    if (oneResistance.checked == true) {
        if (singleResistancePick == '') {
            lonerMustChooseAResistanceDiv.style.display = 'block'
            return
        }        
        else if (singleResistancePick == 'Focus') {
            focusCliqueModifier.innerHTML = 2
        } else if (singleResistancePick == 'Resolve') {
            resolveCliqueModifier.innerHTML = 2
        } else if (singleResistancePick == 'Self-Control') {
            selfControlCliqueModifier.innerHTML = 2
        }    
    }
    let firstResistanceOfTwo = resistanceList02.value
    let secondResistanceOfTwo = resistanceList03.value
    if (twoResistances.checked == true) {
        if (firstResistanceOfTwo == secondResistanceOfTwo) {
            let lonerMustChooseTwoResistancesDiv = document.getElementById("lonerMustChooseTwoResistancesDiv")
            lonerMustChooseTwoResistancesDiv.style.display = "block"
            return
        }
        if (firstResistanceOfTwo == 'Focus' || secondResistanceOfTwo == 'Focus') {
            focusCliqueModifier.innerHTML = 1
        }
        if (firstResistanceOfTwo == 'Resolve' || secondResistanceOfTwo == 'Resolve') {
            resolveCliqueModifier.innerHTML = 1
        }
        if (firstResistanceOfTwo == 'Self-Control' || secondResistanceOfTwo == 'Self-Control') {
            selfControlCliqueModifier.innerHTML = 1
        }
    }
    calculateFeelsResistancesAndSaves()
}



function resetLonerStatModifiers() {
    // remove any previously-generated notices
    for (i=0; i<lonerNoticeDivs.length; i++) {
        if (lonerNoticeDivs[i].style.display == 'block') {
            lonerNoticeDivs[i].style.display = 'none'
        }
    }
    // reset choices
    lonerStatOption01.value = ''
    lonerStatOption02.value = ''
    lonerStatOption03.value = ''
    lonerStatOption04.value = ''
    resistanceList01.value = ''
    resistanceList02.value = ''
    resistanceList03.value = ''
    oneResistance.checked = false
    twoResistances.checked = false
    singleResistancePick = ''
    firstResistanceOfTwo = ''
    secondResistanceOfTwo = ''
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves()     
}


let chameleonMustMakeEveryChoiceDiv = document.getElementById("chameleonMustMakeEveryChoiceDiv")
let chameleonNoStackingDiv = document.getElementById("chameleonNoStackingDiv")
let chameleonMustChooseTwoFeelsDiv = document.getElementById("chameleonMustChooseTwoFeelsDiv")
let chameleonNoStackingFeelsDiv = document.getElementById("chameleonNoStackingFeelsDiv")
let chameleonMustChooseTwoResistancesDiv = document.getElementById("chameleonMustChooseTwoResistancesDiv")
let chameleonNoStackingResistancesDiv = document.getElementById("chameleonNoStackingResistancesDiv")
let chameleonMustChooseTwoSavesDiv = document.getElementById("chameleonMustChooseTwoSavesDiv")
let chameleonNoStackingSavesDiv = document.getElementById("chameleonNoStackingSavesDiv")
let chameleonNoticeDivs = [chameleonMustMakeEveryChoiceDiv, chameleonNoStackingDiv, chameleonMustChooseTwoFeelsDiv, chameleonNoStackingFeelsDiv, chameleonMustChooseTwoResistancesDiv, chameleonNoStackingResistancesDiv, chameleonMustChooseTwoSavesDiv, chameleonNoStackingSavesDiv]

function displayChameleonStatDiv() {
    // remove any previously-generated notices
    for (i=0; i<chameleonNoticeDivs.length; i++) {
        if (chameleonNoticeDivs[i].style.display == "block") {
            chameleonNoticeDivs[i].style.display = "none"
        }
    }
    // remove any previously-generated Ability divs
    for (i=0; i<cliqueAbilityArray.length; i++) {
        cliqueAbilityArray[i].style.display = "none"
    }
    // remove any previously-generated Ability picks
    resetAbilitiesToUntrained()
    talentChange()
    skillChange()
    knowledgeChange()
    // display div "chameleonStatPicks"
    let chameleonStatPicks = document.getElementById("chameleonStatPicks")
    chameleonStatPicks.style.display = "block"
    // hide other clique abilities
    nerdStatPicks.style.display = 'none'
    jockStatPicks.style.display = 'none'
    prepStatPicks.style.display = 'none'
    theaterKidStatPicks.style.display = 'none'
    lonerStatPicks.style.display = 'none'
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    // display chameleon Abilities
    chameleonAbilities.style.display = "inline"
    calculateFeelsResistancesAndSaves()
}

function applyChameleonStatModifiers() {
     // check for prior instructions
    for (i=0; i<chameleonNoticeDivs.length; i++) {
        if (chameleonNoticeDivs[i].style.display == "block") {
            chameleonNoticeDivs[i].style.display = "none"
        }
    }
    // zero out any prior values
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    // assign selected values
    let selection01 = document.getElementById("chameleonStatOption01").value
    let selection02 = document.getElementById("chameleonStatOption02").value
    let selection03 = document.getElementById("chameleonStatOption03").value
    let selection04 = document.getElementById("chameleonStatOption04").value
    let selection05 = document.getElementById("chameleonFeelIncrease01").value
    let selection06 = document.getElementById("chameleonFeelIncrease02").value
    let selection07 = document.getElementById("chameleonResistanceIncrease01").value
    let selection08 = document.getElementById("chameleonResistanceIncrease02").value
    let selection09 = document.getElementById("chameleonSavingThrowOption01").value
    let selection10 = document.getElementById("chameleonSavingThrowOption02").value
     let selectionArray = [selection01, selection02, selection03, selection04, selection05, selection06, selection07, selection08, selection09, selection10]
    // make sure a choice is made for every option
     for (i=0; i<selectionArray.length; i++) {
        if (selectionArray[i] == '') {
            chameleonMustMakeEveryChoiceDiv.style.display = "block"
            return    
        }
    }
    // check for no stacking
    if (selection01 == selection02) {
        chameleonNoStackingDiv.style.display = "block"
        return
    } else if (selection01 == selection03 || selection01 == selection04 || selection02 == selection03 || selection02 == selection04) {
        chameleonNoSameBonusAndPenaltyDiv.style.display = "block"
        return
    } else if (selection05 == selection06) {
        chameleonNoStackingFeelsDiv.style.display = "block"
        return
    } else if (selection07 == selection08) {
        chameleonNoStackingResistancesDiv.style.display = "block"
        return
    } else if (selection09 == selection10) {
        chameleonNoStackingSavesDiv.style.display = "block"
        return
    } else {
    // assign bonuses to selected stats
        for (i=0; i<statStringArray.length; i++) {
            if (selection01 == statStringArray[i] || selection02 == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = 2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            if (selection03 == statStringArray[i] || selection04 == statStringArray[i]) {
                cliqueModifierArray[i].innerHTML = -2
            }
        }
        for (i=0; i<statStringArray.length; i++) {
            changeRowArray[i]()
        }
    }
    let feelsStringsArray = ['Agitated', 'Angry', 'Horny', 'Melancholy']
    let resistancesStringsArray = ['Focus', 'Resolve', 'Self-Control'] 
    let savingThrowsStringArray = ['Fortitude', 'Reflex', 'Mind', 'Will']
    let feelsCliqueModifierArray = [agitatedCliqueModifier, angryCliqueModifier, hornyCliqueModifier, melancholyCliqueModifier]
    let resistancesCliqueModifierArray = [focusCliqueModifier, resolveCliqueModifier, selfControlCliqueModifier]
    let savesCliqueModifierArray = [fortitudeCliqueModifier, reflexCliqueModifier, mindCliqueModifier, willCliqueModifier]
    for (i=0; i<feelsCliqueModifierArray.length; i++) {
        if (selection05 == feelsStringsArray[i] || selection06 == feelsStringsArray[i]) {
            feelsCliqueModifierArray[i].innerHTML = 2
        }
    }
    for (i=0; i<resistancesStringsArray.length; i++) {
        if (selection07 == resistancesStringsArray[i] || selection08 == resistancesStringsArray[i]) {
            resistancesCliqueModifierArray[i].innerHTML = 1
        }
    }
    for (i=0; i<savesCliqueModifierArray.length; i++) {
        if (selection09 == savingThrowsStringArray[i] || selection10 == savingThrowsStringArray[i]) {
            savesCliqueModifierArray[i].innerHTML = 2
        }
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }
    calculateFeelsResistancesAndSaves()
}

function resetChameleonStatModifiers() {
    // remove any previously-generated notices
    for (i=0; i<chameleonNoticeDivs.length; i++) {
        if (chameleonNoticeDivs[i].style.display == 'block') {
            chameleonNoticeDivs[i].style.display = 'none'
        }
    }
    let selection01 = document.getElementById("chameleonStatOption01")
    let selection02 = document.getElementById("chameleonStatOption02")
    let selection03 = document.getElementById("chameleonStatOption03")
    let selection04 = document.getElementById("chameleonStatOption04")
    let selection05 = document.getElementById("chameleonFeelIncrease01")
    let selection06 = document.getElementById("chameleonFeelIncrease02")
    let selection07 = document.getElementById("chameleonResistanceIncrease01")
    let selection08 = document.getElementById("chameleonResistanceIncrease02")
    let selection09 = document.getElementById("chameleonSavingThrowOption01")
    let selection10 = document.getElementById("chameleonSavingThrowOption02")
    selection01.value = ''
    selection02.value = ''
    selection03.value = ''
    selection04.value = ''
    selection05.value = ''
    selection06.value = ''
    selection07.value = ''
    selection08.value = ''
    selection09.value = ''
    selection10.value = ''
    for (i=0; i<23; i++) {
        cliqueModifierArray[i].innerHTML = ''
    }
    for (i=0; i<12; i++) {
        changeRowArray[i]()
    }    
    calculateFeelsResistancesAndSaves()
}


let acting = document.getElementById("acting")
let actingModifier = document.getElementById("actingModifier")
let alertness = document.getElementById("alertness")
let alertnessModifier = document.getElementById("alertnessModifier")
let athletics = document.getElementById("athletics")
let athleticsModifier = document.getElementById("athleticsModifier")
let brawling = document.getElementById("brawling")
let brawlingModifier = document.getElementById("brawlingModifier")
let calmingDown = document.getElementById("calmingDown")
let calmingDownModifier = document.getElementById("calmingDownModifier")
let dodge = document.getElementById("dodge")
let dodgeModifier = document.getElementById("dodgeModifier")
let empathy = document.getElementById("empathy")
let empathyModifier = document.getElementById("empathyModifier")
let intimidation = document.getElementById("intimidation")
let intimidationModifier = document.getElementById("intimidationModifier")
let memory = document.getElementById("memory")
let memoryModifier = document.getElementById("memoryModifier")
let stealth = document.getElementById("stealth")
let stealthModifier = document.getElementById("stealthModifier")
let deception = document.getElementById("deception")
let deceptionModifier = document.getElementById("deceptionModifier")
let firearms = document.getElementById("firearms")
let firearmsModifier = document.getElementById("firearmsModifier")
let investigation = document.getElementById("investigation")
let investigationModifier = document.getElementById("investigationModifier")
let leadership = document.getElementById("leadership")
let leadershipModifier = document.getElementById("leadershipModifier")
let lockPicking = document.getElementById("lockPicking")
let lockPickingModifier = document.getElementById("lockPickingModifier")
let melee = document.getElementById("melee")
let meleeModifier = document.getElementById("meleeModifier")
let music = document.getElementById("music")
let musicModifier = document.getElementById("musicModifier")
let sleightOfHand = document.getElementById("sleightOfHand")
let sleightOfHandModifier = document.getElementById("sleightOfHandModifier")
let security = document.getElementById("security")
let securityModifier = document.getElementById("securityModifier")
let socializing = document.getElementById("socializing")
let socializingModifier = document.getElementById("socializingModifier")
let arcana = document.getElementById("arcana")
let arcanaModifier = document.getElementById("arcanaModifier")
let codeBreaking = document.getElementById("codeBreaking")
let codeBreakingModifier = document.getElementById("codeBreakingModifier")
let computers = document.getElementById("computers")
let computersModifier = document.getElementById("computersModifier")
let history = document.getElementById("history")
let historyModifier = document.getElementById("historyModifier")
let medicine = document.getElementById("medicine")
let medicineModifier = document.getElementById("medicineModifier")
let nature = document.getElementById("nature")
let natureModifier = document.getElementById("natureModifier")
let occult = document.getElementById("occult")
let occultModifier = document.getElementById("occultModifier")
let religion = document.getElementById("religion")
let religionModifier = document.getElementById("religionModifier")
let science = document.getElementById("science")
let scienceModifier = document.getElementById("scienceModifier")
let special = document.getElementById("special")
let specialModifier = document.getElementById("specialModifier")

let talentStringArray = ['Acting', 'Alertness', 'Athletics', 'Brawling', 'Calming Down', 'Dodge', 'Empathy', 'Intimidation', 'Memory', 'Stealth']
let talentArray = [acting, alertness, athletics, brawling, calmingDown, dodge, empathy, intimidation, memory, stealth]
let talentModifierArray = [actingModifier, alertnessModifier, athleticsModifier, brawlingModifier, calmingDownModifier, dodgeModifier, empathyModifier, intimidationModifier, memoryModifier, stealthModifier]
let skillStringArray = ['Deception', 'Firearms', 'Investigation', 'Leadership', 'Lock-Picking', 'Melee', 'Music', 'Security', 'Sleight of Hand', 'Socializing']
let skillArray = [deception, firearms, investigation, leadership, lockPicking, melee, music, security, sleightOfHand, socializing]
let skillModifierArray = [deceptionModifier, firearmsModifier, investigationModifier, leadershipModifier, lockPickingModifier, meleeModifier, musicModifier, securityModifier, sleightOfHandModifier, socializingModifier]
let knowledgeStringArray = ['Arcana', 'Code-Breaking', 'Computers', 'History', 'Medicine', 'Nature', 'Occult', 'Religion', 'Science', 'Special']
let knowledgeArray = [arcana, codeBreaking, computers, history, medicine, nature, occult, science, special, theology]
let knowledgeModifierArray = [arcanaModifier, codeBreakingModifier, computersModifier, historyModifier, medicineModifier, natureModifier, occultModifier, scienceModifier, specialModifier, theologyModifier]

function talentChange() {
    for (i=0; i<talentArray.length; i++) {
        if (talentArray[i].value == 'Untrained') {
            talentModifierArray[i].innerHTML = 0
        } 
        if (talentArray[i].value == 'Proficient') {
            talentModifierArray[i].innerHTML = 1
        }
        if (talentArray[i].value == 'Skilled') {
            talentModifierArray[i].innerHTML = 2
        }
    }
} 

function skillChange() {
    for (i=0; i<skillArray.length; i++) {
        if (skillArray[i].value == 'Untrained') {
            skillModifierArray[i].innerHTML = -2
        } 
        if (skillArray[i].value == 'Proficient') {
            skillModifierArray[i].innerHTML = 1
        }
        if (skillArray[i].value == 'Skilled') {
            skillModifierArray[i].innerHTML = 2
        }
    }
}

function knowledgeChange() {
    for (i=0; i<knowledgeArray.length; i++) {
        if (knowledgeArray[i].value == 'Untrained') {
            knowledgeModifierArray[i].innerHTML = -4
        } 
        if (knowledgeArray[i].value == 'Proficient') {
            knowledgeModifierArray[i].innerHTML = 1
        }
        if (knowledgeArray[i].value == 'Skilled') {
            knowledgeModifierArray[i].innerHTML = 2
        }
    }
}

let talentsFirst = document.getElementById("prioritizeTalentsFirst")
let skillsFirst = document.getElementById("prioritizeSkillsFirst")
let knowledgesFirst = document.getElementById("prioritizeKnowledgesFirst")
let talentsSecond = document.getElementById("prioritizeTalentsSecond")
let skillsSecond = document.getElementById("prioritizeSkillsSecond")
let knowledgesSecond = document.getElementById("prioritizeKnowledgesSecond")
let talentsThird = document.getElementById("prioritizeTalentsThird")
let skillsThird = document.getElementById("prioritizeSkillsThird")
let knowledgesThird = document.getElementById("prioritizeKnowledgesThird")
let talentRanksLeft = document.getElementById("talentRanksLeft")
let skillRanksLeft = document.getElementById("skillRanksLeft")
let knowledgeRanksLeft = document.getElementById("knowledgeRanksLeft")

function assignAbilityPoints() {
    if (talentsFirst.checked == true) {
        talentRanksLeft.innerHTML = 10 
    } else if (talentsSecond.checked == true) {
        talentRanksLeft.innerHTML = 7
    } else if (talentsThird.checked == true) {
        talentRanksLeft.innerHTML = 4
    } else {
        talentRanksLeft.innerHTML = 0
    }
    if (skillsFirst.checked == true) {
        skillRanksLeft.innerHTML = 10 
    } else if (skillsSecond.checked == true) {
        skillRanksLeft.innerHTML = 7
    } else if (skillsThird.checked == true) {
        skillRanksLeft.innerHTML = 4
    } else {
        skillRanksLeft.innerHTML = 0
    }
    if (knowledgesFirst.checked == true) {
        knowledgeRanksLeft.innerHTML = 10 
    } else if (knowledgesSecond.checked == true) {
        knowledgeRanksLeft.innerHTML = 7
    } else if (knowledgesThird.checked == true) {
        knowledgeRanksLeft.innerHTML = 4
    }
    else {
        knowledgeRanksLeft.innerHTML = 0
    }
}

function prioritizeTalentsFirst() {
    if (talentsFirst.checked == true) {
        talentsSecond.disabled = true
        talentsThird.disabled = true
        skillsFirst.disabled = true
        knowledgesFirst.disabled = true
    } else {
        if (skillsSecond.checked == false && knowledgesSecond.checked == false) {
            talentsSecond.disabled = false
        }
        if (skillsThird.checked == false && knowledgesThird.checked == false) {
            talentsThird.disabled = false
        }
        if (skillsSecond.checked == false && skillsThird.checked == false) {
            skillsFirst.disabled = false
        }
        if (knowledgesSecond.checked == false && knowledgesThird.checked == false) {
            knowledgesFirst.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeTalentsSecond() {
    if (talentsSecond.checked == true) {
        talentsFirst.disabled = true
        talentsThird.disabled = true
        skillsSecond.disabled = true
        knowledgesSecond.disabled = true
    } else {
        if (skillsFirst.checked == false && knowledgesFirst.checked == false) {
            talentsFirst.disabled = false
        }
        if (skillsThird.checked == false && knowledgesThird.checked == false) {
            talentsThird.disabled = false
        }
        if (skillsFirst.checked == false && skillsThird.checked == false) {
            skillsSecond.disabled = false
        }
        if (knowledgesFirst.checked == false && knowledgesThird.checked == false) {
            knowledgesSecond.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeTalentsThird() {
    if (talentsThird.checked == true) {
        talentsFirst.disabled = true
        talentsSecond.disabled = true
        skillsThird.disabled = true
        knowledgesThird.disabled = true
    } else {
        if (skillsFirst.checked == false && knowledgesFirst.checked == false) {
            talentsFirst.disabled = false
        }
        if (skillsSecond.checked == false && knowledgesSecond.checked == false) {
            talentsSecond.disabled = false
        }
        if (skillsFirst.checked == false && skillsSecond.checked == false) {
            skillsThird.disabled = false
        }
        if (knowledgesFirst.checked == false && knowledgesSecond.checked == false) {
            knowledgesThird.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeSkillsFirst() {
    if (skillsFirst.checked == true) {
        skillsSecond.disabled = true
        skillsThird.disabled = true
        talentsFirst.disabled = true
        knowledgesFirst.disabled = true
    } else {
        if (talentsSecond.checked == false && knowledgesSecond.checked == false) {
            skillsSecond.disabled = false
        }
        if (talentsThird.checked == false && knowledgesThird.checked == false) {
            skillsThird.disabled = false
        }
        if (talentsSecond.checked == false && talentsThird.checked == false) {
            talentsFirst.disabled = false
        }
        if (knowledgesSecond.checked == false && knowledgesThird.checked == false) {
            knowledgesFirst.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeSkillsSecond() {
    if (skillsSecond.checked == true) {
        skillsFirst.disabled = true
        skillsThird.disabled = true
        talentsSecond.disabled = true
        knowledgesSecond.disabled = true
    } else {
        if (talentsFirst.checked == false && knowledgesFirst.checked == false) {
            skillsFirst.disabled = false
        }
        if (talentsThird.checked == false && knowledgesThird.checked == false) {
            skillsThird.disabled = false
        }
        if (talentsFirst.checked == false && talentsThird.checked == false) {
            talentsSecond.disabled = false
        }
        if (knowledgesFirst.checked == false && knowledgesThird.checked == false) {
            knowledgesSecond.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeSkillsThird() {
    if (skillsThird.checked == true) {
        skillsFirst.disabled = true
        skillsSecond.disabled = true
        talentsThird.disabled = true
        knowledgesThird.disabled = true
    } else {
        if (talentsFirst.checked == false && knowledgesFirst.checked == false) {
            skillsFirst.disabled = false
        }
        if (talentsSecond.checked == false && knowledgesSecond.checked == false) {
            skillsSecond.disabled = false
        }
        if (talentsFirst.checked == false && talentsSecond.checked == false) {
            talentsThird.disabled = false
        }
        if (knowledgesFirst.checked == false && knowledgesSecond.checked == false) {
            knowledgesThird.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeKnowledgesFirst() {
    if (knowledgesFirst.checked == true) {
        knowledgesSecond.disabled = true
        knowledgesThird.disabled = true
        talentsFirst.disabled = true
        skillsFirst.disabled = true
    } else {
        if (talentsSecond.checked == false && skillsSecond.checked == false) {
            knowledgesSecond.disabled = false
        }
        if (talentsThird.checked == false && skillsThird.checked == false) {
            knowledgesThird.disabled = false
        }
        if (talentsSecond.checked == false && talentsThird.checked == false) {
            talentsFirst.disabled = false
        }
        if (skillsSecond.checked == false && skillsThird.checked == false) {
            skillsFirst.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeKnowledgesSecond() {
    if (knowledgesSecond.checked == true) {
        knowledgesFirst.disabled = true
        knowledgesThird.disabled = true
        talentsSecond.disabled = true
        skillsSecond.disabled = true
    } else {
        if (talentsFirst.checked == false && skillsFirst.checked == false) {
            knowledgesFirst.disabled = false
        }
        if (talentsThird.checked == false && skillsThird.checked == false) {
            knowledgesThird.disabled = false
        }
        if (talentsFirst.checked == false && talentsThird.checked == false) {
            talentsSecond.disabled = false
        }
        if (skillsFirst.checked == false && skillsThird.checked == false) {
            skillsSecond.disabled = false
        }
    }
    assignAbilityPoints()
}

function prioritizeKnowledgesThird() {
    if (knowledgesThird.checked == true) {
        knowledgesFirst.disabled = true
        knowledgesSecond.disabled = true
        talentsThird.disabled = true
        skillsThird.disabled = true
    } else {
        if (talentsFirst.checked == false && skillsFirst.checked == false) {
            knowledgesFirst.disabled = false
        }
        if (talentsSecond.checked == false && skillsSecond.checked == false) {
            knowledgesSecond.disabled = false
        }
        if (talentsFirst.checked == false && talentsSecond.checked == false) {
            talentsThird.disabled = false
        }
        if (skillsFirst.checked == false && skillsSecond.checked == false) {
            skillsThird.disabled = false
        }
    }
    assignAbilityPoints()
}

// nerd variables
let nerds = document.getElementById("nerds")
let nerdTalentInput = document.getElementById("nerdTalentInput")
let nerdSkillInput = document.getElementById("nerdSkillInput")
let nerdFreebieTalentRadio = document.getElementById("nerdFreebieTalentRadio")
let nerdFreebieSkillRadio = document.getElementById("nerdFreebieSkillRadio")
let nerdFreebieKnowledgeRadio = document.getElementById("nerdFreebieKnowledgeRadio")
let nerdTalentsArray = document.getElementsByClassName("nerdTalent")
let nerdSkillsArray = document.getElementsByClassName("nerdSkill")
let nerdKnowledgesArray01 = document.getElementsByClassName("nerdKnowledge01")
let nerdKnowledgesArray02 = document.getElementsByClassName("nerdKnowledge02")
let nerdKnowledgesArray03 = document.getElementsByClassName("nerdKnowledge03")
let nerdKnowledgesArrays = [nerdKnowledgesArray01, nerdKnowledgesArray02, nerdKnowledgesArray03]
let nerdFreebieTalents = document.getElementsByClassName("nerdFreebieTalent")
let nerdFreebieSkills = document.getElementsByClassName("nerdFreebieSkill")
let nerdFreebieKnowledges = document.getElementsByClassName("nerdFreebieKnowledge")

// jock variables
let jocks = document.getElementById("jocks")
let jockTalentDiv = document.getElementById("jockTalentDiv")
let jockSkillDiv = document.getElementById("jockSkillDiv")
let jockTalentBlank = document.getElementById("jockTalentBlank")
let jockSkillBlank = document.getElementById("jockSkillBlank")
let jockFreebieTalentDiv = document.getElementById("jockFreebieTalentDiv")
let jockFreebieSkillDiv = document.getElementById("jockFreebieSkillDiv")
let jockFreebieKnowledgeDiv = document.getElementById("jockFreebieKnowledgeDiv")
let jockFreebieTalentBlank = document.getElementById("jockFreebieTalentBlank")
let jockFreebieSkillBlank = document.getElementById("jockFreebieSkillBlank")
let jockFreebieKnowledgeBlank = document.getElementById("jockFreebieKnowledgeBlank")
let jockSkillsArray01 = document.getElementsByClassName("jockSkill01")
let jockSkillsArray02 = document.getElementsByClassName("jockSkill02")
let jockFreebieTalentRadio = document.getElementById("jockFreebieTalentRadio")
let jockFreebieSkillRadio = document.getElementById("jockFreebieSkillRadio")
let jockFreebieKnowledgeRadio = document.getElementById("jockFreebieKnowledgeRadio")
let jockTalentsArray = document.getElementsByClassName("jockTalent")
let jockFreebieTalents = document.getElementsByClassName("jockFreebieTalent")
let jockFreebieSkills = document.getElementsByClassName("jockFreebieSkill")
let jockFreebieKnowledges = document.getElementsByClassName("jockFreebieKnowledge")
let jockAthletics = document.getElementById("jockAthletics")

// prep variables
let preps = document.getElementById("preps")
let prepFreebieTalentDiv = document.getElementById("prepFreebieTalentDiv")
let prepFreebieSkillDiv = document.getElementById("prepFreebieSkillDiv")
let prepFreebieKnowledgeDiv = document.getElementById("prepFreebieKnowledgeDiv")
let prepFreebieTalentBlank = document.getElementById("prepFreebieTalentBlank")
let prepFreebieSkillBlank = document.getElementById("prepFreebieSkillBlank")
let prepFreebieKnowledgeBlank = document.getElementById("prepFreebieKnowledgeBlank")
let prepFreebieTalentRadio = document.getElementById("prepFreebieTalentRadio")
let prepFreebieSkillRadio = document.getElementById("prepFreebieSkillRadio")
let prepFreebieKnowledgeRadio = document.getElementById("prepFreebieKnowledgeRadio")
let prepKnowledgesArray = document.getElementsByClassName("prepKnowledge")
let prepFreebie01Talents = document.getElementsByClassName("prepFreebie01Talent")
let prepFreebie02Talents = document.getElementsByClassName("prepFreebie02Talent")
let prepFreebie01Skills = document.getElementsByClassName("prepFreebie01Skill")
let prepFreebie02Skills = document.getElementsByClassName("prepFreebie02Skill")
let prepFreebie01Knowledges = document.getElementsByClassName("prepFreebie01Knowledge")
let prepFreebie02Knowledges = document.getElementsByClassName("prepFreebie02Knowledge")
let prepLeadership = document.getElementById("prepLeadership")
let prepSocializing = document.getElementById("prepSocializing")

// theaterKid variables
let theaterKids = document.getElementById("theaterKids")
let theaterKidKnowledgesArray = document.getElementsByClassName("theaterKidKnowledge")
let theaterKidFreebie01TalentRadio = document.getElementById("theaterKidFreebie01TalentRadio")
let theaterKidFreebie02TalentRadio = document.getElementById("theaterKidFreebie02TalentRadio")
let theaterKidFreebie03TalentRadio = document.getElementById("theaterKidFreebie03TalentRadio")
let theaterKidFreebie01Talents = document.getElementsByClassName("theaterKidFreebie01Talent")
let theaterKidFreebie02Talents = document.getElementsByClassName("theaterKidFreebie02Talent")
let theaterKidFreebie03Talents = document.getElementsByClassName("theaterKidFreebie03Talent")
let theaterKidFreebie01SkillRadio = document.getElementById("theaterKidFreebie01SkillRadio")
let theaterKidFreebie02SkillRadio = document.getElementById("theaterKidFreebie02SkillRadio")
let theaterKidFreebie03SkillRadio = document.getElementById("theaterKidFreebie03SkillRadio")
let theaterKidFreebie01Skills = document.getElementsByClassName("theaterKidFreebie01Skill")
let theaterKidFreebie02Skills = document.getElementsByClassName("theaterKidFreebie02Skill")
let theaterKidFreebie03Skills = document.getElementsByClassName("theaterKidFreebie03Skill")
let theaterKidFreebie01KnowledgeRadio = document.getElementById("theaterKidFreebie01KnowledgeRadio")
let theaterKidFreebie02KnowledgeRadio = document.getElementById("theaterKidFreebie02KnowledgeRadio")
let theaterKidFreebie03KnowledgeRadio = document.getElementById("theaterKidFreebie03KnowledgeRadio")
let theaterKidFreebie01Knowledges = document.getElementsByClassName("theaterKidFreebie01Knowledge")
let theaterKidFreebie02Knowledges = document.getElementsByClassName("theaterKidFreebie02Knowledge")
let theaterKidFreebie03Knowledges = document.getElementsByClassName("theaterKidFreebie03Knowledge")

// loner variables
let loners = document.getElementById("loners")
let lonerFreebieTalentDiv = document.getElementById("lonerFreebieTalentDiv")
let lonerFreebieSkillDiv = document.getElementById("lonerFreebieSkillDiv")
let lonerFreebieKnowledgeDiv = document.getElementById("lonerFreebieKnowledgeDiv")
let lonerFreebieTalentBlank = document.getElementById("lonerFreebieTalentBlank")
let lonerFreebieSkillBlank = document.getElementById("lonerFreebieSkillBlank")
let lonerFreebieKnowledgeBlank = document.getElementById("lonerFreebieKnowledgeBlank")
let lonerFreebieTalentRadio = document.getElementById("lonerFreebieTalentRadio")
let lonerFreebieSkillRadio = document.getElementById("lonerFreebieSkillRadio")
let lonerFreebieKnowledgeRadio = document.getElementById("lonerFreebieKnowledgeRadio")
let lonerKnowledgesArray = document.getElementsByClassName("lonerKnowledge")
let lonerFreebieTalents = document.getElementsByClassName("lonerFreebieTalent")
let lonerFreebieSkills = document.getElementsByClassName("lonerFreebieSkill")
let lonerFreebieKnowledges = document.getElementsByClassName("lonerFreebieKnowledge")
let lonerTalentsArray = document.getElementsByClassName("lonerTalent")
let lonerSkillsArray01 = document.getElementsByClassName("lonerSkill01")
let lonerSkillsArray02 = document.getElementsByClassName("lonerSkill02")
let lonerSkillsArray03 = document.getElementsByClassName("lonerSkill03")

// chameleon variables
let chameleons = document.getElementById("chameleons")
let chameleonTalent = document.getElementById("chameleonTalent")
let chameleonSkill = document.getElementById("chameleonSkill")
let chameleonKnowledge = document.getElementById("chameleonKnowledge")
let chameleonTalentsArray = document.getElementsByClassName("chameleonTalent")
let chameleonSkillsArray = document.getElementsByClassName("chameleonSkill")
let chameleonKnowledgesArray = document.getElementsByClassName("chameleonKnowledge")
let chameleonFreebie01Talents = document.getElementsByClassName("chameleonFreebie01Talent")
let chameleonFreebie02Talents = document.getElementsByClassName("chameleonFreebie02Talent")
let chameleonFreebie01Skills = document.getElementsByClassName("chameleonFreebie01Skill")
let chameleonFreebie02Skills = document.getElementsByClassName("chameleonFreebie02Skill")
let chameleonFreebie01Knowledges = document.getElementsByClassName("chameleonFreebie01Knowledge")
let chameleonFreebie02Knowledges = document.getElementsByClassName("chameleonFreebie02Knowledge")

// Ability table cells by class
let talentCells = document.getElementsByClassName("talentCells")
let talentModifierCells = document.getElementsByClassName("talentModifierCells")
let skillCells = document.getElementsByClassName("skillCells")
let skillModifierCells = document.getElementsByClassName("skillModifierCells")
let knowledgeCells = document.getElementsByClassName("knowledgeCells")
let knowledgeModifierCells = document.getElementsByClassName("knowledgeModifierCells")


function spendAbilityPoints() {
    assignAbilityPoints()
    let talentRanksLeftValue = talentRanksLeft.innerHTML
    talentRanksLeftValue = Number(talentRanksLeftValue)
    let skillRanksLeftValue = skillRanksLeft.innerHTML
    skillRanksLeftValue = Number(skillRanksLeftValue)
    let knowledgeRanksLeftValue = knowledgeRanksLeft.innerHTML
    knowledgeRanksLeftValue = Number(knowledgeRanksLeftValue)
    let talentProficientSpend = 0
    let talentSkilledSpend = 0
    let skillProficientSpend = 0
    let skillSkilledSpend = 0
    let knowledgeProficientSpend = 0
    let knowledgeSkilledSpend = 0
    for (i=0; i<talentUntrained.length; i++) {
        if (talentUntrained[i].selected == true) {
            talentModifierArray[i].innerHTML = 0
        }
    }
    for (i=0; i<talentProficient.length; i++) {
        if (talentProficient[i].selected == true) {
            talentModifierArray[i].innerHTML = 1
            talentProficientSpend += 1
        }
    }
    for (i=0; i<talentSkilled.length; i++) {
        if (talentSkilled[i].selected == true) {
            talentModifierArray[i].innerHTML = 2
            talentSkilledSpend += 2
        }
    }
    for (i=0; i<skillUntrained.length; i++) {
        if (skillUntrained[i].selected == true) {
            skillModifierArray[i].innerHTML = -2
        }
    }
    for (i=0; i<skillProficient.length; i++) {
        if (skillProficient[i].selected == true) {
            skillModifierArray[i].innerHTML = 1
            skillProficientSpend += 1
        }
    }
    for (i=0; i<skillSkilled.length; i++) {
        if (skillSkilled[i].selected == true) {
            skillModifierArray[i].innerHTML = 2
            skillSkilledSpend += 2
        }
    }
    for (i=0; i<knowledgeUntrained.length; i++) {
        if (knowledgeUntrained[i].selected == true) {
            knowledgeModifierArray[i].innerHTML = -4
        }
    }
    for (i=0; i<knowledgeProficient.length; i++) {
        if (knowledgeProficient[i].selected == true) {
            knowledgeModifierArray[i].innerHTML = 1
            knowledgeProficientSpend += 1
        }
    }
    for (i=0; i<knowledgeSkilled.length; i++) {
        if (knowledgeSkilled[i].selected == true) {
            knowledgeModifierArray[i].innerHTML = 2
            knowledgeSkilledSpend += 2
        }
    }
// integrating clique counters
    let talentCounter = 0
    let skillCounter = 0
    let knowledgeCounter = 0
// save # of Talents, Skills, and Knowledges gained from Clique to clique counters
    if (nerds.checked == true) {
        if (nerdTalentInput.checked == true) {
            for (i=0; i<nerdTalentsArray.length; i++) {
                if (nerdTalentsArray[i].selected == true) {
                    talentCounter += 1
                }
            }
        }
        if (nerdSkillInput.checked == true) {
            for (i=0; i<nerdSkillsArray.length; i++) {
                if (nerdSkillsArray[i].selected == true) {
                    skillCounter += 1
                }
            }
    
        } 
        for (i=0; i<nerdKnowledgesArray01.length; i++) {
            if (nerdKnowledgesArray01[i].selected == true) {
                knowledgeCounter += 1
            }
        }
        for (i=0; i<nerdKnowledgesArray02.length; i++) {
            if (nerdKnowledgesArray02[i].selected == true) {
                knowledgeCounter += 1
            }
        }
        for (i=0; i<nerdKnowledgesArray03.length; i++) {
            if (nerdKnowledgesArray03[i].selected == true) {
                knowledgeCounter += 1
            }
        }
        if (nerdFreebieTalentRadio.checked == true) {
            for (i=0; i<nerdFreebieTalents.length; i++) {
                if (nerdFreebieTalents[i].selected == true) {
                    talentCounter += 1
                }
            }
        }
        if (nerdFreebieSkillRadio.checked == true) {
            for (i=0; i<nerdFreebieSkills.length; i++) {
                if (nerdFreebieSkills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        if (nerdFreebieKnowledgeRadio.checked == true) {
            for (i=0; i<nerdFreebieKnowledges.length; i++) {
                if (nerdFreebieKnowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
    } else if (jocks.checked == true) {
        // correct for Athletics
        if (jockAthletics.value == 'Athletics') {
            talentCounter += 1
        }
        for (i=0; i<jockTalentsArray.length; i++) {
            if (jockTalentsArray[i].selected == true) {
                talentCounter += 1
            }
        }
        // correct for two jock skills
        for (i=0; i<jockSkillsArray01.length; i++) {
            if (jockSkillsArray01[i].selected == true) {
                skillCounter += 1
            }
        }
        for (i=0; i<jockSkillsArray02.length; i++) {
            if (jockSkillsArray02[i].selected == true) {
                skillCounter += 1
            }
        }
        // correct for jock freebies
        if (jockFreebieTalentRadio.checked == true) {
            for (i=0; i<jockFreebieTalents.length; i++) {
                if (jockFreebieTalents[i].selected == true) {
                    talentCounter += 1
                }
            }
        }
        if (jockFreebieSkillRadio.checked == true) {
            for (i=0; i<jockFreebieSkills.length; i++) {
                if (jockFreebieSkills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        if (jockFreebieKnowledgeRadio.checked == true) {
            for (i=0; i<jockFreebieKnowledges.length; i++) {
                if (jockFreebieKnowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
    } else if (preps.checked == true) {
        // correct for Leadership and Socializing
        if (prepLeadership.value == 'Leadership') {
            skillCounter += 1
        }
        if (prepSocializing.value == 'Socializing') {
            skillCounter += 1
        }
        // correct for prep knowledge
        for (i=0; i<prepKnowledgesArray.length; i++) {
            if (prepKnowledgesArray[i].selected == true) {
                knowledgeCounter += 1
            }
        }
        // correct for prep freebies
        if (prepFreebie01TalentRadio.checked == true) {
            for (i=0; i<prepFreebie01Talents.length; i++) {
                if (prepFreebie01Talents[i].selected == true) {
                    talentCounter += 1
                }
            }    
        }
        if (prepFreebie01SkillRadio.checked == true) {
            for (i=0; i<prepFreebie01Skills.length; i++) {
                if (prepFreebie01Skills[i].selected == true) {
                    skillCounter += 1
                }
            }    
        }
        if (prepFreebie01KnowledgeRadio.checked == true) {
            for (i=0; i<prepFreebie01Knowledges.length; i++) {
                if (prepFreebie01Skills[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
        if (prepFreebie02TalentRadio.checked == true) {
            for (i=0; i<prepFreebie02Talents.length; i++) {
                if (prepFreebie02Talents[i].selected == true) {
                    talentCounter += 1
                }
            }    
        }
        if (prepFreebie02SkillRadio.checked == true) {
            for (i=0; i<prepFreebie02Skills.length; i++) {
                if (prepFreebie02Skills[i].selected == true) {
                    skillCounter += 1
                }
            }    
        }
        if (prepFreebie02KnowledgeRadio.checked == true) {
            for (i=0; i<prepFreebie02Knowledges.length; i++) {
                if (prepFreebie02Knowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }            
        }
    } else if (theaterKids.checked == true) {
        // correct for either Acting or Music
        let theaterKidActing = document.getElementById("theaterKidActing")
        let theaterKidMusic = document.getElementById("theaterKidMusic")
        if (theaterKidActing.selected == true) {
            talentCounter += 1
        } 
        else if (theaterKidMusic.selected == true) {
            skillCounter += 1
        }
        // correct for theater kid knowledge
        for (i=0; i<theaterKidKnowledgesArray.length; i++) {
            if (theaterKidKnowledgesArray[i].selected == true) {
                knowledgeCounter += 1
            }
        }
        // correct for freebies
        if (theaterKidFreebie01TalentRadio.checked == true) {
            for (i=0; i<theaterKidFreebie01Talents.length; i++) {
                if (theaterKidFreebie01Talents[i].selected == true) {
                    talentCounter += 1
                }
            }    
        }
        else if (theaterKidFreebie01SkillRadio.checked == true) {
            for (i=0; i<theaterKidFreebie01Skills.length; i++) {
                if (theaterKidFreebie01Skills[i].selected == true) {
                    skillCounter += 1
                }
            }
        } 
        else if (theaterKidFreebie01KnowledgeRadio.checked == true) {
            for (i=0; i<theaterKidFreebie01Knowledges.length; i++) {
                if (theaterKidFreebie03Knowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }    
        }
        if (theaterKidFreebie02TalentRadio.checked == true) {
            for (i=0; i<theaterKidFreebie02Talents.length; i++) {
                if (theaterKidFreebie02Talents[i].selected == true) {
                    talentCounter += 1
                }
            }    
        } 
        else if (theaterKidFreebie02SkillRadio.checked == true) {
            for (i=0; i<theaterKidFreebie02Skills.length; i++) {
                if (theaterKidFreebie02Skills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        else if (theaterKidFreebie02KnowledgeRadio.checked == true) {
            for (i=0; i<theaterKidFreebie02Knowledges.length; i++) {
                if (theaterKidFreebie02Knowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
        if (theaterKidFreebie03TalentRadio.checked == true) {
            for (i=0; i<theaterKidFreebie03Talents.length; i++) {
                if (theaterKidFreebie03Talents[i].selected == true) {
                    talentCounter += 1
                }
            }    
        }
        else if (theaterKidFreebie03SkillRadio.checked == true) {
            for (i=0; i<theaterKidFreebie03Skills.length; i++) {
                if (theaterKidFreebie03Skills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        else if (theaterKidFreebie03KnowledgeRadio.checked == true) {
            for (i=0; i<theaterKidFreebie03Knowledges.length; i++) {
                if (theaterKidFreebie03Knowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
    } else if (loners.checked == true) {
        // correct for talent
        for (i=0; i<lonerTalentsArray.length; i++) {
            if (lonerTalentsArray[i].selected == true) {
                talentCounter += 1
            }    
        }
        //correct for 3 skills
        for (i=0; i<lonerSkillsArray01.length; i++) {
            if (lonerSkillsArray01[i].selected == true) {
                skillCounter += 1
            }
        }
        for (i=0; i<lonerSkillsArray02.length; i++) {
            if (lonerSkillsArray02[i].selected == true) {
                skillCounter += 1
            }
        }
        for (i=0; i<lonerSkillsArray03.length; i++) {
            if (lonerSkillsArray03[i].selected == true) {
                skillCounter += 1
            }
        }
        // correct for freebie
        if (lonerFreebieTalentRadio.checked == true) {
            for (i=0; i<lonerFreebieTalents.length; i++) {
                if (lonerFreebieTalents[i].selected == true) {
                    talentCounter += 1
                }
            }
        }
        else if (lonerFreebieSkillRadio.checked == true) {
            for (i=0; i<lonerFreebieSkills.length; i++) {
                if (lonerFreebieSkills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        else if (lonerFreebieKnowledgeRadio.checked == true) {
            for (i=0; i<lonerFreebieKnowledges.length; i++) {
                if (lonerFreebieKnowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
    } else if (chameleons.checked == true) {
        // correct for talent, skill, and knowledge
        for (i=0; i<chameleonTalentsArray.length; i++) {
            if (chameleonTalentsArray[i].selected == true) {
                talentCounter += 1
            }
        }
        for (i=0; i<chameleonSkillsArray.length; i++) {
            if (chameleonSkillsArray[i].selected == true) {
                skillCounter += 1
            }
        }
        for (i=0; i<chameleonKnowledgesArray.length; i++) {
            if (chameleonKnowledgesArray[i].selected == true) {
                knowledgeCounter += 1
            }
        }
        // correct for freebies
        if (chameleonFreebie01TalentRadio.checked == true) {
            for (i=0; i<chameleonFreebie01Talents.length; i++) {
                if (chameleonFreebie01Talents[i].selected == true) {
                    talentCounter += 1
                }
            }
        }
        else if (chameleonFreebie01SkillRadio.checked == true) {
            for (i=0; i<chameleonFreebie01Skills.length; i++) {
                if (chameleonFreebie01Skills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        else if (chameleonFreebie01KnowledgeRadio.checked == true) {
            for (i=0; i<chameleonFreebie01Knowledges.length; i++) {
                if (chameleonFreebie01Knowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
        if (chameleonFreebie02TalentRadio.checked == true) {
            for (i=0; i<chameleonFreebie02Talents.length; i++) {
                if (chameleonFreebie02Talents[i].selected == true) {
                    talentCounter += 1
                }
            }
        }
        else if (chameleonFreebie02SkillRadio.checked == true) {
            for (i=0; i<chameleonFreebie02Skills.length; i++) {
                if (chameleonFreebie02Skills[i].selected == true) {
                    skillCounter += 1
                }
            }
        }
        else if (chameleonFreebie02KnowledgeRadio.checked == true) {
            for (i=0; i<chameleonFreebie02Knowledges.length; i++) {
                if (chameleonFreebie02Knowledges[i].selected == true) {
                    knowledgeCounter += 1
                }
            }
        }
    }
    talentRanksLeft.innerHTML = talentRanksLeftValue - talentProficientSpend - talentSkilledSpend + talentCounter
    skillRanksLeft.innerHTML = skillRanksLeftValue - skillProficientSpend - skillSkilledSpend + skillCounter
    knowledgeRanksLeft.innerHTML = knowledgeRanksLeftValue - knowledgeProficientSpend - knowledgeSkilledSpend + knowledgeCounter
}

function abilityChange() {
    talentChange()
    skillChange()
    knowledgeChange()
    spendAbilityPoints()
}

let nerdTalentDiv = document.getElementById("nerdTalentDiv")
let nerdSkillDiv = document.getElementById("nerdSkillDiv")
let nerdTalentBlank = document.getElementById("nerdTalentBlank")
let nerdSkillBlank = document.getElementById("nerdSkillBlank")
let nerdFreebieTalentDiv = document.getElementById("nerdFreebieTalentDiv")
let nerdFreebieSkillDiv = document.getElementById("nerdFreebieSkillDiv")
let nerdFreebieKnowledgeDiv = document.getElementById("nerdFreebieKnowledgeDiv")
let nerdFreebieTalentBlank = document.getElementById("nerdFreebieTalentBlank")
let nerdFreebieSkillBlank = document.getElementById("nerdFreebieSkillBlank")
let nerdFreebieKnowledgeBlank = document.getElementById("nerdFreebieKnowledgeBlank")
let nerdAbilitiesApplied = document.getElementById("nerdAbilitiesApplied")

function presentNerdTalent() {
    nerdTalentDiv.style.display = "inline"
    nerdSkillDiv.style.display = "none"
    nerdSkillBlank.selected = true
}

function presentNerdSkill() {
    nerdTalentDiv.style.display = "none"
    nerdSkillDiv.style.display = "inline"
    nerdTalentBlank.selected = true
}

function presentNerdFreebieTalent() {
    nerdFreebieTalentDiv.style.display = "inline"
    nerdFreebieSkillDiv.style.display = "none"
    nerdFreebieKnowledgeDiv.style.display = "none"
    nerdFreebieSkillBlank.selected = true
    nerdFreebieKnowledgeBlank.selected = true
}

function presentNerdFreebieSkill() {
    nerdFreebieTalentDiv.style.display = "none"
    nerdFreebieSkillDiv.style.display = "inline"
    nerdFreebieKnowledgeDiv.style.display = "none"
    nerdFreebieTalentBlank.selected = true
    nerdFreebieKnowledgeBlank.selected = true
}

function presentNerdFreebieKnowledge() {
    nerdFreebieTalentDiv.style.display = "none"
    nerdFreebieSkillDiv.style.display = "none"
    nerdFreebieKnowledgeDiv.style.display = "inline"
    nerdFreebieTalentBlank.selected = true
    nerdFreebieSkillBlank.selected = true
}

let nerdMustChooseTalentOrSkillDiv = document.getElementById("nerdMustChooseTalentOrSkillDiv")
let nerdMustChooseThreeKnowledgesDiv = document.getElementById("nerdMustChooseThreeKnowledgesDiv")
let nerdMustChooseFreebieDiv = document.getElementById("nerdMustChooseFreebieDiv")
let nerdCannotStackFreebieDiv = document.getElementById("nerdCannotStackFreebieDiv")
let nerdNotificiationDivs = [nerdMustChooseTalentOrSkillDiv, nerdMustChooseThreeKnowledgesDiv, nerdMustChooseFreebieDiv, nerdCannotStackFreebieDiv]

function applyNerdAbilities() {
    resetAbilitiesToUntrained()
    // remove any previously displayed notices
    for (i=0; i<nerdNotificiationDivs.length; i++) {
        nerdNotificiationDivs[i].style.display = 'none'
    }
    // display notice to select either a Talent or a Skill
    let nerdTalent = document.getElementById("nerdTalent").value
    let nerdSkill = document.getElementById("nerdSkill").value
    if (nerdTalent == '' && nerdSkill == '') {
        nerdMustChooseTalentOrSkillDiv.style.display = 'block'
        return
    }
    // display notice to select 3 distinct knowledges
    let nerdKnowledge01 = document.getElementById("nerdKnowledge01").value
    let nerdKnowledge02 = document.getElementById("nerdKnowledge02").value
    let nerdKnowledge03 = document.getElementById("nerdKnowledge03").value
    if (nerdKnowledge01 == '' || nerdKnowledge02 == '' || nerdKnowledge03 == '') {
        nerdMustChooseThreeKnowledgesDiv.style.display = 'block'
        return
    } else if (nerdKnowledge01 == nerdKnowledge02 || nerdKnowledge01 == nerdKnowledge03 || nerdKnowledge02 == nerdKnowledge03) {
        nerdMustChooseThreeKnowledgesDiv.style.display = 'block'
        return
    }
    let nerdFreebieTalent = document.getElementById("nerdFreebieTalent").value
    let nerdFreebieSkill = document.getElementById("nerdFreebieSkill").value
    let nerdFreebieKnowledge = document.getElementById("nerdFreebieKnowledge").value
    if (nerdFreebieTalent == '' && nerdFreebieSkill == '' && nerdFreebieKnowledge == '') {
        nerdMustChooseFreebieDiv.style.display = 'block'
        return
    }
    if (nerdTalentInput.checked == true) { 
        for (i=0; i<nerdTalentsArray.length; i++) {
            if (nerdTalentsArray[i].selected == true) {
                if (talentUntrained[i].selected == true) {
                    talentProficient[i].selected = true
                    talentCells[i].style.backgroundColor = '#50C878'
                    talentModifierCells[i].style.backgroundColor = '#50C878'
                } 
            }
        }
    } else if (nerdSkillInput.checked == true) {
        for (i=0; i<nerdSkillsArray.length; i++) {
            if (nerdSkillsArray[i].selected == true) {
                if (skillUntrained[i].selected == true) {
                    skillProficient[i].selected = true
                    skillCells[i].style.backgroundColor = '#50C878'
                    skillModifierCells[i].style.backgroundColor = '#50C878'
                } 
            }
        }
        for (i=0; i<nerdTalentsArray.length; i++) {
            if (nerdTalentsArray[i].selected == true) {
                if (talentUntrained[i].selected == true) {
                    talentProficient[i].selected = true
                    talentCells[i].style.backgroundColor = '#50C878'
                    talentModifierCells[i].style.backgroundColor = '#50C878'
                } 
            }
        }
    }
    if (nerdKnowledgesArray01 == nerdKnowledgesArray02 || nerdKnowledgesArray01 == nerdKnowledgesArray03 || nerdKnowledgesArray02 == nerdKnowledgesArray03) {
        let nerdNoStackingKnowledgesDiv = document.getElementById("nerdNoStackingKnowledgesDiv")
        nerdNoStackingKnowledgesDiv.style.display = 'block'
        return
    }
    for (i=0; i<nerdKnowledgesArray01.length; i++) {
        if (nerdKnowledgesArray01[i].selected == true) {
            if (knowledgeUntrained[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            } 
        }
        if (nerdKnowledgesArray02[i].selected == true) {
            if (knowledgeUntrained[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            } 
        }
        if (nerdKnowledgesArray03[i].selected == true) {
            if (knowledgeUntrained[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            } 
        }
    }
    for (i=0; i<nerdFreebieTalents.length; i++) {
        if (nerdFreebieTalentRadio.checked == true) {
            if (nerdFreebieTalent == nerdTalent) {
                nerdCannotStackFreebieDiv.style.display = 'block'
                return
            }
            if (nerdFreebieTalents[i].selected == true) {
                if (talentUntrained[i].selected == true) {
                    talentProficient[i].selected = true
                    talentCells[i].style.backgroundColor = '#50C878'
                    talentModifierCells[i].style.backgroundColor = '#50C878'
                }
            }
        } else if (nerdFreebieSkillRadio.checked == true) {
            if (nerdFreebieSkill == nerdSkill) {
                nerdCannotStackFreebieDiv.style.display = 'block'
            }
            if (nerdFreebieSkills[i].selected == true) {
                if (skillUntrained[i].selected == true) {
                    skillProficient[i].selected = true
                    skillCells[i].style.backgroundColor = '#50C878'
                    skillModifierCells[i].style.backgroundColor = '#50C878'
                }
            }
        } else if (nerdFreebieKnowledgeRadio.checked == true) {
            if (nerdFreebieKnowledge == nerdKnowledge01 || nerdFreebieKnowledge == nerdKnowledge02 || nerdFreebieKnowledge == nerdKnowledge03) {
                nerdCannotStackFreebieDiv.style.display = 'block'
                return
            }
            if (nerdFreebieKnowledges[i].selected == true) {
                if (knowledgeUntrained[i].selected == true) {
                    knowledgeProficient[i].selected = true
                    knowledgeCells[i].style.backgroundColor = '#50C878'
                    knowledgeModifierCells[i].style.backgroundColor = '#50C878'
                }
            }
        }    
    }
    abilityChange()
    removeAbilityOptions()
}

function whiteOutAbilitiesCells() {
    for (i=0; i<10; i++) {
        if (talentSkilled[i].selected == true || talentProficient[i].selected == true) {
            talentUntrained[i].selected = true
            talentCells[i].style.backgroundColor = 'initial'
            talentModifierCells[i].style.backgroundColor = 'initial'
        }
    }
    for (i=0; i<10; i++) {
        if (skillSkilled[i].selected == true || skillProficient[i].selected == true) {
            skillUntrained[i].selected = true
            skillCells[i].style.backgroundColor = 'initial'
            skillModifierCells[i].style.backgroundColor = 'initial'
        }
    }
    for (i=0; i<10; i++) {
        if (knowledgeSkilled[i].selected == true || knowledgeProficient[i].selected == true) {
            knowledgeUntrained[i].selected= true
            knowledgeCells[i].style.backgroundColor = 'initial'
            knowledgeModifierCells[i].style.backgroundColor = 'initial'
        }
    }
}

function resetNerdAbilities() {
    whiteOutAbilitiesCells()
    let nerdTalentBlank = document.getElementById("nerdTalentBlank")
    let nerdSkillBlank = document.getElementById("nerdSkillBlank")
    let nerdKnowledgeBlank01 = document.getElementById("nerdKnowledgeBlank01")
    let nerdKnowledgeBlank02 = document.getElementById("nerdKnowledgeBlank02")
    let nerdKnowledgeBlank03 = document.getElementById("nerdKnowledgeBlank03")
    let nerdFreebieTalentBlank = document.getElementById("nerdFreebieTalentBlank")
    let nerdFreebieSkillBlank = document.getElementById("nerdFreebieSkillBlank")
    let nerdFreebieKnowledgeBlank = document.getElementById("nerdFreebieKnowledgeBlank")
    let nerdBlanks = [nerdTalentBlank, nerdSkillBlank, nerdKnowledgeBlank01, nerdKnowledgeBlank02, nerdKnowledgeBlank03, nerdFreebieTalentBlank, nerdFreebieSkillBlank, nerdFreebieKnowledgeBlank]
    for (i=0; i<nerdBlanks.length; i++) {
        nerdBlanks[i].selected = true
    }
    abilityChange()
    reAddAbilityOptions()
}    

function presentJockFreebieTalent() {
    jockFreebieTalentDiv.style.display = "inline"
    jockFreebieSkillDiv.style.display = "none"
    jockFreebieKnowledgeDiv.style.display = "none"
    jockFreebieSkillBlank.selected = true
    jockFreebieKnowledgeBlank.selected = true
}

function presentJockFreebieSkill() {
    jockFreebieTalentDiv.style.display = "none"
    jockFreebieSkillDiv.style.display = "inline"
    jockFreebieKnowledgeDiv.style.display = "none"
    jockFreebieTalentBlank.selected = true
    jockFreebieKnowledgeBlank.selected = true
}

function presentJockFreebieKnowledge() {
    jockFreebieTalentDiv.style.display = "none"
    jockFreebieSkillDiv.style.display = "none"
    jockFreebieKnowledgeDiv.style.display = "inline"
    jockFreebieTalentBlank.selected = true
    jockFreebieSkillBlank.selected = true
}

let jockMustChooseAthleticsDiv = document.getElementById("jockMustChooseAthleticsDiv")
let jockCannotStackAthleticsDiv = document.getElementById("jockCannotStackAthleticsDiv")
let jockMustChooseFreebieDiv = document.getElementById("jockMustChooseFreebieDiv")
let jockCannotStackFreebieDiv = document.getElementById("jockCannotStackFreebieDiv")
let jockNotificiationDivs = [jockMustChooseAthleticsDiv, jockCannotStackAthleticsDiv, jockMustChooseFreebieDiv, jockCannotStackFreebieDiv]

function applyJockAbilities() {
    resetAbilitiesToUntrained()
    // remove any previously displayed notices
    for (i=0; i<jockNotificiationDivs.length; i++) {
        jockNotificiationDivs[i].style.display = 'none'
    }
    let athleticsProficient = document.getElementById("athletics01")
    athleticsProficient.selected = true
    // display notices to select Abilities correctly
    let jockTalent = document.getElementById("jockTalent").value
    let jockSkill01 = document.getElementById("jockSkill01").value
    let jockSkill02 = document.getElementById("jockSkill02").value    
        // choose Athletics
    if (jockAthletics.value == '') {
        jockMustChooseAthleticsDiv.style.display = 'block'
    }
        // choose a Talent, but not Athletics
    if (jockTalent == '') {
        jockCannotStackAthleticsDiv.style.display = 'block'
        return
    }
    if (jockAthletics == jockTalent) {
        jockCannotStackAthleticsDiv.style.display = 'block'
        return
    }
    // display notice to select two different Skills
    if (jockSkill01 == '' || jockSkill02 == '' || jockSkill01 == jockSkill02) {
        jockMustChooseTwoSkillsDiv.style.display = 'block'
        return
    }
    // display notice to select a Freebie
    let jockFreebieTalent = document.getElementById("jockFreebieTalents").value
    let jockFreebieSkill = document.getElementById("jockFreebieSkills").value
    let jockFreebieKnowledge = document.getElementById("jockFreebieKnowledges").value
    if (jockFreebieTalent == '' && jockFreebieSkill == '' && jockFreebieKnowledge == '') {
        jockMustChooseFreebieDiv.style.display = 'block'
        return
    }
    if (jockFreebieTalent == jockTalent || jockFreebieSkill == jockSkill01 || jockFreebieSkill == jockSkill02) {
        jockCannotStackFreebieDiv.style.display = 'block'
        return
    }
    // apply selections
    if (jockAthletics.value == 'Athletics') {
        let athleticsCell = document.getElementById("athleticsCell")
        let athleticsModifier = document.getElementById("athleticsModifier")
        athleticsCell.style.backgroundColor = '#50C878'
        athleticsModifier.style.backgroundColor = '#50C878'
    }

    for (i=0; i<jockTalentsArray.length; i++) {
        if (jockTalentsArray[i].selected == true) {
            talentProficient[i].selected = true
            talentCells[i].style.backgroundColor = '#50C878'
            talentModifierCells[i].style.backgroundColor = '#50C878'
        }
    }    
    for (i=0; i<jockSkillsArray01.length; i++) {
        if (jockSkillsArray01[i].selected == true) {
            skillProficient[i].selected = true
            skillCells[i].style.backgroundColor = '#50C878'
            skillModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    for (i=0; i<jockSkillsArray02.length; i++) {
        if (jockSkillsArray02[i].selected == true) {
            skillProficient[i].selected = true
            skillCells[i].style.backgroundColor = '#50C878'
            skillModifierCells[i].style.backgroundColor = '#50C878'
        }
    }

    for (i=0; i<jockFreebieTalents.length; i++) {
        if (jockFreebieTalentRadio.checked == true) {
            if (jockFreebieTalents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        } else if (jockFreebieSkillRadio.checked == true) {
            if (jockFreebieSkills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }    
        } else if (jockFreebieKnowledgeRadio.checked == true) {
            if (jockFreebieKnowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }    
        }
    }
    abilityChange()
    removeAbilityOptions()
}

function resetJockAbilities() {
    whiteOutAbilitiesCells()
    let jockAthleticsBlank = document.getElementById("jockAthleticsBlank")
    let jockTalentBlank = document.getElementById("jockTalentBlank")
    let jockSkillBlank01 = document.getElementById("jockSkillBlank01")
    let jockSkillBlank02 = document.getElementById("jockSkillBlank02")
    let jockFreebieTalentBlank = document.getElementById("jockFreebieTalentBlank")
    let jockFreebieSkillBlank = document.getElementById("jockFreebieSkillBlank")
    let jockFreebieKnowledgeBlank = document.getElementById("jockFreebieKnowledgeBlank")

    let jockBlanks = [jockAthleticsBlank, jockTalentBlank, jockSkillBlank01, jockSkillBlank02, jockFreebieTalentBlank, jockFreebieSkillBlank, jockFreebieKnowledgeBlank]
    for (i=0; i<jockBlanks.length; i++) {
        jockBlanks[i].selected = true        
    }
    abilityChange()
    reAddAbilityOptions()
}    

let prepMustSelectLeadershipDiv = document.getElementById("prepMustSelectLeadershipDiv")
let prepMustSelectSocializingDiv = document.getElementById("prepMustSelectSocializingDiv")
let prepMustSelectKnowledgeDiv = document.getElementById("prepMustSelectKnowledgeDiv")
let prepMustHaveFirstFreebieDiv = document.getElementById("prepMustHaveFirstFreebieDiv")
let prepMustHaveSecondFreebieDiv = document.getElementById("prepMustHaveSecondFreebieDiv")
let prepCannotStackFreebiesDiv = document.getElementById("prepCannotStackFreebiesDiv")
let prepCannotStackSetAbilitiesDiv = document.getElementById("prepCannotStackSetAbilitiesDiv")
let prepMustHaveDifferentFreebiesDiv = document.getElementById("prepMustHaveDifferentFreebiesDiv")
let prepNotificationDivs = [prepMustSelectLeadershipDiv, prepMustSelectSocializingDiv, prepMustSelectKnowledgeDiv, prepMustHaveFirstFreebieDiv, prepMustHaveSecondFreebieDiv, prepCannotStackFreebiesDiv, prepCannotStackSetAbilitiesDiv, prepMustHaveDifferentFreebiesDiv]

function applyPrepAbilities() {
    resetAbilitiesToUntrained()
    // remove any previously-displayed notices
    for (i=0; i<prepNotificationDivs.length; i++) {
        prepNotificationDivs[i].style.display = 'none'
    }
    // proficiency in Leadership and Socializing
    let leadershipProficient = document.getElementById("leadership01")
    leadershipProficient.selected = true
    let socializingProficient = document.getElementById("socializing01")
    socializingProficient.selected = true
  
    // declarations
    let prepFreebie01TalentRadio = document.getElementById("prepFreebie01TalentRadio")
    let prepFreebie01SkillRadio = document.getElementById("prepFreebie01SkillRadio")
    let prepFreebie01KnowledgeRadio = document.getElementById("prepFreebie01KnowledgeRadio")
    let prepFreebie02TalentRadio = document.getElementById("prepFreebie02TalentRadio")
    let prepFreebie02SkillRadio = document.getElementById("prepFreebie02SkillRadio")
    let prepFreebie02KnowledgeRadio = document.getElementById("prepFreebie02KnowledgeRadio")
    let prepMustHaveFirstFreebieDiv = document.getElementById("prepMustHaveFirstFreebieDiv")
    let prepMustHaveSecondFreebieDiv = document.getElementById("prepMustHaveSecondFreebieDiv")
    let prepFreebie01Talents = document.getElementsByClassName("prepFreebie01Talent")
    let prepFreebie02Talents = document.getElementsByClassName("prepFreebie02Talent")
    let prepFreebie01Skills = document.getElementsByClassName("prepFreebie01Skill")
    let prepFreebie02Skills = document.getElementsByClassName("prepFreebie02Skill")
    let prepKnowledge01 = document.getElementById("prepKnowledge01").value

    // post notices for unused boxes
    if (prepLeadership.value == '') {
        prepMustSelectLeadershipDiv.style.display = 'block'
        return
    }
    if (prepSocializing.value == '') {
        prepMustSelectSocializingDiv.style.display = 'block'
        return
    }
    if (prepKnowledge01 == '') {
        prepMustSelectKnowledgeDiv.style.display = 'block'
        return
    }
    if (prepFreebie01TalentRadio.checked == false && prepFreebie01SkillRadio.checked == false && prepFreebie01KnowledgeRadio.checked == false) {
        prepMustHaveFirstFreebieDiv.style.display = 'block'
        return
    }
    if (prepFreebie02TalentRadio.checked == false && prepFreebie02SkillRadio.checked == false && prepFreebie02KnowledgeRadio.checked == false) {
        prepMustHaveSecondFreebieDiv.style.display = 'block'
        return
    }
    if (prepFreebie01TalentRadio.checked == true && prepFreebie02TalentRadio.checked == true) {
        for (i=0; i<prepFreebie01Talents.length; i++) {
            if (prepFreebie01Talents[i].selected == true && prepFreebie02Talents[i].selected) {
                prepCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (prepFreebie01SkillRadio.checked == true && prepFreebie02SkillRadio.checked == true) {
        for (i=0; i<prepFreebie01Skills.length; i++) {
            if (prepFreebie01Skills[i].selected == true && prepFreebie02Skills[i].selected) {
                prepCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (prepFreebie01KnowledgeRadio.checked == true && prepFreebie02KnowledgeRadio.checked == true) {
        for (i=0; i<prepFreebie01Knowledges.length; i++) {
            if (prepFreebie01Knowledges[i].selected == true && prepFreebie02Knowledges[i].selected) {
                prepCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    for (i=0; i<prepFreebie01Skills.length; i++) {
        if (prepFreebie01Skills[i].selected == true) {
            if (prepFreebie01Skills[i].value == 'Leadership' || prepFreebie01Skills[i].value == 'Socializing') {
                prepCannotStackFreebiesDiv.style.display = 'block'
                return        
            }
        }
    }
    for (i=0; i<prepFreebie02Skills.length; i++) {
        if (prepFreebie02Skills[i].selected == true) {
            if (prepFreebie02Skills[i].value == 'Leadership' || prepFreebie02Skills[i].value == 'Socializing') {
                prepCannotStackFreebiesDiv.style.display = 'block'
                return        
            }
        }
    }
    // credit selections and color relevant cells
    if (prepLeadership.value == 'Leadership') {
        let leadershipCell = document.getElementById("leadershipCell")
        let leadershipModifier = document.getElementById("leadershipModifier")
        leadershipCell.style.backgroundColor = '#50C878'
        leadershipModifier.style.backgroundColor = '#50C878'
    }
    if (prepSocializing.value == 'Socializing') {
        let socializingCell = document.getElementById("socializingCell")
        let socializingModifier = document.getElementById("socializingModifier")
        socializingCell.style.backgroundColor = '#50C878'
        socializingModifier.style.backgroundColor = '#50C878'
    }
    for (i=0; i<knowledgeStringArray.length; i++) {
        if (prepKnowledge01 == knowledgeStringArray[i]) {
            knowledgeProficient[i].selected = true
            knowledgeCells[i].style.backgroundColor = '#50C878'
            knowledgeModifierCells[i].style.backgroundColor = '#50C878'
        }

    }
    if (prepFreebie01TalentRadio.checked == true) {
        for (i=0; i<prepFreebie01Talents.length; i++) {
            if (prepFreebie01Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (prepFreebie02TalentRadio.checked == true) {
        for (i=0; i<prepFreebie02Talents.length; i++) {
            if (prepFreebie02Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878' 
            }
        }
    }
    if (prepFreebie01SkillRadio.checked == true) {
        for (i=0; i<prepFreebie01Skills.length; i++) {
            if (prepFreebie01Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            } 
        }
    }
    if (prepFreebie02SkillRadio.checked == true) {
        for (i=0; i<prepFreebie02Skills.length; i++) {
            if (prepFreebie02Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878' 
            }
        }
    }

    if (prepFreebie01KnowledgeRadio.checked == true) {
        for (i=0; i<prepFreebie01Knowledges.length; i++) {
            if (prepFreebie01Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            } 
        }
    }
    if (prepFreebie02KnowledgeRadio.checked == true) {
        for (i=0; i<prepFreebie02Knowledges.length; i++) {
            if (prepFreebie02Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878' 
            }
        }
    }
    abilityChange()
    removeAbilityOptions()
}

function resetPrepAbilities() {
    whiteOutAbilitiesCells()
    let prepLeadershipBlank = document.getElementById("prepLeadershipBlank")
    let prepSocializingBlank = document.getElementById("prepSocializingBlank")
    let prepKnowledgeBlank = document.getElementById("prepKnowledgeBlank")
    let prepFreebie01TalentBlank = document.getElementById("prepFreebie01TalentBlank")
    let prepFreebie01SkillSelect = document.getElementById("prepFreebie01SkillSelect")
    let prepFreebie01KnowledgeSelect = document.getElementById("prepFreebie01KnowledgeSelect")
    let prepFreebie02TalentBlank = document.getElementById("prepFreebie02TalentBlank")
    let prepFreebie02SkillBlank = document.getElementById("prepFreebie02SkillBlank")
    let prepFreebie02KnowledgeBlank = document.getElementById("prepFreebie02KnowledgeBlank")
    let prepBlanks = [prepLeadershipBlank, prepSocializingBlank, prepKnowledgeBlank, prepFreebie01TalentBlank, prepFreebie01SkillSelect, prepFreebie01KnowledgeSelect, prepFreebie02TalentBlank, prepFreebie02SkillBlank, prepFreebie02KnowledgeBlank]
    for (i=0; i<prepBlanks.length; i++) {
        prepBlanks[i].selected = true
    }
    let prepFreebie01TalentRadio = document.getElementById("prepFreebie01TalentRadio")
    let prepFreebie01SkillRadio = document.getElementById("prepFreebie01SkillRadio")
    let prepFreebie01KnowledgeRadio = document.getElementById("prepFreebie01KnowledgeRadio")
    let prepFreebie02TalentRadio = document.getElementById("prepFreebie02TalentRadio")
    let prepFreebie02SkillRadio = document.getElementById("prepFreebie02SkillRadio")
    let prepFreebie02KnowledgeRadio = document.getElementById("prepFreebie02KnowledgeRadio")
    let prepRadioButtonsArray = [prepFreebie01TalentRadio, prepFreebie01SkillRadio, prepFreebie01KnowledgeRadio, prepFreebie02TalentRadio, prepFreebie02SkillRadio, prepFreebie02KnowledgeRadio]
    for (i=0; i<prepRadioButtonsArray.length; i++) {
        if (prepRadioButtonsArray[i].checked == true) {
            prepRadioButtonsArray[i].checked = false
        }
    }
    abilityChange()
    reAddAbilityOptions()       
}

// declarations
let theaterKidKnowledge01 = document.getElementById("theaterKidKnowledge01")
let theaterKidActingOrMusic = document.getElementById("theaterKidActingOrMusic") 
let theaterKidFreebieRadioArray = [theaterKidFreebie01TalentRadio, theaterKidFreebie01SkillRadio, theaterKidFreebie01KnowledgeRadio, theaterKidFreebie02TalentRadio, theaterKidFreebie02SkillRadio, theaterKidFreebie02KnowledgeRadio, theaterKidFreebie03TalentRadio, theaterKidFreebie03SkillRadio, theaterKidFreebie03KnowledgeRadio]
let theaterKidFreebie01TalentSelect = document.getElementById("theaterKidFreebie01TalentSelect")
let theaterKidFreebie01SkillSelect = document.getElementById("theaterKidFreebie01SkillSelect")
let theaterKidFreebie01KnowledgeSelect = document.getElementById("theaterKidFreebie01KnowledgeSelect")
let theaterKidFreebie02TalentSelect = document.getElementById("theaterKidFreebie02TalentSelect")
let theaterKidFreebie02SkillSelect = document.getElementById("theaterKidFreebie02SkillSelect")
let theaterKidFreebie02KnowledgeSelect = document.getElementById("theaterKidFreebie02KnowledgeSelect")
let theaterKidFreebie03TalentSelect = document.getElementById("theaterKidFreebie03TalentSelect")
let theaterKidFreebie03SkillSelect = document.getElementById("theaterKidFreebie03SkillSelect")
let theaterKidFreebie03KnowledgeSelect = document.getElementById("theaterKidFreebie03KnowledgeSelect")
let theaterKidFreebieSelectArray = [theaterKidFreebie01TalentSelect, theaterKidFreebie01SkillSelect, theaterKidFreebie01KnowledgeSelect, theaterKidFreebie02TalentSelect, theaterKidFreebie02SkillSelect, theaterKidFreebie02KnowledgeSelect, theaterKidFreebie03TalentSelect, theaterKidFreebie03SkillSelect, theaterKidFreebie03KnowledgeSelect]
let theaterKidMustSelectActingOrMusicDiv = document.getElementById("theaterKidMustSelectActingOrMusicDiv")
let theaterKidMustSelectKnowledgeDiv = document.getElementById("theaterKidMustSelectKnowledgeDiv")
let theaterKidMustHaveFreebiesDiv = document.getElementById("theaterKidMustHaveFreebiesDiv")
let theaterKidCannotStackFreebiesDiv = document.getElementById("theaterKidCannotStackFreebiesDiv")
let theaterKidNotificationDivs = [theaterKidMustSelectActingOrMusicDiv, theaterKidMustSelectKnowledgeDiv, theaterKidMustHaveFreebiesDiv, theaterKidCannotStackFreebiesDiv]

function applyTheaterKidAbilities() {
    resetAbilitiesToUntrained()
    // remove any previously-displayed notices
    for (i=0; i<theaterKidNotificationDivs.length; i++) {
        theaterKidNotificationDivs[i].style.display = 'none'
    }
    // must choose either Acting or Music
    if (theaterKidActingOrMusic.value == '') {
        theaterKidMustSelectActingOrMusicDiv.style.display = 'block'
        return
    }
    // must choose a Knowledge
    if (theaterKidKnowledge01.value == '') {
        theaterKidMustSelectKnowledgeDiv.style.display = 'block'
        return
    }
    // must check something for Freebie01
    if (theaterKidFreebie01TalentRadio.checked == false && theaterKidFreebie01SkillRadio.checked == false && theaterKidFreebie01KnowledgeRadio.checked == false) {
        theaterKidMustHaveFreebiesDiv.style.display = 'block'
        return
    }
    // must check something for Freebie02
    if (theaterKidFreebie02TalentRadio.checked == false && theaterKidFreebie02SkillRadio.checked == false && theaterKidFreebie02KnowledgeRadio.checked == false) {
        theaterKidMustHaveFreebiesDiv.style.display = 'block'
        return
    }
    // must check something for Freebie03
    if (theaterKidFreebie03TalentRadio.checked == false && theaterKidFreebie03SkillRadio.checked == false && theaterKidFreebie03KnowledgeRadio.checked == false) {
        theaterKidMustHaveFreebiesDiv.style.display = 'block'
        return
    }
    // can't stack Freebies
    if (theaterKidFreebie01TalentRadio.checked == true && theaterKidFreebie02TalentRadio == true) {
        for (i=0; i<theaterKidFreebie01Talents.length; i++) {
            if (theaterKidFreebie01Talents[i].selected == true && theaterKidFreebie02Talents[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie01TalentRadio.checked == true && theaterKidFreebie03TalentRadio == true) {
        for (i=0; i<theaterKidFreebie01Talents.length; i++) {
            if (theaterKidFreebie01Talents[i].selected == true && theaterKidFreebie03Talents[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie02TalentRadio.checked == true && theaterKidFreebie03TalentRadio == true) {
        for (i=0; i<theaterKidFreebie02Talents.length; i++) {
            if (theaterKidFreebie02Talents[i].selected == true && theaterKidFreebie03Talents[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie01SkillRadio.checked == true && theaterKidFreebie02SkillRadio == true) {
        for (i=0; i<theaterKidFreebie01Skills.length; i++) {
            if (theaterKidFreebie01Skills[i].selected == true && theaterKidFreebie02Skills[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie01SkillRadio.checked == true && theaterKidFreebie03SkillRadio == true) {
        for (i=0; i<theaterKidFreebie01Skills.length; i++) {
            if (theaterKidFreebie01Skills[i].selected == true && theaterKidFreebie03Skills[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie02SkillRadio.checked == true && theaterKidFreebie03SkillRadio == true) {
        for (i=0; i<theaterKidFreebie02Skills.length; i++) {
            if (theaterKidFreebie02Skills[i].selected == true && theaterKidFreebie03Skills[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie01KnowledgeRadio.checked == true && theaterKidFreebie02KnowledgeRadio == true) {
        for (i=0; i<theaterKidFreebie01Knowledges.length; i++) {
            if (theaterKidFreebie01Knowledges[i].selected == true && theaterKidFreebie02Knowledges[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie01KnowledgeRadio.checked == true && theaterKidFreebie03KnowledgeRadio == true) {
        for (i=0; i<theaterKidFreebie01Knowledges.length; i++) {
            if (theaterKidFreebie01Knowledges[i].selected == true && theaterKidFreebie03Knowledges[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    if (theaterKidFreebie02KnowledgeRadio.checked == true && theaterKidFreebie03KnowledgeRadio == true) {
        for (i=0; i<theaterKidFreebie02Knowledges.length; i++) {
            if (theaterKidFreebie02Knowledges[i].selected == true && theaterKidFreebie03Knowledges[i].selected) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return    
            } 
        }
    }
    // must make a selection for each checked Freebie
    for (i=0; i<theaterKidFreebieRadioArray.length; i++) {
        if (theaterKidFreebieRadioArray[i].checked == true) {
            if (theaterKidFreebieSelectArray[i].value == '') {
                theaterKidMustHaveFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    // Freebies cannot match Acting/Music choice or Knowledge01
    let theaterKidFreebieTalentRadioArray = [theaterKidFreebie01TalentRadio, theaterKidFreebie02TalentRadio, theaterKidFreebie03TalentRadio]
    let theaterKidFreebieTalentSelectArray = [theaterKidFreebie01TalentSelect, theaterKidFreebie02TalentSelect, theaterKidFreebie03TalentSelect]
    for (i=0; i<theaterKidFreebieTalentRadioArray.length; i++) {
        if (theaterKidFreebieTalentRadioArray[i].checked == true) {
            if (theaterKidActingOrMusic.value == theaterKidFreebieTalentSelectArray[i].value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    let theaterKidFreebieSkillRadioArray = [theaterKidFreebie01SkillRadio, theaterKidFreebie02SkillRadio, theaterKidFreebie03SkillRadio]
    let theaterKidFreebieSkillSelectArray = [theaterKidFreebie01SkillSelect, theaterKidFreebie02SkillSelect, theaterKidFreebie03SkillSelect]
    for (i=0; i<theaterKidFreebieSkillRadioArray.length; i++) {
        if (theaterKidFreebieSkillRadioArray[i].checked == true) {
            if (theaterKidActingOrMusic.value == theaterKidFreebieSkillSelectArray[i].value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    let theaterKidFreebieKnowledgeRadioArray = [theaterKidFreebie01KnowledgeRadio, theaterKidFreebie02KnowledgeRadio, theaterKidFreebie03KnowledgeRadio]
    let theaterKidFreebieKnowledgeSelectArray = [theaterKidFreebie01KnowledgeSelect, theaterKidFreebie02KnowledgeSelect, theaterKidFreebie03KnowledgeSelect]
    for (i=0; i<theaterKidFreebieKnowledgeRadioArray.length; i++) {
        if (theaterKidFreebieKnowledgeRadioArray[i].checked == true) {
            if (theaterKidKnowledge01.value == theaterKidFreebieKnowledgeSelectArray.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    // cannot stack freebies
    if (theaterKidFreebie01TalentRadio.checked == true && theaterKidFreebie02TalentRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01TalentSelect.length; i++) {
            if (theaterKidFreebie01TalentSelect.value == theaterKidFreebie02TalentSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie01TalentRadio.checked == true && theaterKidFreebie03TalentRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01TalentSelect.length; i++) {
            if (theaterKidFreebie01TalentSelect.value == theaterKidFreebie03TalentSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie02TalentRadio.checked == true && theaterKidFreebie03TalentRadio.checked == true) {
        for (i=0; i<theaterKidFreebie02TalentSelect.length; i++) {
            if (theaterKidFreebie02TalentSelect.value == theaterKidFreebie03TalentSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie01SkillRadio.checked == true && theaterKidFreebie02SkillRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01SkillSelect.length; i++) {
            if (theaterKidFreebie01SkillSelect.value == theaterKidFreebie02SkillSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie01SkillRadio.checked == true && theaterKidFreebie03SkillRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01SkillSelect.length; i++) {
            if (theaterKidFreebie01SkillSelect.value == theaterKidFreebie03SkillSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie02SkillRadio.checked == true && theaterKidFreebie03SkillRadio.checked == true) {
        for (i=0; i<theaterKidFreebie02SkillSelect.length; i++) {
            if (theaterKidFreebie02SkillSelect.value == theaterKidFreebie03SkillSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }

    if (theaterKidFreebie01KnowledgeRadio.checked == true && theaterKidFreebie02KnowledgeRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01KnowledgeSelect.length; i++) {
            if (theaterKidFreebie01KnowledgeSelect.value == theaterKidFreebie02KnowledgeSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie01KnowledgeRadio.checked == true && theaterKidFreebie03KnowledgeRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01KnowledgeSelect.length; i++) {
            if (theaterKidFreebie01KnowledgeSelect.value == theaterKidFreebie03KnowledgeSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    if (theaterKidFreebie02KnowledgeRadio.checked == true && theaterKidFreebie03KnowledgeRadio.checked == true) {
        for (i=0; i<theaterKidFreebie02KnowledgeSelect.length; i++) {
            if (theaterKidFreebie02KnowledgeSelect.value == theaterKidFreebie03KnowledgeSelect.value) {
                theaterKidCannotStackFreebiesDiv.style.display = 'block'
                return
            }
        }
    }
    // apply selections
    if (theaterKidActingOrMusic.value == 'Acting') {
        let actingProficient = document.getElementById("acting01")
        actingProficient.selected = true
        let actingCell = document.getElementById("actingCell")
        let actingModifier = document.getElementById("actingModifier")
        actingCell.style.backgroundColor = '#50C878'
        actingModifier.style.backgroundColor = '#50C878'
    } 
    if (theaterKidActingOrMusic.value == 'Music') {
        let musicProficient = document.getElementById("music01")
        musicProficient.selected = true
        let musicCell = document.getElementById("musicCell")
        let musicModifier = document.getElementById("musicModifier")
        musicCell.style.backgroundColor = '#50C878'
        musicModifier.style.backgroundColor = '#50C878'
    } 
    for (i=0; i<knowledgeStringArray.length; i++) {
        if (theaterKidKnowledge01.value == knowledgeStringArray[i]) {
            knowledgeProficient[i].selected = true
            knowledgeCells[i].style.backgroundColor = '#50C878'
            knowledgeModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    if (theaterKidFreebie01TalentRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01Talents.length; i++) {
            if (theaterKidFreebie01Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie02TalentRadio.checked == true) {
        for (i=0; i<theaterKidFreebie02Talents.length; i++) {
            if (theaterKidFreebie02Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie03TalentRadio.checked == true) {
        for (i=0; i<theaterKidFreebie03Talents.length; i++) {
            if (theaterKidFreebie03Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie01SkillRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01Skills.length; i++) {
            if (theaterKidFreebie01Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie02SkillRadio.checked == true) {
        for (i=0; i<theaterKidFreebie02Skills.length; i++) {
            if (theaterKidFreebie02Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie03SkillRadio.checked == true) {
        for (i=0; i<theaterKidFreebie03Skills.length; i++) {
            if (theaterKidFreebie03Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }

    if (theaterKidFreebie01KnowledgeRadio.checked == true) {
        for (i=0; i<theaterKidFreebie01Knowledges.length; i++) {
            if (theaterKidFreebie01Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie02KnowledgeRadio.checked == true) {
        for (i=0; i<theaterKidFreebie02Knowledges.length; i++) {
            if (theaterKidFreebie02Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (theaterKidFreebie03KnowledgeRadio.checked == true) {
        for (i=0; i<theaterKidFreebie03Knowledges.length; i++) {
            if (theaterKidFreebie03Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    abilityChange()
    removeAbilityOptions()
}

function resetTheaterKidAbilities() {
    whiteOutAbilitiesCells()
    let theaterKidActingOrMusicBlank = document.getElementById("theaterKidActingOrMusicBlank")
    let theaterKidKnowledgeBlank = document.getElementById("theaterKidKnowledgeBlank")
    let theaterKidFreebie01TalentBlank = document.getElementById("theaterKidFreebie01TalentBlank")
    let theaterKidFreebie02TalentBlank = document.getElementById("theaterKidFreebie02TalentBlank")
    let theaterKidFreebie03TalentBlank = document.getElementById("theaterKidFreebie03TalentBlank")
    let theaterKidFreebie01SkillBlank = document.getElementById("theaterKidFreebie01SkillBlank")
    let theaterKidFreebie02SkillBlank = document.getElementById("theaterKidFreebie02SkillBlank")
    let theaterKidFreebie03SkillBlank = document.getElementById("theaterKidFreebie03SkillBlank")
    let theaterKidFreebie01KnowledgeBlank = document.getElementById("theaterKidFreebie01KnowledgeBlank")
    let theaterKidFreebie02KnowledgeBlank = document.getElementById("theaterKidFreebie02KnowledgeBlank")
    let theaterKidFreebie03KnowledgeBlank = document.getElementById("theaterKidFreebie03KnowledgeBlank")
    let theaterKidBlanks = [theaterKidActingOrMusicBlank, theaterKidKnowledgeBlank, theaterKidFreebie01TalentBlank, theaterKidFreebie02TalentBlank, theaterKidFreebie03TalentBlank, theaterKidFreebie01SkillBlank, theaterKidFreebie02SkillBlank, theaterKidFreebie03SkillBlank, theaterKidFreebie01KnowledgeBlank, theaterKidFreebie02KnowledgeBlank, theaterKidFreebie03KnowledgeBlank]
    for (i=0; i<theaterKidBlanks.length; i++) {
        theaterKidBlanks[i].selected = true
    }
    abilityChange()
    reAddAbilityOptions()
}

function presentLonerFreebieTalent() {
    lonerFreebieTalentDiv.style.display = "inline"
    lonerFreebieSkillDiv.style.display = "none"
    lonerFreebieKnowledgeDiv.style.display = "none"
    lonerFreebieSkillBlank.selected = true
    lonerFreebieKnowledgeBlank.selected = true
}

function presentLonerFreebieSkill() {
    lonerFreebieTalentDiv.style.display = "none"
    lonerFreebieSkillDiv.style.display = "inline"
    lonerFreebieKnowledgeDiv.style.display = "none"
    lonerFreebieTalentBlank.selected = true
    lonerFreebieKnowledgeBlank.selected = true
}

function presentLonerFreebieKnowledge() {
    lonerFreebieTalentDiv.style.display = "none"
    lonerFreebieSkillDiv.style.display = "none"
    lonerFreebieKnowledgeDiv.style.display = "inline"
    lonerFreebieTalentBlank.selected = true
    lonerFreebieSkillBlank.selected = true
}

// loner declarations
let lonerTalent = document.getElementById("lonerTalent")
let lonerSkill01 = document.getElementById("lonerSkill01")
let lonerSkill02 = document.getElementById("lonerSkill02")
let lonerSkill03 = document.getElementById("lonerSkill03")

let lonerMustChooseTalentDiv = document.getElementById("lonerMustChooseTalentDiv")
let lonerMustChooseThreeSkillsDiv = document.getElementById("lonerMustChooseThreeSkillsDiv")
let lonerMustChooseFreebieDiv = document.getElementById("lonerMustChooseFreebieDiv")
let lonerCannotStackSkillsDiv = document.getElementById("lonerCannotStackSkillsDiv")
let lonerCannotStackTalentsDiv = document.getElementById("lonerCannotStackTalentsDiv")
let lonerNotificationDivs = [lonerMustChooseTalentDiv, lonerMustChooseThreeSkillsDiv, lonerMustChooseFreebieDiv, lonerCannotStackSkillsDiv, lonerCannotStackTalentsDiv]

function applyLonerAbilities() {
    resetAbilitiesToUntrained()
    // remove any previously-displayed notices
    for (i=0; i<lonerNotificationDivs.length; i++) {
        lonerNotificationDivs[i].style.display = 'none'
    }
    // lonerTalent must be chosen
    if (lonerTalent.value == '') {
        lonerMustChooseTalentDiv.style.display = 'block'
        return
    }
    // must choose 3 different Skills
    if (lonerSkill01.value == '' || lonerSkill02.value == '' || lonerSkill03.value == '') {
        lonerMustChooseThreeSkillsDiv.style.display = 'block'
        return
    }
    if (lonerSkill01.value == lonerSkill02.value || lonerSkill01.value == lonerSkill02.value || lonerSkill02.value == lonerSkill03.value) {
        lonerMustChooseThreeSkillsDiv.style.display = 'block'
        return
    }
    // must choose one freebie type
    if (lonerFreebieTalentRadio.checked == false && lonerFreebieSkillRadio.checked == false && lonerFreebieKnowledgeRadio.checked == false) {
        lonerMustChooseFreebieDiv.style.display = 'block'
        return
    }
    // if freebie is Talent, Talent must be selected  
    if (lonerFreebieTalentRadio.checked == true) {
        if (lonerFreebieTalentBlank.selected == true) {
            lonerMustChooseFreebieDiv.style.display = 'block'
            return
        }
    }
    // if freebie is Skill, Skill must be selected
    if (lonerFreebieSkillRadio.checked == true) {
        if (lonerFreebieSkillBlank.selected == true) {
            lonerMustChooseFreebieDiv.style.display = 'block'
            return
        }
    }
    // if freebie is Knowledge, Knowledge must be selected
    if (lonerFreebieKnowledgeRadio.checked == true) {
        if (lonerFreebieKnowledgeBlank.selected == true) {
            lonerMustChooseFreebieDiv.style.display = 'block'
            return
        }
    }
    // cannot stack lonerTalent with freebie Talent
    if (lonerFreebieTalentRadio.checked == true) {
        for (i=0; i<lonerFreebieTalents.length; i++) {
            if (lonerTalent.value == lonerFreebieTalents[i].value) {
                lonerCannotStackTalentsDiv.style.display = 'block'
                return
            }
        }
    }
    // cannot stack freebie skills
    if (lonerFreebieSkillRadio.checked == true) {
        if (lonerSkill01.value == lonerFreebieSkills.value || lonerSkill02.value == lonerFreebieSkills.value || lonerSkill03.value == lonerFreebieSkills.value) {
            lonerCannotStackSkillsDiv.style.display = 'block'
            return
        }
    }
    // apply selections
    for (i=0; i<talentStringArray.length; i++) {
        if (lonerTalent.value == talentStringArray[i]) {
            talentProficient[i].selected = true
            talentCells[i].style.backgroundColor = '#50C878'
            talentModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    for (i=0; i<skillStringArray.length; i++) {
        if (lonerSkill01.value == skillStringArray[i] || lonerSkill02.value == skillStringArray[i] || lonerSkill03.value == skillStringArray[i]) {
            skillProficient[i].selected = true
            skillCells[i].style.backgroundColor = '#50C878'
            skillModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    if (lonerFreebieTalentRadio.checked == true) {
        for (i=0; i<lonerFreebieTalents.length; i++) {
            if (lonerFreebieTalents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    for (i=0; i<lonerFreebieSkills.length; i++) {
        if (lonerFreebieSkills[i].selected == true) {
            if (skillUntrained[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }
        }    
    }
    for (i=0; i<lonerFreebieKnowledges.length; i++) {
        if (lonerFreebieKnowledges[i].selected == true) {
            if (knowledgeUntrained[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }
        }    
    }
    abilityChange()
    removeAbilityOptions()
}

function resetLonerAbilities() {
    whiteOutAbilitiesCells()
    let lonerTalentBlank = document.getElementById("lonerTalentBlank")
    let lonerSkill01Blank = document.getElementById("lonerSkill01Blank")
    let lonerSkill02Blank = document.getElementById("lonerSkill02Blank")
    let lonerSkill03Blank = document.getElementById("lonerSkill03Blank")
    let lonerFreebieTalentBlank = document.getElementById("lonerFreebieTalentBlank")
    let lonerFreebieSkillBlank = document.getElementById("lonerFreebieSkillBlank")
    let lonerFreebieKnowledgeBlank = document.getElementById("lonerFreebieKnowledgeBlank")
    let lonerBlanks = [lonerTalentBlank, lonerSkill01Blank, lonerSkill02Blank, lonerSkill03Blank, lonerFreebieTalentBlank, lonerFreebieSkillBlank, lonerFreebieKnowledgeBlank]
    for (i=0; i<lonerBlanks.length; i++) {
        lonerBlanks[i].selected = true
    }
    abilityChange()
    reAddAbilityOptions()
}

// declarations
let chameleonFreebie01TalentRadio = document.getElementById("chameleonFreebie01TalentRadio")
let chameleonFreebie01SkillRadio = document.getElementById("chameleonFreebie01SkillRadio")
let chameleonFreebie01KnowledgeRadio = document.getElementById("chameleonFreebie01KnowledgeRadio")
let chameleonFreebie02TalentRadio = document.getElementById("chameleonFreebie02TalentRadio")
let chameleonFreebie02SkillRadio = document.getElementById("chameleonFreebie02SkillRadio")
let chameleonFreebie02KnowledgeRadio = document.getElementById("chameleonFreebie02KnowledgeRadio")
let chameleonFreebie01TalentBlank = document.getElementById("chameleonFreebie01TalentBlank")
let chameleonFreebie01SkillBlank = document.getElementById("chameleonFreebie01SkillBlank")
let chameleonFreebie01KnowledgeBlank = document.getElementById("chameleonFreebie01KnowledgeBlank")
let chameleonFreebie02TalentBlank = document.getElementById("chameleonFreebie02TalentBlank")
let chameleonFreebie02SkillBlank = document.getElementById("chameleonFreebie02SkillBlank")
let chameleonFreebie02KnowledgeBlank = document.getElementById("chameleonFreebie02KnowledgeBlank")
let chameleonFreebie01TalentSelect = document.getElementById("chameleonFreebie01TalentSelect")
let chameleonFreebie01SkillSelect = document.getElementById("chameleonFreebie01SkillSelect")
let chameleonFreebie01KnowledgeSelect = document.getElementById("chameleonFreebie01KnowledgeSelect")
let chameleonFreebie02TalentSelect = document.getElementById("chameleonFreebie02TalentSelect")
let chameleonFreebie02SkillSelect = document.getElementById("chameleonFreebie02SkillSelect")
let chameleonFreebie02KnowledgeSelect = document.getElementById("chameleonFreebie02KnowledgeSelect")

let chameleonMustChooseTalentDiv = document.getElementById("chameleonMustChooseTalentDiv")
let chameleonMustChooseSkillDiv = document.getElementById("chameleonMustChooseSkillDiv")
let chameleonMustChooseKnowledgeDiv = document.getElementById("chameleonMustChooseKnowledgeDiv")
let chameleonMustHaveFirstFreebieDiv = document.getElementById("chameleonMustHaveFirstFreebieDiv")
let chameleonMustHaveSecondFreebieDiv = document.getElementById("chameleonMustHaveSecondFreebieDiv")
let chameleonCannotStackFreebiesDiv = document.getElementById("chameleonCannotStackFreebiesDiv")
let chameleonNotificationDivs = [chameleonMustChooseTalentDiv, chameleonMustChooseSkillDiv, chameleonMustChooseKnowledgeDiv, chameleonMustHaveFirstFreebieDiv, chameleonMustHaveSecondFreebieDiv, chameleonCannotStackFreebiesDiv]

function applyChameleonAbilities() {
    resetAbilitiesToUntrained()
    // remove any previously-displayed notices
    for (i=0; i<chameleonNotificationDivs.length; i++) {
        chameleonNotificationDivs[i].style.display = 'none'
    }
    // chameleonTalent must be chosen
    if (chameleonTalent.value == '') {
        chameleonMustChooseTalentDiv.style.display = 'block'
        return
    }
    // chameleonSkill must be chosen
    if (chameleonSkill.value == '') {
        chameleonMustChooseSkillDiv.style.display = 'block'
        return
    }
    // chameleonKnowledge must be chosen
    if (chameleonKnowledge.value == '') {
        chameleonMustChooseKnowledgeDiv.style.display = 'block'
        return
    }
    // First freebie must be chosen
    if (chameleonFreebie01TalentRadio.checked == false && chameleonFreebie01SkillRadio.checked == false && chameleonFreebie01KnowledgeRadio.checked == false) {
        chameleonMustHaveFirstFreebieDiv.style.display = 'block'
        return
    }
    if (chameleonFreebie01TalentRadio.checked == true) {
        if (chameleonFreebie01TalentBlank.selected == true) {
            chameleonMustHaveFirstFreebieDiv.style.display = 'block'
            return
        }
    }
    if (chameleonFreebie01SkillRadio.checked == true) {
        if (chameleonFreebie01SkillBlank.selected == true) {
            chameleonMustHaveFirstFreebieDiv.style.display = 'block'
            return
        }       
    }
    if (chameleonFreebie01KnowledgeRadio.checked == true) {
        if (chameleonFreebie01KnowledgeBlank.selected == true) {
            chameleonMustHaveFirstFreebieDiv.style.display = 'block'
            return
        }       
    }
    // Freebie 1 can't stack an earlier choice
    if (chameleonFreebie01TalentRadio.checked == true) {
        if (chameleonTalent.value == chameleonFreebie01TalentSelect.value) {
            chameleonCannotStackFreebiesDiv.style.display = 'block'
            return
        }
    }
    if (chameleonFreebie01SkillRadio.checked == true) {
        if (chameleonSkill.value == chameleonFreebie01SkillSelect.value) {
            chameleonCannotStackFreebiesDiv.style.display = 'block'
            return
        }
    }
    if (chameleonFreebie01KnowledgeRadio.checked == true) {
        if (chameleonKnowledge.value == chameleonFreebie01KnowledgeSelect.value) {
            chameleonCannotStackFreebiesDiv.style.display = 'block'
            return
        }
    }
    // Second freebie must be chosen
    if (chameleonFreebie02TalentRadio.checked == false && chameleonFreebie02SkillRadio.checked == false && chameleonFreebie02KnowledgeRadio.checked == false) {
        chameleonMustHaveSecondFreebieDiv.style.display = 'block'
        return
    }
    if (chameleonFreebie02TalentRadio.checked == true) {
        if (chameleonFreebie02TalentBlank.selected == true) {
            chameleonMustHaveSecondFreebieDiv.style.display = 'block'
            return
        }
    }
    if (chameleonFreebie02SkillRadio.checked == true) {
        if (chameleonFreebie02SkillBlank.selected == true) {
            chameleonMustHaveSecondFreebieDiv.style.display = 'block'
            return
        }       
    }
    if (chameleonFreebie02KnowledgeRadio.checked == true) {
        if (chameleonFreebie02KnowledgeBlank.selected == true) {
            chameleonMustHaveSecondFreebieDiv.style.display = 'block'
            return
        }       
    }
    // Freebie 2 can't stack an earlier choice
    if (chameleonFreebie02TalentRadio.checked == true) {
        if (chameleonTalent.value == chameleonFreebie02TalentSelect.value) {
            chameleonCannotStackFreebiesDiv.style.display = 'block'
            return
        }
    }
    if (chameleonFreebie02SkillRadio.checked == true) {
        if (chameleonSkill.value == chameleonFreebie02SkillSelect.value) {
            chameleonCannotStackFreebiesDiv.style.display = 'block'
            return
        }
    }
    if (chameleonFreebie02KnowledgeRadio.checked == true) {
        if (chameleonKnowledge.value == chameleonFreebie02KnowledgeSelect.value) {
            chameleonCannotStackFreebiesDiv.style.display = 'block'
            return
        }
    }


    // apply selections
    for (i=0; i<talentStringArray.length; i++) {
        if (chameleonTalent.value == talentStringArray[i]) {
            talentProficient[i].selected = true
            talentCells[i].style.backgroundColor = '#50C878'
            talentModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    for (i=0; i<skillStringArray.length; i++) {
        if (chameleonSkill.value == skillStringArray[i]) {
            skillProficient[i].selected = true
            skillCells[i].style.backgroundColor = '#50C878'
            skillModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    for (i=0; i<knowledgeStringArray.length; i++) {
        if (chameleonKnowledge.value == knowledgeStringArray[i]) {
            knowledgeProficient[i].selected = true
            knowledgeCells[i].style.backgroundColor = '#50C878'
            knowledgeModifierCells[i].style.backgroundColor = '#50C878'
        }
    }
    if (chameleonFreebie01TalentRadio.checked == true) {
        for (i=0; i<chameleonFreebie01Talents.length; i++) {
            if (chameleonFreebie01Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (chameleonFreebie01SkillRadio.checked == true) {
        for (i=0; i<chameleonFreebie01Skills.length; i++) {
            if (chameleonFreebie01Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (chameleonFreebie01KnowledgeRadio.checked == true) {
        for (i=0; i<chameleonFreebie01Knowledges.length; i++) {
            if (chameleonFreebie01Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (chameleonFreebie02TalentRadio.checked == true) {
        for (i=0; i<chameleonFreebie02Talents.length; i++) {
            if (chameleonFreebie02Talents[i].selected == true) {
                talentProficient[i].selected = true
                talentCells[i].style.backgroundColor = '#50C878'
                talentModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (chameleonFreebie02SkillRadio.checked == true) {
        for (i=0; i<chameleonFreebie02Skills.length; i++) {
            if (chameleonFreebie02Skills[i].selected == true) {
                skillProficient[i].selected = true
                skillCells[i].style.backgroundColor = '#50C878'
                skillModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    if (chameleonFreebie02KnowledgeRadio.checked == true) {
        for (i=0; i<chameleonFreebie02Knowledges.length; i++) {
            if (chameleonFreebie02Knowledges[i].selected == true) {
                knowledgeProficient[i].selected = true
                knowledgeCells[i].style.backgroundColor = '#50C878'
                knowledgeModifierCells[i].style.backgroundColor = '#50C878'
            }
        }
    }
    abilityChange()
    removeAbilityOptions()
}

function resetChameleonAbilities() {
    whiteOutAbilitiesCells()
    let chameleonTalentBlank = document.getElementById("chameleonTalentBlank")
    let chamaleonSkillBlank = document.getElementById("chameleonSkillBlank")
    let chameleonKnowledgeBlank = document.getElementById("chameleonKnowledgeBlank")
    let chameleonFreebie01TalentBlank = document.getElementById("chameleonFreebie01TalentBlank")
    let chameleonFreebie02TalentBlank = document.getElementById("chameleonFreebie02TalentBlank")
    let chameleonFreebie01SkillBlank = document.getElementById("chameleonFreebie01SkillBlank")
    let chameleonFreebie02SkillBlank = document.getElementById("chameleonFreebie02SkillBlank")
    let chameleonFreebie01KnowledgeBlank = document.getElementById("chameleonFreebie01KnowledgeBlank")
    let chameleonFreebie02KnowledgeBlank = document.getElementById("chameleonFreebie02KnowledgeBlank")
    let chameleonBlanks = [chameleonTalentBlank, chamaleonSkillBlank, chameleonKnowledgeBlank, chameleonFreebie01TalentBlank, chameleonFreebie02TalentBlank, chameleonFreebie01SkillBlank, chameleonFreebie02SkillBlank, chameleonFreebie01KnowledgeBlank, chameleonFreebie02KnowledgeBlank]
    for (i=0; i<chameleonBlanks.length; i++) {
        chameleonBlanks[i].selected = true
    }
    abilityChange()
    reAddAbilityOptions()
}