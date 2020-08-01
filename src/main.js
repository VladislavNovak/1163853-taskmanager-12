import {createSiteMenuTemplate} from "./_view/site-menu.js";
import {createFilterTemplate} from "./_view/filter.js";
import {createBoardTemplate} from "./_view/board.js";
import {createTaskTemplate} from "./_view/task.js";
import {createTaskEditTemplate} from "./_view/task-edit.js";
import {createLoadMoreButtonTemplate} from "./_view/load-more-button.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
