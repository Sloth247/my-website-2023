import {
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
  SKILL_LIST_FAIL,
  SKILL_DETAILS_REQUEST,
  SKILL_DETAILS_SUCCESS,
  SKILL_DETAILS_FAIL,
  SKILL_DELETE_REQUEST,
  SKILL_DELETE_SUCCESS,
  SKILL_DELETE_FAIL,
  SKILL_CREATE_REQUEST,
  SKILL_CREATE_SUCCESS,
  SKILL_CREATE_FAIL,
  SKILL_UPDATE_REQUEST,
  SKILL_UPDATE_SUCCESS,
  SKILL_UPDATE_FAIL,
  SKILL_CREATE_RESET,
  SKILL_UPDATE_RESET,
} from '../constants/skillConstants';

export const skillListReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILL_LIST_REQUEST:
      return { loading: true, skills: [] };
    case SKILL_LIST_SUCCESS:
      return {
        loading: false,
        skills: action.payload,
      };
    case SKILL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const skillDetailsReducer = (
  state = {
    skill: {},
  },
  action
) => {
  switch (action.type) {
    case SKILL_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SKILL_DETAILS_SUCCESS:
      return { loading: false, skill: action.payload };
    case SKILL_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const skillDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILL_DELETE_REQUEST:
      return { loading: true, ...state };
    case SKILL_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SKILL_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const skillCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILL_CREATE_REQUEST:
      return { loading: true, ...state };
    case SKILL_CREATE_SUCCESS:
      return { loading: false, success: true, skill: action.payload };
    case SKILL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SKILL_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const skillUpdateReducer = (state = { skill: {} }, action) => {
  switch (action.type) {
    case SKILL_UPDATE_REQUEST:
      return { loading: true, ...state };
    case SKILL_UPDATE_SUCCESS:
      return { loading: false, success: true, skill: action.payload };
    case SKILL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SKILL_UPDATE_RESET:
      return { skill: {} };
    default:
      return state;
  }
};
