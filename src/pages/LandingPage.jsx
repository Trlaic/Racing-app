import './LandingPage.scss';
import ParticipantsList from "../components/ParticipantsList";
import RunnerDetails from "../components/RunnerDetails";

export default function LandingPage() {
    return (
        <div className="container">
            <div className='container--left'>
                <RunnerDetails />
            </div>
            <div className='container--right'>
                <ParticipantsList />
            </div>
        </div>
    )
}