import React, { Dispatch, SetStateAction } from 'react';

export interface IHeaderLinks {
  link: string;
  number: string;
  href: string;
}
export interface IDestinationLinks {
  link: string;
  href: string;
}
export interface ICrewLinks {
  href: string;
}
export interface ICommonTitle {
  number: string;
  description: string;
}
export interface IBurger {
  burgerMenu: boolean;
  setBurgerMenu: Dispatch<SetStateAction<boolean>>;
}
export interface IGlobalContext {
  close: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}
