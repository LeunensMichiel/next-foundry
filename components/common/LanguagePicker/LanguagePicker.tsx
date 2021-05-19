import { Globe } from '@components/icons';
import { Button } from '@components/ui';
import { useUI } from '@lib/hooks';
import useTranslation from 'next-translate/useTranslation';

export const LangCode: Record<string, string> = {
  nl: 'Nederlands',
  fr: 'Français',
  en: 'English',
};

const LanguagePicker = () => {
  const { t, lang } = useTranslation('common');
  const { openModal, setModalView } = useUI();

  const handleLanguageBtnClick = () => {
    setModalView('LANGUAGE_VIEW', t('i18n.select'));
    openModal();
  };

  return (
    <Button
      type="button"
      iconLeft={<Globe />}
      onClick={handleLanguageBtnClick}
      size="sm"
      outlined
    >
      {LangCode[lang]}
    </Button>
  );
};

export default LanguagePicker;
