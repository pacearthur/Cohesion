const initialState = {
  todos: [{
    id: 213,
    title: 'Réalisation de visuels',
    description: 'Réfléchir et maquetter les premiers visuels des affiches.',
    completed: true,
    priority: 'high',
  },
  {
    id: 215,
    title: 'Mise en couleurs',
    description: 'Mettre en couleurs les visuels validés ',
    completed: false,
    priority: 'low',
  },
  {
    id: 214,
    title: 'Impression',
    description: 'Imprimer les affiches',
    completed: false,
    priority: 'medium',
  },
  {
    id: 216,
    title: "Campagne d'affichage",
    description: 'Collage des affiches dans les lieux concernés',
    completed: false,
    priority: 'low',
  }],
  priorityFilter: '',
};

function getId(state) {
  return state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          title: action.title,
          description: action.description,
          priority: action.priority,
          completed: false,
          id: getId(state),
        }, ...state.todos],
      });
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => (todo.id === action.id
          ? Object.assign({}, todo, {
            updated: false,
            completed: !todo.completed,
          }) : todo)),
      });
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id),
      });
    case 'PRIORITY_FILTER':
      return Object.assign({}, state, {
        priorityFilter: action.priorityFilter,
      });
    default:
      return state;
  }
};
export default todoReducer;
