export function signInRequest(email, password) {
  return {
    // primeiro o nome do módulo e barra
    type: '@auth/SIGN_IN_REQUEST',
    // O payload vai qualquer informação que não seja o type, informações que receve
    payload: { email, password },
  };
}

// Recebe o token e os dados do user
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
