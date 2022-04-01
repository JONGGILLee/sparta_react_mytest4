// dict.js

// Actions
const CREATE = "dict/CREATE";

// 초기값 (선택)
const initialState = {
  list: ["영화관 가기", "매일 책읽기"],
};

// Action Creators
export function createDict(dict) {
  return { type: CREATE, dict: dict };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  //                      => action 이라는 파라미터에 아무 값이 안 들어온다면 {} 즉, 빈 딕셔너리일거야
  switch (action.type) {
    case "dict/CREATE": {
      //                      => switch '전환하라' case '주어진 상태에 따라'
      const new_dict_list = [...state.list, action.dict];
      return { list: new_dict_list };
    }
    default:
      return state;
  }
}
