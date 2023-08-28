import {
  ADD_PRODUCT_SUCCESS,
  ADD_User_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  DELETE_User_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_User_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  PATCH_User_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionType";

const initState = {
  users: [],
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case GET_User_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, data: [...state.data, payload] };
    case ADD_User_SUCCESS:
      return { ...state, isLoading: false, data: [...state.users, payload] };
    
    case PATCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, data: [...state.data, payload] };
    case PATCH_User_SUCCESS:
      return { ...state, isLoading: false, data: [...state.users, payload] };
   
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case DELETE_User_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    
    default:
      return state;
  }
};
