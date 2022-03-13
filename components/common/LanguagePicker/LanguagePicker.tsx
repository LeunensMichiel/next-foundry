import { Globe } from '@components/icons';
import { Button } from '@components/ui';
import { useUI } from '@lib/hooks';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

export const LangCode: Record<string, string> = {
  nl: 'Nederlands',
  fr: 'Français',
  en: 'English',
};

type LanguagePickerProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
};

const LanguagePicker: VFC<LanguagePickerProps> = ({
  outlined = true,
  size = 'sm',
}) => {
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
      variant="secondary"
      size={size}
      outlined={outlined}
    >
      {LangCode[lang]}
    </Button>
  );
};

export default LanguagePicker;
