// dict.js

// Actions
const CREATE = "dict/CREATE";
const DELETE = "dict/DELETE";

// 초기값 (선택)
const initialState = {
  list: ["영화관 가서 문화생활", "매일 책읽어야해"],
};

// Action Creators
export function createDict(dict) {
  return { type: CREATE, dict: dict };
}

export function deleteDict(dict_index) {
  console.log("지울 인덱스", dict_index);
  return { type: DELETE, dict_index };
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

    case "dict/DELETE": {
      console.log(state, action);
      const new_dict_list = state.list.filter((l, idx) => {
        console.log(
          parseInt(action.dict_index) !== idx,
          parseInt(action.dict_index),
          idx
        );
        return parseInt(action.dict_index) !== idx;
      });
      console.log(new_dict_list);
      return { list: new_dict_list };
    }

    default:
      return state;
  }
}
