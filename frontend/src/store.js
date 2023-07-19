import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  skillListReducer,
  skillDetailsReducer,
  skillDeleteReducer,
  skillCreateReducer,
  skillUpdateReducer,
} from './reducers/skillReducers';

import {
  projectListReducer,
  projectDetailsReducer,
  projectDeleteReducer,
  projectCreateReducer,
  projectUpdateReducer,
} from './reducers/projectReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers';

const reducers = {
  skillList: skillListReducer,
  skillDetails: skillDetailsReducer,
  skillDelete: skillDeleteReducer,
  skillCreate: skillCreateReducer,
  skillUpdate: skillUpdateReducer,
  projectList: projectListReducer,
  projectDetails: projectDetailsReducer,
  projectDelete: projectDeleteReducer,
  projectCreate: projectCreateReducer,
  projectUpdate: projectUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
};

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
