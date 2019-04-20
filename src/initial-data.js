const initialData = {
  tasks: {
    "task-1": { "id": "task-1", "content": "Practice Six Directions" },
    "task-2": { "id": "task-2", "content": "Drink some tea" },
    "task-3": { "id": "task-3", "content": "Do some reading" },
    "task-4": { "id": "task-4", "content": "Clean the litter box" },
  },
  "columns": {
    "column-1": {
      "id": "column-1",
      "title": "To do",
      "taskIds": ["task-1", "task-2", "task-3", "task-4"]
    }
  },
  // Faciltate reordering of columns
  "columnOrder": ["column-1"]
};

export default initialData;