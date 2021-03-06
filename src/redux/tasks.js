const initialState = {
  loading: true,
  closed: true,
  openedTasks: false,
  loadingColor: true,
  selectedColorSwitcher: "",
  loadingDoneTasks: null,
  loadingDeletedTasks: null,
  addingToTrash: false,
  addingToDone: false,
  addingToImportant: false,
  items: [],
  id: "",
  addTaskValue: "",
  searchValue: "",
  addingTask: true,
  deletingTask: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "tasks/open/start":
      return {
        ...state,
        loading: true,
        openedTasks: false,
        loadingDoneTasks: null,
        loadingDeletedTasks: null,
      };
    case "tasks/open/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
        openedTasks: true,
      };
    case "tasksAll/open/start":
      return {
        ...state,
        loading: true,
        openedTasks: false,
        loadingDoneTasks: null,
        loadingDeletedTasks: null,
      };
    case "tasksAll/open/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
        openedTasks: true,
      };
    case "tasks/setTaskValue":
      return {
        ...state,
        addTaskValue: action.payload,
      };
    case "tasks/setSearchValue":
      return {
        ...state,
        searchValue: action.payload,
      };
    case "tasks/saveTask/start":
      return {
        ...state,
        addingTask: true,
      };
    case "tasks/saveTask/succeed":
      return {
        ...state,
        items: [...state.items, action.payload],
        addTaskValue: "",
        addingTask: false,
      };
    case "tasks/saveTaskWithStar/start":
      return {
        ...state,
        addingTask: true,
      };
    case "tasks/saveTaskWithStar/succeed":
      return {
        ...state,
        items: [...state.items, action.payload],
        addTaskValue: "",
        addingTask: false,
      };
    case "tasks/deleteTask/start":
      return {
        ...state,
        deletingTask: true,
      };
    case "tasks/deleteTask/succeed":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        deletingTask: false,
      };
    case "tasks/addToDone/start":
      return {
        ...state,
        addingToDone: true,
      };
    case "tasks/addToDone/succeed":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        addingToDone: false,
      };
    case "tasks/addToImportant/start":
      return {
        ...state,
        addingToImportant: true,
      };
    case "tasks/addToImportant/succeed":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              important: true,
            };
          }
          return item;
        }),
        addingToImportant: false,
      };
    case "tasks/addToTrash/start":
      return {
        ...state,
        addingToTrash: true,
      };
    case "tasks/addToTrash/succeed":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        addingToTrash: false,
      };
    case "tasks/openDone/start":
      return {
        ...state,
        loadingDoneTasks: true,
        loading: null,
        loadingDeletedTasks: null,
      };
    case "tasks/openDone/succeed":
      return {
        ...state,
        items: action.payload,
        loadingDoneTasks: false,
      };
    case "tasks/openDeleted/start":
      return {
        ...state,
        loading: null,
        loadingDoneTasks: null,
        loadingDeletedTasks: true,
      };
    case "tasks/openDeleted/succeed":
      return {
        ...state,
        items: action.payload,
        loadingDeletedTasks: false,
      };
    case "tasks/selectColor/start":
      return {
        ...state,
        loadingColor: true,
      };
    case "tasks/selectColor/succeed":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              color: action.payload.color,
            };
          }
          return item;
        }),
        loadingColor: false,
        closed: true,
      };
    case "tasks/colorsOpen":
      return {
        ...state,
        selectedColorSwitcher: action.payload,
        closed: false,
      };
    default:
      return state;
  }
}

export default reducer;
