import { FAILED_LOGIN_USER, SUCCESS_LOGIN_USER, SUCCESS_SIGNUP_USER, FAILED_SIGNUP_USER, LOGOUT_USER, MODEL_INFO } from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case MODEL_INFO: {
      return state = {
        ...state,
        car_model: action.payload
      }
    }

    case SUCCESS_SIGNUP_USER: {
      return state = {
        ...state,
        token: action.payload
      }
    }

    case SUCCESS_LOGIN_USER: {
      return state = {
        ...state,
        token: action.payload
      }
    }

    case FAILED_LOGIN_USER: {
      return state = {
        ...state,
        token: false
      }
    }

    case FAILED_SIGNUP_USER: {
      return state = {
        ...state,
        token: false
      }
    }

    case LOGOUT_USER: {
      return state = {}
    }

    default:
      return state;
  }
}
