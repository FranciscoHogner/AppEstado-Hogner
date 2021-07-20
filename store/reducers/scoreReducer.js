import { JUGADORES } from "../../data/jugadores";
import { SELECT_SCORE } from "../actions/score.action";

const INITIAL_STATE = {
  list: JUGADORES,
  selected: null,
};

const ScoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SCORE:
      return {
        ...state,
        selected: state.list.find(score => score.id === action.scoreID),
      };
    default:
      return { ...state };
  }
};

export default ScoreReducer;
