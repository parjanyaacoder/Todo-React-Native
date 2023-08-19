import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../constants/Screens';
import TodoDetailsPage from '../views/TodoDetailsPage';
import CreateTodoPage from '../views/CreateTodoPage';
import DailyTodoListPage from '../views/DailyTodoListPage';
import WeeklyTodoListPage from '../views/WeeklyTodoListPage';
import HomePage from '../views/HomePage';
import MonthlyTodoListPage from '../views/MonthlyTodoListPage';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Screens.HOME_PAGE} component={HomePage} />
        <Stack.Screen name={Screens.TODO_DETAILS_PAGE} component={TodoDetailsPage} />
        <Stack.Screen name={Screens.CREATE_TODO_PAGE} component={CreateTodoPage} />
        <Stack.Screen name={Screens.DAILY_TODO_LIST_PAGE} component={DailyTodoListPage} />
        <Stack.Screen name={Screens.WEEKLY_TODO_LIST_PAGE} component={WeeklyTodoListPage} />
        <Stack.Screen name={Screens.MONTHLY_TODO_LIST_PAGE} component={MonthlyTodoListPage} />
      </Stack.Navigator>
    );
  }
  
  export default StackNavigator;