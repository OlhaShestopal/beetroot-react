const initialState = {
  role: 'guest',
  todos: [
    {
      id: Date.now(),
      description: 'Test todo...',
      completed: false
    }
  ]
}

export {
  initialState
}