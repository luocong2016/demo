```
## 测试
{
  getTask(id: 1) {
    id
    title
    completed
    project{
      id
      name
    }
  }
  projectByName(name: "Workout") {
    id
    name
    tasks{
      id
      title
      completed
    }
  }
}

## 结果
{
  "data": {
    "getTask": {
      "id": 1,
      "title": "Install Node",
      "completed": true,
      "project": {
        "id": 1,
        "name": "Learn React Native"
      }
    },
    "projectByName": {
      "id": 2,
      "name": "Workout",
      "tasks": [
        {
          "id": 4,
          "title": "Morning Jog",
          "completed": true
        },
        {
          "id": 5,
          "title": "Visit the gym",
          "completed": false
        }
      ]
    }
  }
}
```