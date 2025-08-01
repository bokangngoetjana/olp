"use client";
import { createContext } from "react";

import { IInstructor } from "../types";

// State context for instructor profile
export interface IInstructorStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  profile?: IInstructor | null;
  error?: string | null;
}

// Action context for instructor profile
export interface IInstructorActionContext {
  getProfile: () => Promise<void>;
  updateProfile: (data: Partial<IInstructor>) => Promise<void>;
  setProfile: (profile: IInstructor | null) => void;
  resetProfile: () => void;
}

// Initial state
export const INSTRUCTOR_PROFILE_INITIAL_STATE: IInstructorStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  profile: null,
  error: null,
};

// State context
export const InstructorProfileStateContext =
  createContext<IInstructorStateContext>(INSTRUCTOR_PROFILE_INITIAL_STATE);

// Action context
export const InstructorProfileActionContext =
  createContext<IInstructorActionContext | undefined>(undefined);