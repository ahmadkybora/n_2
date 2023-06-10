const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');
const { join } = require('path');
const { readdirSync, lstatSync } = require('fs');

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

const localesFolder = join(__dirname, '../locales');

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    initImmediate: false,
    fallbackLng: 'en',
    preload: readdirSync(localesFolder).filter((fileName) => {
      const joinedPath = join(localesFolder, fileName);
      return lstatSync(joinedPath).isDirectory();
    }),
    backend: {
      loadPath: join(localesFolder, '{{lng}}.json')
    }
});

module.exports = (lng) => i18next.getFixedT(lng || systemLocale);
