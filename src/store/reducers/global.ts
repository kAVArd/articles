import { GlobalState } from "../../types";
import { SET_ARTICLES } from "../actions";

const initState: GlobalState = {
  articles: [],
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_ARTICLES: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
