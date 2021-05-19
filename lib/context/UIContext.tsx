import { Cross } from '@components/icons';
import { ThemeProvider } from 'next-themes';
import { createContext, FC, useMemo, useReducer } from 'react';
import { ToastContainer } from 'react-toastify';

type UIState = {
  displayModal: boolean;
  modalView: ModalViews;
  modalTitle?: string;
  openModal(): void;
  closeModal(): void;
  setModalView(view: ModalViews, title?: string): void;
};

const INITIAL_UI_STATE: UIState = {
  displayModal: false,
  modalView: 'NO_VIEW',
  modalTitle: '',
  closeModal: () => {},
  openModal: () => {},
  setModalView: () => {},
};

type ModalViews = 'NO_VIEW' | 'LANGUAGE_VIEW';

type Action =
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: ModalViews;
      title?: string;
    };

export const UIContext = createContext<UIState>(INITIAL_UI_STATE);

UIContext.displayName = 'UIContext';

const uiReducer = (state: UIState, action: Action): UIState => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        modalView: 'NO_VIEW',
        displayModal: false,
        modalTitle: '',
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
        modalTitle: action.title,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export const UIProvider = (props: any) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_UI_STATE);

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const setModalView = (view: ModalViews, title?: string) =>
    dispatch({ type: 'SET_MODAL_VIEW', view, title });

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const ManagedUIProvider: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider
      enableSystem
      enableColorScheme
      defaultTheme="system"
      themes={['light', 'dark']}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        closeButton={Cross}
      />
      {children}
    </ThemeProvider>
  </UIProvider>
);
