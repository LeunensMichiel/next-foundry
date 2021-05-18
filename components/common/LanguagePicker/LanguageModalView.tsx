import { Fieldset } from '@components/common';
import { RadioButton } from '@components/ui';
import i18nConfig from 'i18n.json';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';

import { LangCode } from './LanguagePicker';

const { locales } = i18nConfig;
const COOKIE_NAME = 'NEXT_LOCALE';

const LanguageModalView = () => {
  const { t } = useTranslation('common');
  const [, setCookie] = useCookies([COOKIE_NAME]);

  const handleLangChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (LangCode[e.target.value]) {
      await setLanguage(e.target.value);
      // Expire after 1 month
      setCookie(COOKIE_NAME, e.target.value, { maxAge: 2629743 });
    }
  };
  return (
    <Fieldset label={t('i18n.select')}>
      {locales.map((lng) => (
        <RadioButton
          label={LangCode[lng]}
          onChange={handleLangChange}
          value={lng}
          key={lng}
          name="language"
          tabIndex={0}
        />
      ))}
    </Fieldset>
  );
};

export default LanguageModalView;
