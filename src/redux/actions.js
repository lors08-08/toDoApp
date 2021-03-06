export function loadCategories() {
  return (dispatch) => {
    dispatch({ type: "categories/load/start" });
    fetch("http://localhost:3010/categories")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "categories/load/succeed",
          payload: json,
        });
      });
  };
}

export function openTasks(id) {
  return (dispatch) => {
    dispatch({
      type: "tasks/open/start",
    });
    fetch(`http://localhost:3010/tasks?categoryId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "tasks/open/succeed",
          payload: json,
        });
      });
  };
}
export function openAllTasks() {
  return (dispatch) => {
    dispatch({
      type: "tasksAll/open/start",
    });
    fetch("http://localhost:3010/tasks?deleted=false&done=false")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "tasksAll/open/succeed",
          payload: json,
        });
      });
  };
}

export function openDoneTasks(id) {
  return (dispatch) => {
    dispatch({ type: "tasks/openDone/start" });
    fetch(`http://localhost:3010/tasks?${id}=true`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "tasks/openDone/succeed",
          payload: json,
        });
      });
  };
}

export function openDeletedTasks(id) {
  return (dispatch) => {
    dispatch({ type: "tasks/openDeleted/start" });
    fetch(`http://localhost:3010/tasks?${id}=true`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "tasks/openDeleted/succeed",
          payload: json,
        });
      });
  };
}

export function setAddCategoryValue(value) {
  return (dispatch) => {
    dispatch({
      type: "category/setAddCategoryValue",
      payload: value,
    });
  };
}

export function saveCategory(value) {
  return (dispatch) => {
    dispatch({ type: "categories/saveCategory/start" });
    fetch("http://localhost:3010/categories", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${value}`,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "categories/saveCategory/succeed",
          payload: json,
        });
      });
  };
}

export function setTaskValue(value) {
  return (dispatch) => {
    dispatch({
      type: "tasks/setTaskValue",
      payload: value,
    });
  };
}

export function setSearchValue(value) {
  return (dispatch) => {
    dispatch({
      type: "tasks/setSearchValue",
      payload: value,
    });
  };
}

export function saveTask(content, idCategory, time, starred) {
  return (dispatch) => {
    dispatch({ type: "tasks/saveTask/start" });
    fetch("http://localhost:3010/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${content}`,
        time: `${time}`,
        categoryId: parseInt(`${idCategory}`),
        done: false,
        important: starred,
        color: "#ded3ff",
        deleted: false,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "tasks/saveTask/succeed",
          payload: json,
        });
      });
  };
}

export function saveTaskWithStar(content, idCategory, time) {
  return (dispatch) => {
    dispatch({ type: "tasks/saveTaskWithStar/start" });
    fetch("http://localhost:3010/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${content}`,
        time: `${time}`,
        categoryId: parseInt(`${idCategory}`),
        done: false,
        important: true,
        color: "#ded3ff",
        deleted: false,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "tasks/saveTaskWithStar/succeed",
          payload: json,
        });
      });
  };
}

export function addToTrash(id) {
  return (dispatch) => {
    dispatch({ type: "tasks/addToTrash/start" });
    fetch(`http://localhost:3010/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: "deleted",
        done: false,
        deleted: true,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "tasks/addToTrash/succeed",
          payload: id,
        });
      });
  };
}

export function addToImportant(id) {
  return (dispatch) => {
    dispatch({ type: "tasks/addToImportant/start" });
    fetch(`http://localhost:3010/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        important: true,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "tasks/addToImportant/succeed",
          payload: id,
        });
      });
  };
}

export function addToDone(id) {
  return (dispatch) => {
    dispatch({ type: "tasks/addToDone/start" });
    fetch(`http://localhost:3010/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: "done",
        done: true,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "tasks/addToDone/succeed",
          payload: id,
        });
      });
  };
}

export function deleteTask(id) {
  return (dispatch) => {
    dispatch({ type: "tasks/deleteTask/start" });
    fetch(`http://localhost:3010/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "tasks/deleteTask/succeed",
          payload: id,
        });
      });
  };
}

export function colorsOpen(id) {
  return (dispatch) => {
    dispatch({
      type: "tasks/colorsOpen",
      payload: id,
    });
  };
}
export function cc(color) {
  return (dispatch) => {
    dispatch({
      type: "application/selectColor",
      payload: color,
    });
  };
}
export function selectColor(id, color) {
  return (dispatch) => {
    dispatch({ type: "tasks/selectColor/start" });
    fetch(`http://localhost:3010/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color: `${color}`,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "tasks/selectColor/succeed",
          payload: { id, color },
        });
      });
  };
}
