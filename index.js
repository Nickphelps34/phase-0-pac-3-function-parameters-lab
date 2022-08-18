function introduction(name){
    return(`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name1, language){
    return(`Hi, my name is ${name1} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(name2, language2 = "JavaScript"){
    return(`Hi, my name is ${name2} and I am learning to program in ${language2}.`);
}