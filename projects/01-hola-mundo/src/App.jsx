
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export const App = () => {
    const formatUserName = (username) => {
        return `@${username}`;
    }
    return (
        <seccion className='App'>
            <TwitterFollowCard formatUserName={formatUserName} userName='midudev'>
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName='pheralb'>
                Pablo Hernandez
            </TwitterFollowCard>
        </seccion>
        
    )
}