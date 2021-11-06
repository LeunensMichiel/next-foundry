/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

export type UIState = {
  displayModal: boolean;
  modalView: ModalViews;
  modalTitle?: string;
  openModal(): void;
  closeModal(): void;
  setModalView(view: ModalViews, title?: string): void;
};

export const INITIAL_UI_STATE: UIState = {
  displayModal: false,
  modalView: 'NO_VIEW',
  modalTitle: '',
  closeModal: () => {},
  openModal: () => {},
  setModalView: () => {},
};

export type ModalViews = 'NO_VIEW' | 'LANGUAGE_VIEW';

export const UIContext = createContext<UIState>(INITIAL_UI_STATE);

UIContext.displayName = 'UIContext';
