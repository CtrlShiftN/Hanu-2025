import GameScreen from "./GameScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import BankScreen from "./BankScreen";
import RelationScreen from "./RelationScreen";
import CourseScreen from "./CourseScreen";
import JobScreen from "./JobScreen";
import ShopScreen from "./ShopScreen";
import ProfileScreen from "./ProfileScreen";
const screens = [
    {name: 'LoginScreen', component: LoginScreen },
    {name : 'GameScreen' , component: GameScreen },
    {name: 'JobScreen', component: JobScreen},
    {name: 'ProfileScreen', component: ProfileScreen},
    {name : 'BankScreen' , component : BankScreen},
    {name:'ShopScreen' , component: ShopScreen},
    {name: 'CourseScreen' ,component: CourseScreen},
    {name: 'RelationScreen', component: RelationScreen},
    {name: 'RegisterScreen', component: RegisterScreen },
]
export default screens