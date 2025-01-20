import { ONE_WEEK } from '../constants/index.js';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshUsersSession,
  registerUser,
} from '../services/auth.js';

const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken.toString(), {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_WEEK),
  });
  res.cookie('sessionId', session._id.toString(), {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_WEEK),
  });
};

export const registerUserController = async (req, res) => {
  const session = await registerUser(req.body);

  setupSession(res, session);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    accessToken: session.accessToken,
  });
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_WEEK),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_WEEK),
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully logged in an user!',
    accessToken: session.accessToken,
  });
};

export const logoutUserController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  }

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.status(204).send();
};

export const refreshUserSessionController = async (req, res) => {
  const session = await refreshUsersSession({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });

  setupSession(res, session);

  res.status(200).json({
    status: 200,
    message: 'Successfully refreshed a session!',
    accessToken: session.accessToken,
  });
};

export const getCurrentUserController = async (req, res) => {
  const user = await getCurrentUser(req.cookies.sessionId);
  res.status(200).json({
    status: 200,
    message: 'Successfully finded a current user!',
    user,
  });
};
