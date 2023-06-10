const respMsg = (res, status, errMsg, data=null, state=null) => {
    res.status(status).json({
        state,
        errMsg,
        data,
    });
}

const translate = (lang, key) => {
    const translationFile = require('@locales/' + lang.split(',')[1] + '/translation.json');
    const translationResult = translationFile[key]
    return translationResult;
}

module.exports = {
    respMsg,
    translate
};

    
// const l = require('@locales/' + lang.split(',')[1] + '/translation.json');
// const s = l[key].replace(`{{${name}}}`, l[val])
// return s;

        // console.log(replace);
    // console.log(replace);
        // let values = Object.values(n);
    // console.log(values);
    // console.log(s);
    // console.log(l[key])


    // if(lang === 'en-US,en') {
        // const is = lang.split(',')[1];
        // console.log(l[key])
        // return '@locales/' + is + '/translation.json';
    // }