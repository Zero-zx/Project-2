'use strict';
class TemplateProcessor {
    constructor(template) {
    this.template = template;
    }
    fillIn(dictionary) {
        let result = this.template;
        for (const key in dictionary) {
            if (key in dictionary) {
                //get the key in string that exists in the dictionary
                const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g"); 
                //replace the key with the value in dictionary
                result = result.replace(regex, dictionary[key]);
            }
        }   
    return result;
    } 
}

window.TemplateProcessor = TemplateProcessor;